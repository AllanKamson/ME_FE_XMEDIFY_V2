import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomizedAccordions from "../../Accordion/Accordion";
import faqBanner from '../../../assets/faqs-banner.jpg'

export default function FAQs() {
  const faqs = [
    {
      question: 'Why choose our medical for your family?',
      answer: 'Our clinic provides comprehensive, compassionate, and personalized medical care for all ages. We focus on preventive health and building long-term relationships with our patients to ensure their well-being.'
    },
    {
      question: 'Why we are different from others?',
      answer: 'We stand out through our integrated approach to healthcare, combining cutting-edge technology with empathetic patient support. Our team of specialists is dedicated to providing holistic solutions tailored to individual needs.'
    },
    {
      question: 'Trusted & experience senior care & love',
      answer: 'We offer specialized senior care services delivered by experienced professionals who prioritize dignity, comfort, and the highest quality of life for our elderly patients. Our programs are designed to meet their unique health requirements.'
    },
    {
      question: 'How to get appointment for emergency cases?',
      answer: 'For emergency cases, please call our dedicated emergency hotline immediately. Our team is available 24/7 to provide prompt assistance and guide you through the process for urgent appointments or direct hospital admission.'
    }
  ];

  return (
    <Box py={{ xs: 6, md: 8 }} sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth='xl'>
        <Typography color='primary.main' fontWeight={600} textAlign='center' mb={1.5}>
          Get Your Answer
        </Typography>
        <Typography textAlign='center' variant='h2' mb={6}>
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems='center' spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={faqBanner}
              alt="FAQs Banner"
              sx={{
                width: 1,
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3, 
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box maxWidth={{ xs: '100%', md: 550 }} mx={{ xs: 'auto', md: 'unset' }}> 
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}