import React from 'react'
import Box from '@mui/material/Box';
import LoginPanel from '../components/login/loginPanel'
import RegisterPanel from '../components/login/register'
import Image from 'next/image'; 
export default function login() {

  
  const event = {
    started_at:"",
    ended_at:"",
    title: "",
    group:'',
    visibility:'',
  }


  return (
    <>
        {/* <Image alt="Background" src="/sc2.svg" layout="fill" objectFit="cover" quality={100} /> */}
    <Box sx={{display:'flex', justifyContent:'space-between', background:'#FAF3DD', width:'100vw', height:'100vh'}}>
        <RegisterPanel></RegisterPanel>
        <LoginPanel></LoginPanel>
      </Box>
    </>
  )
}
