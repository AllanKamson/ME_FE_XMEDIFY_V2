import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { format, add, isEqual, startOfDay } from 'date-fns';
import { SlideNextButton, SlidePrevButton } from './SliderButtons';

export default function DaySelector({ selectedDate, setSelectedDate, totalSlots }) {
  const today = startOfDay(new Date()); 
  const dateItems = []; 

  for (let i = 0; i < 7; i++) {
    dateItems.push(add(today, { days: i }));
  }

  const customDateFormat = (day) => {
    if (isEqual(today, day)) {
      return 'Today';
    } else if (isEqual(today, add(day, { days: -1 }))) {
      return 'Tomorrow';
    } else {
      return format(day, 'E, d LLL'); 
    }
  };

  const handleClick = (day) => {
    setSelectedDate(day); 
  };

  return (
    <Stack pt={3} position='relative'>
      <Divider sx={{ mb: 3 }} />
      <Swiper
        slidesPerView={4}
        loop={false} 
        spaceBetween={11}
        className="day-selector-swiper" 
        breakpoints={{
          767: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide key={index}>
            <Stack
              textAlign='center'
              onClick={() => handleClick(day)}
              sx={{ cursor: 'pointer', py: 1 }} 
            >
              <Typography
                fontWeight={isEqual(day, selectedDate) ? 700 : 400} 
                fontSize={{ xs: 11, md: 16 }}
              >
                {customDateFormat(day)}
              </Typography>
              <Typography fontSize={{ xs: 8, md: 12 }} color='primary.green'>
                {`${totalSlots} Slots Available`}
              </Typography>
              
              <Box
                height={{ xs: '4px', md: '5px' }}
                width={{ xs: 1, md: 'calc(100% - 50px)' }}
                position='relative'
                bottom='0'
                bgcolor={isEqual(day, selectedDate) ? 'primary.main' : 'transparent'} 
                left={0}
                zIndex={999}
                mt='5px'
                mx='auto' 
                sx={{
                  transition: 'background-color 0.3s ease', 
                }}
              ></Box>
            </Stack>
          </SwiperSlide>
        ))}
        
        <span slot="container-start">
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SlidePrevButton />
          </Box>
        </span>
        <span slot="container-end">
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SlideNextButton />
          </Box>
        </span>
      </Swiper>
      
      <Box
        height={{ xs: '4px', md: '5px' }}
        width={{ xs: 1, md: 'calc(100% - 150px)' }}
        bgcolor='#F0F0F5'
        mt='5px'
        position='absolute'
        bottom={0}
        left='50%'
        sx={{ transform: 'translateX(-50%)', zIndex: 99 }}
      ></Box>
    </Stack>
  );
}