import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";
import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";

export default function DownloadApp() {
  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)",
        pt: { xs: 5, md: 8 },
        pb: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5.5}>
            <Box
              component="img"
              src={mobile}
              alt="Medify Mobile App"
              sx={{
                width: 1,
                height: "auto",
                borderRadius: 3,
                boxShadow: 6, 
              }}
            />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "0", md: "50px" }} 
              textAlign={{ xs: 'center', md: 'left' }} 
            >
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                component="img"
                src={arrow}
                alt="Arrow"
                sx={{
                  width: { xs: 24, md: 40 },
                  position: "absolute",
                  left: { xs: '50%', sm: '25%', md: 0 },
                  top: { xs: 0, sm: 32, md: 50 }, 
                  transform: { xs: 'translateX(-50%)', sm: 'translateX(-50%)', md: 'none' }, 
                  display: { xs: 'none', sm: 'block' },
                }}
              />

              <SmsForm /> 

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1.5, sm: 2 }}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    px: 3,
                    borderRadius: 1.5,
                    '&:hover': { bgcolor: '#555' },
                  }}
                  size="large"
                  startIcon={<Box component="img" src={playstore} alt="Google Play" sx={{ height: 24, width: 24 }} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    px: 3,
                    borderRadius: 1.5,
                    '&:hover': { bgcolor: '#555' },
                  }}
                  size="large"
                  startIcon={<Box component="img" src={apple} alt="App Store" sx={{ height: 24, width: 24 }} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}