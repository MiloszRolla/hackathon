import React from 'react'
import styles from "./eventCard.module.css"
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import moment from 'moment';
import { Box } from '@mui/system';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { useRouter } from 'next/router';


export default function EventCard(props) {
    const router = useRouter();
    const getCategory = () => {
        if(!props.data.category) {
            return styles.default
        }
        switch(props.data.category) {
            case "Task":
                switch(props.data.group) { 
                    case "Family":
                        return styles.family
                    case "Friends":
                        return styles.friend
                    case "Work":
                        return styles.task
                }
            case "Meet":
                return styles.meet;
        }
    }

    const [selectedValue, setSelectedValue] = React.useState('a');
    const deleteEvent = () => {
        let events = localStorage.getItem("events");
        events = JSON.parse(events);
        const newEvents = events.filter(task => props.data.id!=task.id);
        localStorage.setItem("events", newEvents)
        axios
            .post("https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/tasks.json?alt=media&token=7ce765bd-4df8-4521-bb5b-8c625aff0d21", 
            newEvents
            )
            .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            });
        setTimeout(() => router.reload(), 250);
        
    };

    return (
    <Paper elevation={14} sx={{my:1, minWidth: props.width, maxHeight: '100px' }}  className={`${styles.card} ${getCategory()}`}>
    <CardContent>
        <Box sx={{display:"flex", justifyContent:'space-between'}}>
        <Typography sx={{ fontSize: 14 }} color="white" >
            {moment(props.data.Date).format('HH:mm')} - {moment(props.data.endDate).format('HH:mm')}
        </Typography>


    <IconButton onClick={deleteEvent} aria-label="delete">
        <DeleteIcon />
      </IconButton>
        </Box>
    
        <Typography color="white" variant="h6" height="" minHeight={25}>
            { props.data.title }
        </Typography>
    </CardContent>
    </Paper>

    )
}
