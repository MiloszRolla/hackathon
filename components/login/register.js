import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { Button, TextField, Typography } from '@mui/material';
export default function loginPanel() {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10% 0px 0px 10%' ,width:'70vw', height:'100vh',}}>
    <Paper elevation={14} sx={{display:'flex',flexDirection:'column',gap:'20px',justifyContent:'start', paddingTop:'50px', px:"20px",alignItems:'center', borderRadius:'10%' ,width:'50%', background:'#ffffff', height:'50%'}}>
        <Typography sx={{color:'#000', fontWeight:'400' }} variant="h2" >Login</Typography>
        <TextField variant='standard' fullWidth label="Login"></TextField>
        <TextField variant='standard'  fullWidth label="Password"></TextField>
        <Button sx={{background:'#69b3bf'}} fullWidth variant="contained">Lets go!</Button>
    </Paper>
  </Box>

  )
}
