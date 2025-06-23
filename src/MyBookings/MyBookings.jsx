import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import HospitalCard from '../components/HospitalCard/HospitalCard';
import SearchBar from '../components/SearchBar/SearchBar';
import cta from '../assets/cta.png';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    try {
      const localBookings = localStorage.getItem("bookings");
      const parsedBookings = localBookings ? JSON.parse(localBookings) : [];
      setBookings(parsedBookings);
      setFilteredBookings(parsedBookings); 
    } catch (error) {
      console.error("Failed to parse bookings from localStorage:", error);
      setBookings([]);
      setFilteredBookings([]);
    }
  }, []);

  
  const handleFilterBookings = (list) => {
    setFilteredBookings(list);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
        minHeight: '100vh', 
        pt: 2, 
      }}
    >
      <Box
        sx={{
          mb: "50px",
          pt: { xs: 3, md: 1 },
          background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 0, md: 12 }}
            alignItems={{ xs: "center", md: "flex-end" }}
          >
            <Typography
              component="h1"
              pb={1}
              fontSize={{ xs: 32, md: 40 }}
              fontWeight={700}
              color="#fff"
            >
              My Bookings
            </Typography>
            <Box
              bgcolor="#fff"
              p={3}
              flexGrow={1}
              borderRadius={2}
              boxShadow="0 0 10px rgba(0,0,0,0.1)"
              sx={{ transform: "translateY(50px)", width: { xs: 1, md: "auto" } }}
            >
              <SearchBar list={bookings} filterList={handleFilterBookings} />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
        <Stack direction={{ md: "row" }} alignItems="flex-start" spacing={3}>
          <Stack
            mb={{ xs: 4, md: 0 }}
            spacing={3}
            width={{ xs: 1, md: "calc(100% - 384px)" }}
            mr={{ md: '24px' }}
          >
            
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking, index) => (
                <HospitalCard
                  key={index}
                  details={booking}
                  booking={true} 
                />
              ))
            ) : (
              <Typography variant="h3" sx={{ bgcolor: "#fff", p: 3, borderRadius: 2 }}>
                No Bookings Found!
              </Typography>
            )}
          </Stack>

          
          <Box
            component="img"
            src={cta}
            width={360}
            sx={{ maxWidth: { xs: '100%', md: 'auto' }, height: 'auto', alignSelf: 'center', mt: { xs: 2, md: 0 } }}
            alt="Call to action banner"
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default MyBookings;