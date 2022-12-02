import React from 'react'
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, TextField, Typography } from '@mui/material';
export default function loginPanel() {
  return (
    <Box sx={{display:'flex',justifyContent:'start',flexDirection:'column',alignItems:'center',borderRadius:'10% 0px 0px 10%', px:5 ,width:'30vw', height:'100vh', background:'#94D8E1'}}>
        <Typography sx={{color:'#fff', fontWeight:'400', textAlign:'center', mt:10 }} variant="h3">Doesnt have an account?</Typography>
        <Button sx={{background:'#69b3bf', my:5}} fullWidth variant="contained">Sign up!</Button>
        <Typography sx={{color:'#fff', fontWeight:'400', textAlign:'center'}} variant="h3">Or</Typography>
        <Button  sx={{background:'#69b3bf',my:5}} fullWidth variant="contained" endIcon={<GoogleIcon/>}>Login with Google</Button>
  </Box>
  )
}
