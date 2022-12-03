import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system'
import EventCard from '../eventCard/eventCard'
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios'

export default function TaskList(props) {
  const [data, setData] = useState([]);

      const fetchData = async () => {
        const res = await axios.get("https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/tasks.json?alt=media&token=7ce765bd-4df8-4521-bb5b-8c625aff0d21")
        setData(res.data);
        localStorage.setItem("events", JSON.stringify(res.data));
      };
      useEffect(() => {
        fetchData();
      }, []);



      function compare( a, b ) {
        if ( a.date < b.date ){
          return -1;
        }
        if ( a.date > b.date ){
          return 1;
        }
        return 0;
      }
      data.sort( compare );

        console.log(data)
    
    return (
        <>
        {props.type == "Day" ? 
       <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', mt: 10, alignItems:'center', overflowY:'auto'}}>
       <Typography variant="h1">Your list for today </Typography>
       {data.map(task => {
           return (
               <EventCard key={task.id} data={task}/>
               )
           })
           }
        </Box>  : 
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', mt: 10, alignItems:'center',}}>
      <Typography variant="h1">Your list for week </Typography>
      {data.map(task => {
          return (
            <Box sx={{width:'80%', display:'flex', justifyContent:'center'}} key={task.id}>
                <Box>
                    <EventCard  data={task}/>
                 </Box>
             
                 <Box>
                    <EventCard  data={task}/>
                 </Box>

                 <Box>
                    <EventCard  data={task}/>
                 </Box>

                 <Box>
                    <EventCard  data={task}/>
                 </Box>

                 <Box>
                    <EventCard  data={task}/>
                 </Box>

                 <Box>
                    <EventCard  data={task}/>
                 </Box>
                 <Box>
                    <EventCard  data={task}/>
                 </Box>
            </Box>
              )
          })
          }
        </Box>     
    }
</>
  )
}
