import React from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography, Button } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import axios from 'axios'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function CreateForm() {
 
  const [catGroup, setCatGroup] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [title, setTitle] = useState("");
  const [date, setDate] = React.useState(dayjs('2014-08-18T21:11:54'))
  const [description, setDescription] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChange = (newValue) => {
    setDate(newValue);
  }
  const handleChangeCat = (event) => {
    setCatGroup(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };


  const array = [
    {
      id:'1',
      date: "22.10.22",
      category: "Task",
      startDate: "8:00",
      endDate: "10:00",
      title:'Żona',
      group:'Friends',
    },
  ]

  const pushTable = (event) => {
    array.push(event)
    addEvent();
  }


  const addEvent = () => {
    axios
      .post("https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/tasks.json?alt=media&token=7ce765bd-4df8-4521-bb5b-8c625aff0d21", 
      array
      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };


  return (

    <Box sx={{display:'flex', width:'100vw', height:'100vh', background:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{display:'flex', flexDirection:'column', rowGap: '30px', color:'#000',borderRadius:'10%', width:'50vw',px:3, height:'100vh', background:'#f5f5dc'}}>
        <Typography sx={{color:'FAF3DD', fontWeight:'400', textAlign:'center', mt:5}} variant="h5">Your new event</Typography>
        <TextField
              InputLabelProps={{ style: { fontFamily: "Consolas" } }}
              label="First Name"
              type="text"
              value={title}
              onChange={changeTitle}
            />            
            <Box sx={{display:'flex', justifyContent:'space-around' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
            <DateTimePicker
          label="Start Date"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
              </Stack>
    </LocalizationProvider>
            </Box>    

            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Group</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={catGroup}
    label="Category"
    onChange={handleChangeCat}
  >
    <MenuItem value={"Family"}>Family</MenuItem>
    <MenuItem value={"Friends"}>Friends</MenuItem>
    <MenuItem value={"Work"}>Work</MenuItem>
  </Select>
</FormControl>  

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Group</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="Category"
    onChange={handleChangeCategory}
  >
    <MenuItem value={"Task"}>Task</MenuItem>
    <MenuItem value={"Meet"}>Meet</MenuItem>
  </Select>
</FormControl>
  <TextField id="outlined-basic" 
  value={description}
  onChange={handleChangeDescription}
  label="Description" multiline maxRows={4} variant="outlined" />
          <Button
              fullWidth
              variant="contained"
              onClick={() => pushTable({
                id:'1',
                category: category,
                date: date,
                title: title,
                group: catGroup,
                description: description
              })}
            >
              Add worker
            </Button>
        </Box>
      

    </Box>
  )
  
}


