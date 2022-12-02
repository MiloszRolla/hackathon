import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 40,
    label: '3',
  },
  {
    value: 60,
    label: '4',
  },
  {
    value: 80,
    label: '5',
  },
  {
    value: 100,
    label: '6',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}