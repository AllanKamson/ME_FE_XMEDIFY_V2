import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", active: true }, 
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        component="h4"
        fontSize={{ xs: 18, md: 20 }}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={4}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        rowSpacing={{ xs: 2, md: 3 }} 
        justifyContent="center"
      >
        {services.map((service) => (
          <Grid item key={service.title} xs={6} sm={4} md={2.4}> 
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
              shadow={false} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}