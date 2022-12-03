import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function LoginPanel() {
  const [open, setOpen] = React.useState(false)
  
  const router = useRouter()
  const login = () =>
  {
    const login = document.querySelector('#login').value;
    const passwd = document.querySelector('#passwd').value;
    if(login === "admin" && passwd === "1234") 
    {
      router.push('/calendar');
    }
    console.log("Shit");
    setOpen(true);
  }  
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10% 0px 0px 10%' ,width:'70vw', height:'100vh',}}>
    <Paper elevation={14} sx={{display:'flex',flexDirection:'column',gap:'20px',justifyContent:'start', paddingTop:'50px', px:"20px",alignItems:'center', borderRadius:'10%' ,width:'50%', background:'#ffffff', height:'50%'}}>
        <Typography sx={{color:'#000', fontWeight:'400' }} variant="h2" >Login</Typography>
        <TextField variant='standard' fullWidth label="Login" required id="login"></TextField>
        <TextField type="password" variant='standard'  fullWidth label="Password" required id="passwd"></TextField>
        <Button onClick={() => login()} sx={{background:'#69b3bf'}} fullWidth variant="contained">Lets go!</Button>
        <Snackbar open={open}>
          <Alert severity="error">Wrong login or password</Alert>
        </Snackbar>
    </Paper>
  </Box>

  )
}
