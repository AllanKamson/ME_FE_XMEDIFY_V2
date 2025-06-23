import React from 'react';
import { Box, Button, InputAdornment, TextField, Typography, Stack } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';

export default function SmsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SMS send requested for phone number:", event.target.phoneNumber.value);
    alert("SMS functionality is not implemented in this demo."); 
    event.target.reset(); 
  };

  return (
    <Box mb={5}>
      <Typography fontWeight={600} mb={1} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        Get the link to download the app
      </Typography>
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          name="phoneNumber"
          type="tel" 
          placeholder="Enter phone number"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon sx={{ color: 'action.active', mr: 0.5 }} /> +91
              </InputAdornment>
            ),
            sx: { borderRadius: '8px' }, 
          }}
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F0F0F0',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#CCC !important', 
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main !important', 
            },
          }}
          required
        />
        <Button type='submit' size='large' variant="contained" disableElevation sx={{ px: { xs: 4, md: 6 } }}>
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}