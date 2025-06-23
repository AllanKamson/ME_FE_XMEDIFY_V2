import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Fade, 
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns"; 

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 450, md: 600 }, 
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 3, md: 4 },
  borderRadius: 2,
  outline: 0,
};

export default function BookingModal({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState(""); 

  const handleBooking = (e) => {
    e.preventDefault(); 
    triggerEvent(); 

    const existingBookings = localStorage.getItem("bookings");
    const oldBookings = existingBookings ? JSON.parse(existingBookings) : [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email, bookingId: Date.now() }, 
      ])
    );

    showSuccessMessage(true); 
    setEmail(""); 
    setOpen(false); 
  };

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "appointment_booked",
      eventDate: new Date().toISOString(),
      bookingDetails: {
        hospital: bookingDetails.hospitalName,
        date: format(new Date(bookingDetails.bookingDate), "yyyy-MM-dd"),
        time: bookingDetails.bookingTime,
        email: email,
      },
    });
  };

  const getFormattedDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return format(date, "E, d LLL");
    } catch (error) {
      console.error("Invalid date format:", dateString);
      return '';
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Box }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backdropFilter: 'blur(3px)' },
        },
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Typography variant="h3" component="h2" mb={1.5}>
            Confirm Booking
          </Typography>
          <Typography fontSize={14} color="text.secondary" mb={3}>
            Please enter your email to confirm booking for{" "}
            <Box component="span" fontWeight={600} sx={{ color: 'primary.secondary' }}>
              {`${bookingDetails.bookingTime} on ${getFormattedDate(bookingDetails.bookingDate)}`}
            </Box>
          </Typography>
          <form onSubmit={handleBooking}>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                type="email"
                label="Enter your email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disableElevation
                >
                  Confirm
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}