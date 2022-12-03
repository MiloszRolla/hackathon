import React from 'react'
import Box from '@mui/material/Box';
import Login from '../components/login/login'
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
     <div className="bgWrap">
          <Image
          alt="Background"
          src="/images/bc.svg"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          />
          </div>
          <Box sx={{display:'flex', justifyContent:'space-between', width:'100vw', height:'100vh'}}>
        <Login></Login>
        <RegisterPanel></RegisterPanel>
      </Box>
    </>
  )
}
