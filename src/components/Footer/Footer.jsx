import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/medify.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";


export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.secondary", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={4}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1} spacing={2}>
              <Box component="img" src={logo} alt="Medify Logo" sx={{ height: 36, mb: 2 }} />
              <Typography variant="body2" color="#fff" sx={{ opacity: 0.8 }}>
                Your trusted partner in healthcare. Providing accessible and quality medical services for a healthier you.
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ pt: 2 }}>
                <Link href="#" target="_blank" rel="noopener">
                  <Box component="img" src={fb} alt="Facebook" sx={{ height: 36, width: 36 }} />
                </Link>
                <Link href="#" target="_blank" rel="noopener">
                  <Box component="img" src={twitter} alt="Twitter" sx={{ height: 36, width: 36 }} />
                </Link>
                <Link href="#" target="_blank" rel="noopener">
                  <Box component="img" src={yt} alt="YouTube" sx={{ height: 36, width: 36 }} />
                </Link>
                <Link href="#" target="_blank" rel="noopener">
                  <Box component="img" src={pinterest} alt="Pinterest" sx={{ height: 36, width: 36 }} />
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography variant="h6" color="#fff" fontWeight={600} mb={3}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Pricing</FooterLink>
              <FooterLink href="#">Our Gallery</FooterLink>
              <FooterLink href="#">Appointment</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography variant="h6" color="#fff" fontWeight={600} mb={3}>
              Our Services
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink href="#">Orthology</FooterLink>
              <FooterLink href="#">Neurology</FooterLink>
              <FooterLink href="#">Dental Care</FooterLink>
              <FooterLink href="#">Opthalmology</FooterLink>
              <FooterLink href="#">Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="#fff" fontWeight={600} mb={3}>
              Contact Us
            </Typography>
            <Stack spacing={1.5}>
              <Typography variant="body2" color="#fff" sx={{ opacity: 0.8 }}>
                123 Health Ave, Wellness City, State, Country
              </Typography>
              <Typography variant="body2" color="#fff" sx={{ opacity: 0.8 }}>
                Email: info@medify.com
              </Typography>
              <Typography variant="body2" color="#fff" sx={{ opacity: 0.8 }}>
                Phone: +1 (123) 456-7890
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          textAlign="center"
          sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", opacity: 0.7 }}
        >
          Copyright ©{new Date().getFullYear()} Medify. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}