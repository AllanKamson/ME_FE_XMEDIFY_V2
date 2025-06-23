import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Link as MuiLink, 
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom"; 
import CloseIcon from "@mui/icons-material/Close"; 
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/medify.png";
import { useState } from "react";

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <Box component="header" sx={{ position: 'sticky', top: 0, zIndex: 1100, bgcolor: 'background.paper', boxShadow: 1 }}>
      <Box p={1} sx={{ bgcolor: "primary.main" }}>
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="Medify Logo" sx={{ height: 27, width: 'auto' }} />
          </Link>

          {!isMobile && (
            <Stack direction="row" spacing={4} alignItems="center">
              <MuiLink component={Link} to="/" color="text.primary" underline="none" fontWeight={500} sx={{ '&:hover': { color: 'primary.main' } }}>Find Doctors</MuiLink>
              <MuiLink component={Link} to="/search" color="text.primary" underline="none" fontWeight={500} sx={{ '&:hover': { color: 'primary.main' } }}>Hospitals</MuiLink>
              <MuiLink component={Link} to="#" color="text.primary" underline="none" fontWeight={500} sx={{ '&:hover': { color: 'primary.main' } }}>Medicines</MuiLink>
              <MuiLink component={Link} to="#" color="text.primary" underline="none" fontWeight={500} sx={{ '&:hover': { color: 'primary.main' } }}>Surgeries</MuiLink>
              <MuiLink component={Link} to="#" color="text.primary" underline="none" fontWeight={500} sx={{ '&:hover': { color: 'primary.main' } }}>Software for Provider</MuiLink>
              <MuiLink component={Link} to="#" color="text.primary" underline="none" fontWeight={500} sx={{ '&:hover': { color: 'primary.main' } }}>Facilities</MuiLink>
              <Link to="/my-bookings" style={{ textDecoration: 'none' }}>
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>
            </Stack>
          )}

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)} color="inherit" aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          )}

          {isMobile && (
            <Box
              className={`nav-links-mobile ${menuOpen ? 'active' : ''}`} 
            >
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: theme.spacing(2),
                  right: theme.spacing(4),
                  color: "#fff",
                }}
                aria-label="Close menu"
              >
                <CloseIcon />
              </IconButton>
              <MuiLink component={Link} to="/" onClick={() => setMenuOpen(false)}>Find Doctors</MuiLink>
              <MuiLink component={Link} to="/search" onClick={() => setMenuOpen(false)}>Hospitals</MuiLink>
              <MuiLink component={Link} to="#" onClick={() => setMenuOpen(false)}>Medicines</MuiLink>
              <MuiLink component={Link} to="#" onClick={() => setMenuOpen(false)}>Surgeries</MuiLink>
              <MuiLink component={Link} to="#" onClick={() => setMenuOpen(false)}>Software for Provider</MuiLink>
              <MuiLink component={Link} to="#" onClick={() => setMenuOpen(false)}>Facilities</MuiLink>
              <Link to="/my-bookings" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="contained" disableElevation fullWidth>
                  My Bookings
                </Button>
              </Link>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}