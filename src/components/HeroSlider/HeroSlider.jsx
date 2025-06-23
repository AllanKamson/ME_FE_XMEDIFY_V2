import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import img from '../../assets/home.webp'


export default function HeroSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Swiper>
      <SwiperSlide>
        <Stack
          direction={{ xs: 'column', md: "row" }}
          spacing={{ xs: 4, md: 4 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: {md: -5}, py: { xs: 8, md: 12 }, textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box sx={{ maxWidth: { xs: '90%', md: '50%' } }}>
            <Typography variant='h3' component='h1' sx={{  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '30px' } }}>
              Skip the travel! Find Online
            </Typography>
            <Typography variant='h1' component='h1' sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '54px' } }}>
              Medical <Box component="span" sx={{ color: 'primary.main' }}>Centers</Box>
            </Typography>
            <Typography color="#5C6169" fontSize={{ xs: 16, md: 20 }} mb={2}>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Link to='/search' style={{ textDecoration: 'none' }}>
              <Button variant='contained' size="large" disableElevation sx={{ px: 5, py: 1.5, fontSize: '1rem'}}>
                Find Centers
              </Button>
            </Link>
          </Box>

          <Box
            component={'img'}
            src={img}
            alt="Doctor and patient"
            sx={{
              width: { xs: '90%', md: '50%' },
              maxWidth: { md: 600 },
              height: 'auto',
              borderRadius: { xs: '16px', md: '24px' },
              mt: { xs: 4, md: 0 },
            }}
          />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
}