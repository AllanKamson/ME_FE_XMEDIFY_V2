import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import SpecialistCard from './SpecialistCard';
import img1 from '../../../assets/lesley.png'
import img2 from '../../../assets/ahmad.png'
import img3 from '../../../assets/heena.png'
import img4 from '../../../assets/ankur.png'
import img5 from '../../../assets/ahmad-stevens.png'


export default function Specialists() {
  const specialist_data = [
    { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
    { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
    { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopaedics' },
    { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
    { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
    { img: img1, title: 'Dr. Sarah Lee', designation: 'Pediatrician' },
    { img: img2, title: 'Dr. Emily Watson', designation: 'Cardiologist' },
    { img: img3, title: 'Dr. Robert Brown', designation: 'Dermatologist' },
  ];

  return (
    <Box py={{ xs: 6, md: 8 }} id="find-doctors">
      <Container maxWidth='xl'>
        <Typography variant="h2" textAlign='center' mb={6} px={2}>
          Our Medical Specialist
        </Typography>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true} 
          centeredSlides={true} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          modules={[Autoplay, Pagination]} 
          pagination={{
            clickable: true, 
          }}
          breakpoints={{
            600: { 
              slidesPerView: 3,
              spaceBetween: 30,
            },
            900: { 
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: { 
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          style={{ paddingBottom: '40px' }} 
        >
          {specialist_data.map((doc, index) => (
            <SwiperSlide key={index}>
              <SpecialistCard
                img={doc.img}
                title={doc.title}
                designation={doc.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}