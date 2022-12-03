import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system'
import EventCard from '../eventCard/eventCard'
import axios from "axios";
import { Typography } from '@mui/material';


export default function TaskList() {
    
    
    const [taskData, setTaskData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
      
    
    // useEffect(() => {
    //     async function fetchData(){
    //         const response = await fetch('https://ehcyy6pxcj.execute-api.eu-central-1.amazonaws.com/development/users')
    //         const data = await response.json()
    //         setTaskData(data)
    //         setIsLoading(false)
    //     }
    //     fetchData();
    //   }, []);

    //   if(isLoading) {
    //     return console.log(isLoading)
    //   } 
    //   else {
    //     console.log(taskData)
    //   }
      

    const exampleTasks =[
        {
            id:'1',
            date: "22.10.22",
            category: "Task",
            startDate: "8:00",
            endDate: "10:00",
            title:'Zona',
            group:'Friends',
            visibility:
            'Group: (visible for this.group) or none (visible for me) ',
        },     
        {
            id:'2',
            category: "Task",
            startDate: "10:00",
            endDate: "14:00",
            title:'Kochanka',
            group:'Family'
        },  
        {
            id:'3',
            category: "Task",
            startDate: "14:00",
            endDate: "20:00",
            title:'Żona szefa',
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
            })
            }
    </Box>
  )
}
