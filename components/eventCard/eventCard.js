import React from 'react'
import styles from "./eventCard.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function eventCard(task) {



    



    const { category, startDate, endDate, title, group } = task.data;

    const getCategory = () => {
        if(!category) {
            return styles.default
        }
        switch(category) {
            case "Task":
                switch(group) { 
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
    <Paper elevation={14} sx={{my:1, minWidth: 150, maxWidth: 300, maxHeight: '100px' }} className={`${styles.card} ${getCategory()}`}>
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="white" >
            {startDate ?  startDate : null} - {endDate ? endDate : null}
        </Typography>
        <Typography color="white" variant="h6">
            { title }
        </Typography>
    </CardContent>
    </Paper>
    )
}
