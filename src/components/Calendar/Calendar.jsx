import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DaySelector from "./DaySelector/DaySelector"; 
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker"; 
import { startOfDay } from "date-fns";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box sx={{ mt: 3 }}>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}