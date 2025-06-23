import React from 'react';
import { Box, Container } from "@mui/material";
import { Pagination, Autoplay } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from "swiper/react";
import offer1 from '../../../assets/offer1.png';
import offer2 from '../../../assets/offer2.png';

export default function Offers() {
  return (
    <Box py={{ xs: 6, md: 8 }}>
      <Container maxWidth='xl'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true} 
          centeredSlides={true} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]} 
          pagination={{
            clickable: true, 
          }}
          breakpoints={{
            767: { 
              slidesPerView: 3,
            },
            1024: { 
              slidesPerView: 4, 
            },
          }}
          style={{ paddingBottom: '40px' }} 
        >
          <SwiperSlide>
            <Box component={'img'} src={offer1} alt="Special Offer 1" sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={offer2} alt="Special Offer 2" sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={offer1} alt="Special Offer 3" sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={offer2} alt="Special Offer 4" sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={offer1} alt="Special Offer 5" sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'img'} src={offer2} alt="Special Offer 6" sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}