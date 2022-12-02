import React from 'react'
import styles from "./eventCard.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function eventCard(task) {

    const { category, startDate, endDate, name } = task.data;

    const getCategory = () => {
        if(!category) {
            return styles.default
        }
        switch(category) {
            case "Task":
                return styles.task;
            case "Meet":
                return styles.meet;
        }
    }

    return (
    <Card sx={{ minWidth: 275 }} className={`${styles.card} ${getCategory()}`}>
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {startDate ?  startDate : null} - {endDate ? endDate : null}
        </Typography>
        <Typography variant="body1">
            { name }
        </Typography>
    </CardContent>
    </Card>
    )
}
