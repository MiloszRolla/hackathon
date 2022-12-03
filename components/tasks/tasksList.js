import React from 'react'
import { Box } from '@mui/system'
import EventCard from '../eventCard/eventCard'
import { Typography } from '@mui/material';
export default function TaskList() {
    const exampleTasks =[
        {
            id:'1',
            date: "22.10.22",
            category: "Task",
            startDate: "8:00",
            endDate: "10:00",
            title:'Party',
            group:'Friends',
            visibility:
            'Group: (visible for this.group) or none (visible for me) ',
        },     
        {
            id:'2',
            category: "Task",
            startDate: "10:00",
            endDate: "14:00",
            title:'Dinner',
            group:'Family'
        },  
        {
            id:'3',
            category: "Task",
            startDate: "14:00",
            endDate: "20:00",
            title:'Work taks',
            group:'Work'
        },   
        {
            id:'4',
            category: "Meet",
            startDate: "20:00",
            endDate: "23:00",
            title:'Daily Meeting',
            group:'Family'
        },  


    ] 
    

    return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', mt: 10, alignItems:'center',}}>
        <Typography variant="h1">Your list for today </Typography>
        {exampleTasks.map(task => {
            return (
                <EventCard key={task.id} data={task}/>
            )
        })}
    </Box>
  )
}
