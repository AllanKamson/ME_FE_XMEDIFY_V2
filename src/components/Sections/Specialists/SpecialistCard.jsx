import { Box, Typography, styled } from "@mui/material";


const SpecialistImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)',
  borderRadius: '250px 240px 4px 4px', 
  overflow: 'hidden', 
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)', 
    boxShadow: '0 20px 65px -10px rgba(0,0,0,0.15)', 
  },
}));

export default function SpecialistCard({ img, title, designation }) {
  return (
    <Box textAlign='center' sx={{ pb: 2 }}> 
      <SpecialistImageContainer>
        <Box
          component='img'
          src={img}
          alt={title}
          sx={{
            width: 1,
            height: 'auto',
            display: 'block', 
            objectFit: 'cover', 
          }}
        />
      </SpecialistImageContainer>
      <Typography
        fontSize={{ xs: 16, md: 24 }}
        color='#1B3C74'
        fontWeight={600} 
        mb={0.5}
      >
        {title}
      </Typography>
      <Typography
        fontSize={{ xs: 14, md: 16 }}
        fontWeight={500}
        color='primary.main'
      >
        {designation}
      </Typography>
    </Box>
  );
}