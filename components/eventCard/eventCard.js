import React from 'react'
import styles from "./eventCard.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import moment from 'moment';

export default function eventCard(props) {

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

    return (
    <Paper elevation={14} sx={{my:1, minWidth: 150, maxWidth: 300, maxHeight: '100px' }}  className={`${styles.card} ${getCategory()}`}>
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="white" >
        {moment(props.data.Date).format('HH:mm')} - {moment(props.data.endDate).format('HH:mm')}
    </Typography>
        <Typography color="white" variant="h6">
            { props.data.title }
        </Typography>
    </CardContent>
    </Paper>

    )
}
