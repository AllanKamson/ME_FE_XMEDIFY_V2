import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import ourFamiliesBanner from '../../../assets/our-families-banner.png'

export default function OurFamilies() {
  return (
    <Box py={{ xs: 6, md: 8 }} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container maxWidth='xl'>
        <Grid container alignItems='center' spacing={{ xs: 4, md: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              mb={1.5}
              sx={{ textTransform: 'uppercase' }}
            >
              Caring for the health of you and your family.
            </Typography>
            <Typography variant="h2" mb={2}>
              Our Families
            </Typography>
            <Typography color='#77829D' lineHeight={1.8}>
              We will work with you to develop individualized care plans, including management of chronic diseases.
              If we cannot assist, we can provide referrals or advice about the type of practitioner you require.
              We treat all enquiries sensitively and in the strictest confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={ourFamiliesBanner}
              alt="Family care"
              sx={{
                width: 1,
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}