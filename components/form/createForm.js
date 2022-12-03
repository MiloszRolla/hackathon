import React from 'react'
import Box from '@mui/material/Box';
import { TextField, Typography, Button, Paper } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {  useState } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function CreateForm() {
 
  const [catGroup, setCatGroup] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [title, setTitle] = useState("");
  const [date, setDate] = React.useState(dayjs('2022-12-03T13:11:54'))
  const [endDate, setEndDate] = React.useState(dayjs('2022-12-03T13:14:54'))
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
  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
  }
  const randomID = Math.floor(Math.random() * 90000) + 10000;


  const array = [
    {
      id: randomID*2,
      date: "22.10.22",
      category: "Task",
      date:"2022-12-07T13:11:54.000Z",
      endDate:"2022-12-22T20:14:54.000Z",
      title:'Default',
      group:'Friends',
    },
  ]
  const clearState = () => {
    setCategory("");
    setDate("2022-12-03T13:11:54.000Z");
    setEndDate("2022-12-07T13:11:54.000Z");
    setTitle("");
    setCatGroup("");
    setDescription("");
  };
  const pushTable = (event) => {
    array.push(event)
    addEvent();
    clearState();
  console.log(array);

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

    <Box sx={{display:'flex', width:'100vw', height:'100vh',
  backgroundColor: '#4158D0',
    backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    justifyContent:'center', alignItems:'center'}}>
        <Paper elevation={23} sx={{display:'flex', flexDirection:'column', rowGap: '30px', color:'#000',borderRadius:'10%', width:'40vw',px:7, height:'90vh', background:'#fff'}}>
        <Typography sx={{color:'FAF3DD', fontWeight:'600', textAlign:'center', mt:5}} variant="h4">Add your new event! </Typography>
        <TextField
              label="Title"
              type="text"
              value={title}
              onChange={changeTitle}
            />            
            <LocalizationProvider dateAdapter={AdapterDayjs} >
        <Box sx={{display:'flex', gap:3}}>
            <DateTimePicker
          label="Start Date"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
            <DateTimePicker
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </Box>
     </LocalizationProvider>

            <FormControl fullWidth>
  <InputLabel 
   id="demo-simple-select-label">Group</InputLabel>
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
  label="Description" sx={{maxHeight:'50px'}} variant="outlined" />
          <Button

          endIcon={<AddIcon fontSize="large"/>}
          sx={{ fontWeight:'400', fontSize:'16px' }}
              variant="contained"
              onClick={() => pushTable({
                id: randomID,
                category: category,
                date: date,
                endDate: endDate,
                title: title,
                group: catGroup,
                description: description
              })}
            >
              Add event
            </Button>
        </Paper>
      

    </Box>
  )
  
}


