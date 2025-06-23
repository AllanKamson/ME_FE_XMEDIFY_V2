import { Link, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; 

export default function FooterLink({ children, href = "#" }) {
  return (
    <Link
      href={href}
      underline="none"
      color='#fff'
      fontWeight={300}
      fontSize={14}
      sx={{
        opacity: 0.8,
        '&:hover': {
          color: 'primary.main', 
          opacity: 1,
          textDecoration: 'underline',
        },
      }}
    >
      <Stack direction='row' alignItems="center" spacing={0.5}>
        <KeyboardArrowRightIcon sx={{ fontSize: 16 }} /> 
        <Typography component="span" variant="body2">{children}</Typography>
      </Stack>
    </Link>
  );
}