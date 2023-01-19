import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'which subject do you need to help with?',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const Textfild = () => {
  return (
    <Box
    component="form"
    mb={4}
    
    sx={{
      '& .MuiTextField-root': { m: 1, xs: {width: '100%' } },
    }}
    noValidate
    autoComplete="off"
  >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="USD"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  </Box>
  )
}

export default Textfild