import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import patientCaringBanner from '../../../assets/patientcaring.png'
import tickIcon from '../../../assets/tick-blue.png'

export default function PatientCaring() {
  return (
    <Box py={{ xs: 6, md: 8 }} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container maxWidth='xl'>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={patientCaringBanner}
              alt="Patient caring"
              sx={{
                width: 1,
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              mb={1.5}
              sx={{ textTransform: 'uppercase' }}
            >
              Helping patients from around the globe!!
            </Typography>
            <Typography variant="h2" mb={2}>
              Patient <Box component='span' color='primary.main'>Caring</Box>
            </Typography>
            <Typography color='#77829D' lineHeight={1.8} mb={3}>
              Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
              We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>

            <List sx={{ fontSize: { xs: 12, md: 18 }, px: { xs: 0, sm: 2 } }}> 
              <ListItem disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tickIcon} alt="Tick" sx={{ height: 22, width: 22 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Stay Updated About Your Health'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                />
              </ListItem>
              <ListItem disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tickIcon} alt="Tick" sx={{ height: 22, width: 22 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Check Your Results Online'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                />
              </ListItem>
              <ListItem disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component='img' src={tickIcon} alt="Tick" sx={{ height: 22, width: 22 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Manage Your Appointments'
                  primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}