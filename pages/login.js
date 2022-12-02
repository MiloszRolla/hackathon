import React from 'react'
import Box from '@mui/material/Box';
import LoginPanel from '../components/login/loginPanel'
import RegisterPanel from '../components/login/register'
export default function login() {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', background:'#FAF3DD', width:'100vw', height:'100vh'}}>
      <RegisterPanel></RegisterPanel>
      <LoginPanel></LoginPanel>
    </Box>
    </>
  )
}
