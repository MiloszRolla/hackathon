import { Box } from '@mui/material'
import React from 'react'
import axios from 'axios'
import SideBar from '../components/sidebar/sidebar'
import { useEffect, useState } from "react";



export default function Calendar() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.post(`https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/tasks.json?alt=media&token=7ce765bd-4df8-4521-bb5b-8c625aff0d21`, 
    {test: "test"}
    );
    setData(res.data)
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
         <SideBar></SideBar>
    </>
  )
}
