import { Box } from '@mui/material'
import React from 'react'
import axios from 'axios'
import SideBar from '../components/sidebar/sidebar'
import { useEffect, useState } from "react";



export default function Calendar() {
  
  // const getStaticProps = async () => {
  //   const res = await axios.get("https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/sample2.json");
  //   console.log(res)
  //   return {
  //     props: { data: res.data.slice(0, 10) },
  //   };
  // };
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.post(`https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/sample2.json?alt=media&token=67de1b8e-1120-4dec-8c61-a17409334a6a`, {test: "test"});
    setData(res.data)
    console.log(res.data)
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
