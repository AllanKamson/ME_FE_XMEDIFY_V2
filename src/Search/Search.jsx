import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import HospitalCard from '../components/HospitalCard/HospitalCard';
import AutohideSnackbar from '../components/AutohideSnackbar/AutohideSnackbar';
import BookingModal from '../components/BookingModal/BookingModal';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchHospital from '../components/SearchHospital/SearchHospital';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import TickIcon from '@mui/icons-material/CheckCircleOutline';
import icon from "../assets/tick.png";
import cta from "../assets/cta.png";

function Search() {
  const [searchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [isLoading, setIsLoading] = useState(false);

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]); 
      setFilteredHospitals([]); 
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(response.data);
        setFilteredHospitals(response.data); 
      } catch (err) {
        console.error("Error fetching hospitals:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  const handleFilterHospitals = (list) => {
    setFilteredHospitals(list);
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
          position: "relative",
          background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          pb: '50px', 
          pt: { xs: 3, md: 1 },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
            p: 3,
            borderRadius: 2,
            transform: "translateY(50px)", 
            mb: "50px", 
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <SearchHospital /> 
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
        {hospitals.length > 0 && (
          <Box sx={{ mb: 3, px: { xs: 2, md: 0 } }}> 
            <Typography
              component="h1"
              fontSize={24}
              lineHeight={1.1}
              mb={2}
              fontWeight={500}
            >
              {`${hospitals.length} medical centers available in `}
              <Box component="span" sx={{ textTransform: "capitalize" }}>
                {city?.toLocaleLowerCase()} 
              </Box>
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              {/* <img src={icon} height={24} width={24} alt="icon" /> */}
              <TickIcon sx={{ color: 'primary.green', fontSize: 24 }} />
              <Typography color="#787887" lineHeight={1.4}>
                Book appointments with minimum wait-time & verified doctor details
              </Typography>
            </Stack>
          </Box>
        )}

        {/* {hospitals.length > 0 && (
          <Box mb={4} sx={{ px: { xs: 2, md: 0 } }}>
            <SearchBar list={hospitals} filterList={handleFilterHospitals} />
          </Box>
        )} */}

        <Stack direction={{ md: "row" }} alignItems="flex-start" spacing={3}>
          <Stack
            mb={{ xs: 4, md: 0 }}
            spacing={3}
            width={{ xs: 1, md: "calc(100% - 384px)" }} 
            mr={{ md: '24px' }}
          >
            {isLoading ? (
              <Typography variant="h3" sx={{ bgcolor: "#fff", p: 3, borderRadius: 2 }}>
                Loading...
              </Typography>
            ) : hospitals.length > 0 ? (
              filteredHospitals.length > 0 ? (
                filteredHospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))
              ) : (
                <Typography variant="h3" sx={{ bgcolor: "#fff", p: 3, borderRadius: 2 }}>
                  No results found for your search criteria.
                </Typography>
              )
            ) : !state || !city ? (
              <Typography variant="h3" sx={{ bgcolor: "#fff", p: 3, borderRadius: 2 }}>
                Please select a state and city to find hospitals.
              </Typography>
            ) : (
                <Typography variant="h3" sx={{ bgcolor: "#fff", p: 3, borderRadius: 2 }}>
                  No hospitals found for the selected location.
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

      <BookingModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        bookingDetails={bookingDetails}
        showSuccessMessage={setShowBookingSuccess}
      />
      <AutohideSnackbar
        open={showBookingSuccess}
        setOpen={setShowBookingSuccess}
        message="Booking Successful"
      />
    </Box>
  );
}

export default Search;