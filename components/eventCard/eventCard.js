import React from 'react'
import styles from "./eventCard.module.css"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import moment from 'moment';
// import Radio from '@mui/material/Radio';
import { Box } from '@mui/system';
import axios from 'axios';
// 
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
//
import { useRouter } from 'next/router';


export default function eventCard(props) {
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
        
        <Typography sx={{ fontSize: 14 }} color="white" >
            {moment(props.data.Date).format('HH:mm')} - {moment(props.data.endDate).format('HH:mm')}
        </Typography>
    
        <Typography color="white" variant="h6" height="" minHeight={25}>
            { props.data.title }
        </Typography>


        <Box sx={{display: 'flex',height:'100%', width:'100%',justifyContent:'flex-end',alignItems:'flex-end'}}>
            <></>

            <Button ariant="outlined" startIcon={<DeleteIcon />} onClick={deleteEvent} sx={{color: '#8e0e18'}}>
            </Button>
            
            {/* <   input type="radio"
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
            /> */}
        </Box>
    </CardContent>
    </Paper>

    )
}
