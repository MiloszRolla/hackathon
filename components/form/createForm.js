import React from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import Data from '../components/sidebar/barSide'


export default function createForm() {
  return (
    
    <Box sx={{display:'flex', width:'100vw', height:'100vh', background:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{display:'flex', flexDirection:'column', rowGap: '50px', color:'#000',borderRadius:'%', width:'50vw', height:'70vh', background:'#f5f5dc'}}>
        <Typography sx={{color:'FAF3DD', fontWeight:'400', textAlign:'center'}} variant="h5">Your new event</Typography>
          <TextField id="outlined-basic" label="Title" variant="outlined" />
            <Box sx={{display:'flex', flexDirection:'row'}}>
              <TextField id="outlined-basic" label="Start Date" variant="outlined" />
              <TextField id="outlined-basic" labecl="Start time" variant="outlined" />
              <TextField id="outlined-basic" label="End Date" variant="outlined" />
              <TextField id="outlined-basic" label="End Time" variant="outlined" />
            </Box>          
          <TextField id="outlined-basic" label="Category" variant="outlined" height="50px"/>
          <TextField id="outlined-basic"  label="Description" multiline maxRows={4} variant="outlined" />
          <Data></Data>
        </Box>
    </Box>
  )
  
}


