import React, { useState } from "react";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import Calendar from "../Calendar/Calendar";
import { format } from "date-fns";
import icon from "../../assets/hospitalicon.png";
import thumb from "../../assets/thumbsup.png";

export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false, 
}) {
  const [showCalendar, setShowCalendar] = useState(false); 

  const hospitalName = details["Hospital Name"]?.toLowerCase() || "Unknown Hospital";
  const city = details["City"]?.toLowerCase() || "Unknown City";
  const state = details["State"] || "Unknown State";
  const hospitalType = details["Hospital Type"] || "General Hospital";
  const hospitalRating = details["Hospital overall rating"] === "Not Available" ? 0 : details["Hospital overall rating"];

  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: "#fff",
        p: { xs: 2, md: 4 },
        boxShadow: 1, 
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        flexWrap="wrap"
      >
        <Box
          component="img"
          src={icon}
          alt="Hospital Icon"
          sx={{
            width: { xs: 64, md: 130 },
            height: 'auto',
            flexShrink: 0,
            alignSelf: "flex-start",
            borderRadius: 1,
            border: '1px solid #eee',
          }}
        />

        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={0.5}
            sx={{ textTransform: "capitalize", lineHeight: 1 }}
          >
            {hospitalName}
          </Typography>
          <Typography
            sx={{ textTransform: "capitalize" }}
            color="#414146"
            fontSize={14}
            fontWeight={700}
            mb={0.5}
          >
            {`${city}, ${state}`}
          </Typography>
          <Typography fontSize={14} mb={1.5} color="text.secondary">
            {hospitalType}
          </Typography>

          <Stack direction="row" flexWrap="wrap" spacing={0.5} alignItems="center" mb={2}>
            <Typography
              fontWeight={800}
              sx={{ textTransform: "uppercase" }}
              color="primary.green"
              fontSize={14}
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887", fontSize: 14 }}
            >
              ₹500
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              Consultation fee at clinic
            </Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1.5}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={thumb}
              alt="Thumbs up"
              sx={{ width: { xs: 16, md: 20 }, height: { xs: 16, md: 20 } }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.9 }}
            >
              {hospitalRating}
            </Typography>
          </Stack>
        </Box>

        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth={{ md: "23%" }}
          sx={{ mt: { xs: 2, md: 0 } }}
        >
          {!booking && (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
                sx={{ py: 1.5, px: 3 }}
              >
                {!showCalendar ? "Book FREE Center Visit" : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }} justifyContent="center">
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  px: 1, py: 0.5,
                  height: 'auto',
                }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success" 
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  px: 1, py: 0.5,
                  height: 'auto',
                }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}