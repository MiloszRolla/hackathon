import React from 'react'
import Slider from '../components/sliders/slider.js'
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
export default function test() {
  return (
    <>

    <Box sx={{margin:'50px',
    display: flex,
    bgcolor:'red',
    justifyContent: 'center'
}}>
    <Slider></Slider>
    </Box>
    </>
  )
}
