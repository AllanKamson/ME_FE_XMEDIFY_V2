import { Box, Stack, Typography } from "@mui/material";

export default function IconCard({
  img,
  title,
  bgColor = "#FAFBFE", 
  active = false,
  shadow = false,
}) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: active ? "rgba(42,167,255,0.08)" : bgColor, 
        p: 3,
        borderRadius: 2,
        border: active ? "1px solid #2AA7FF" : "0", 
        boxShadow: shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none", 
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out', 
        '&:hover': {
          transform: 'translateY(-5px)', 
          boxShadow: shadow ? "0 5px 30px rgba(0,0,0,0.15)" : "none",
        },
      }}
    >
      <Box component="img" src={img} alt={title} sx={{ height: 60, width: 60, objectFit: 'contain' }} />
      <Typography
        color={active ? "primary.main" : "#ABB6C7"}
        fontSize={18}
        fontWeight={active ? 600 : 400}
        textAlign="center"
      >
        {title}
      </Typography>
    </Stack>
  );
}