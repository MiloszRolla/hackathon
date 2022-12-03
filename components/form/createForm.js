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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function CreateForm() {
 
  const [cat, setCat] = React.useState('');
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'))

  const handleChange = (newValue) => {
    setValue(newValue);
  }
  const handleChangeCat = (event) => {
    setCat(event.target.value);
  };



  const addEvent = () => {
    axios
      .post("https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/sample2.json?alt=media&token=8c031b2a-b87b-4c50-a057-15f83b64ab13", 
      {
        id:'2',
        date: "22.10.22",
        category: "Task",
        startDate: "8:00",
        endDate: "10:00",
        title:'Żona',
        group:'Friends',
        visibility: true,
    }
      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };


  return (

    <Box sx={{display:'flex', width:'100vw', height:'100vh', background:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{display:'flex', flexDirection:'column', rowGap: '30px', color:'#000',borderRadius:'10%', width:'50vw',px:3, height:'70vh', background:'#f5f5dc'}}>
        <Typography sx={{color:'FAF3DD', fontWeight:'400', textAlign:'center', mt:5}} variant="h5">Your new event</Typography>
          <TextField id="outlined-basic" label="Title" variant="outlined" />
            <Box sx={{display:'flex', justifyContent:'space-around' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
            <DateTimePicker
          label="Start Date"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
              </Stack>
    </LocalizationProvider>
            </Box>    

            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={cat}
    label="Category"
    onChange={handleChangeCat}
  >
    <MenuItem value={"Family"}>Family</MenuItem>
    <MenuItem value={"Friends"}>Friends</MenuItem>
    <MenuItem value={"Work"}>Work</MenuItem>
  </Select>
</FormControl>        
  <TextField id="outlined-basic"  label="Description" multiline maxRows={4} variant="outlined" />
        </Box>
        <Button
              fullWidth
              variant="contained"
              onClick={addEvent}
            >
              Add worker
            </Button>

    </Box>
  )
  
}


