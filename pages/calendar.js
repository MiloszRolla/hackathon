import { Box } from '@mui/material'
import React from 'react'
import TaskList from '../components/tasks/tasksList'
export default function calendar() {
  return (

    <Box sx={{display:'flex', justifyContent:'space-between', background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)', width:'100vw', height:'100vh'}}>
        <TaskList></TaskList>
    </Box>
  )
}
