import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import HeroServices from '../components/IconLayout/HeroServices';
import Specialists from '../components/Sections/Specialists/Specialists';
import PatientCaring from '../components/Sections/PatientCaring/PatientCaring';
import Blogs from '../components/Sections/Blogs/Blogs';
import OurFamilies from '../components/Sections/OurFamilies/OurFamilies';
import FAQs from '../components/Sections/FAQs/FAQs';
import Offers from '../components/Sections/Offers/Offers';
import SearchHospital from '../components/SearchHospital/SearchHospital';
import Specialization from '../components/Sections/Specialization/Specialization';

function Home() {
  return (
    <Box>
      
      <Box
        sx={{
          background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          pb: 4, 
        }}
      >
        <Container maxWidth="xl">
          <HeroSlider />
          
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, sm: -15, md: -12, lg: -15, xl: -15 }}  // xs: -8, sm: -15, md: -20, lg: -6, xl: -10
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
    </Box>
  );
}

export default Home;