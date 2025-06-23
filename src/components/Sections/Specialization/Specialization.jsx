import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from '../../IconCard/IconCard';
import icon1 from '../../../assets/Drugstore.png'
import icon2 from '../../../assets/primary-care.png'
import icon3 from '../../../assets/cardiology.png'
import icon4 from '../../../assets/mri.png'
import icon5 from '../../../assets/blood-test.png'
import icon6 from '../../../assets/piscologist.png'
import icon7 from '../../../assets/X-Ray.png'

// const icon1 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=Dent";
// const icon2 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=Prim";
// const icon3 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=Card";
// const icon4 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=MRI";
// const icon5 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=Blood";
// const icon6 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=Psy";
// const icon7 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=Lab";
// const icon8 = "https://placehold.co/60x60/f0f8ff/1B3C74?text=XRay";

export default function Specialization() {
  const specializationData = [
    { icon: icon1, title: 'Dentistry' },
    { icon: icon2, title: 'Primary Care' },
    { icon: icon3, title: 'Cardiology' },
    { icon: icon4, title: 'MRI Resonance' },
    { icon: icon5, title: 'Blood Test' },
    { icon: icon6, title: 'Psychologist' }, 
    { icon: icon1, title: 'Laboratory' },
    { icon: icon7, title: 'X-Ray' }
  ];

  return (
    <Box py={{ xs: 6, md: 8 }} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container maxWidth='xl' sx={{ textAlign: 'center' }}>
        <Typography variant="h2" mb={6}>
          Find by specialisation
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} mb={6} justifyContent={'center'}>
          {specializationData.map(item => (
            <Grid item xs={6} sm={4} md={3} lg={2.5} key={item.title}>
              <IconCard img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{ px: 5, py: 1.5, fontSize: '1rem' }}
        >
          View All
        </Button>
      </Container>
    </Box>
  );
}