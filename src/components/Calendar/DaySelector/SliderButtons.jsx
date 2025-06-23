import React from 'react';
import { useSwiper } from 'swiper/react';
import NextIcon from '@mui/icons-material/ArrowForwardIos'; 
import PrevIcon from '@mui/icons-material/ArrowBackIosNew'; 
import { Box, IconButton } from '@mui/material';

const iconButtonStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1000, 
  backgroundColor: '#fff',
  borderRadius: '50%',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
  '&:hover': {
    backgroundColor: '#f5f5f5', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  p: 1, 
};

function SlidePrevButton() {
  const swiper = useSwiper(); 
  return (
    <IconButton
      onClick={() => swiper.slidePrev()}
      sx={{ left: 0, ...iconButtonStyles }}
      aria-label="Previous slide"
    >
      <PrevIcon fontSize="small" />
    </IconButton>
  );
}

function SlideNextButton() {
  const swiper = useSwiper(); 
  return (
    <IconButton
      onClick={() => swiper.slideNext()}
      sx={{ right: 0, ...iconButtonStyles }}
      aria-label="Next slide"
    >
      <NextIcon fontSize="small" />
    </IconButton>
  );
}

export { SlideNextButton, SlidePrevButton };