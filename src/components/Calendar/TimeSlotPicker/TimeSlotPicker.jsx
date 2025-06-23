import React from "react";
import { Chip, Stack, Typography, Divider, Box } from "@mui/material";

const CustomTimeChip = ({ label, handleClick }) => (
  <Chip
    label={label}
    color="primary"
    variant="outlined"
    onClick={handleClick}
    sx={{
      borderRadius: "5px",
      fontSize: { xs: 10, md: 14 },
      cursor: "pointer",
      m: { xs: '4px', md: '8px' }, 
      borderColor: 'primary.main', 
      color: 'primary.main', 
      '&:hover': {
        bgcolor: 'primary.main', 
        color: '#fff', 
      },
    }}
  />
);

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const handleSlotClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate.toISOString(), bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />} 
    >
      {availableSlots.morning && availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap="wrap" 
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            fontWeight={500}
            color="text.primary"
            sx={{ mb: { xs: 1, md: 0 } }} 
          >
            Morning
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
            {availableSlots.morning.map((slot) => (
              <CustomTimeChip
                key={slot}
                label={slot}
                handleClick={() => handleSlotClick(slot)}
              />
            ))}
          </Box>
        </Stack>
      )}

      {availableSlots.afternoon && availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap="wrap"
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            fontWeight={500}
            color="text.primary"
            sx={{ mb: { xs: 1, md: 0 } }}
          >
            Afternoon
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
            {availableSlots.afternoon.map((slot) => (
              <CustomTimeChip
                key={slot}
                label={slot}
                handleClick={() => handleSlotClick(slot)}
              />
            ))}
          </Box>
        </Stack>
      )}

      {availableSlots.evening && availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap="wrap"
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            fontWeight={500}
            color="text.primary"
            sx={{ mb: { xs: 1, md: 0 } }}
          >
            Evening
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
            {availableSlots.evening.map((slot) => (
              <CustomTimeChip
                key={slot}
                label={slot}
                handleClick={() => handleSlotClick(slot)}
              />
            ))}
          </Box>
        </Stack>
      )}
    </Stack>
  );
}