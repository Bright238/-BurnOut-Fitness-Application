import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="30px"
    >
      <Typography
        fontFamily="Cursive"
        color="red"
        fontWeight="700"
        fontSize="26px"
      >
        Fitness StudioWeb
      </Typography>
      <Typography
        fontWeight={700}
        fontFamily=""
        sx={{ fontSize: { lg: "44px", xs: "24px" } }}
      >
        Concentrate, focus, and
        <br /> have a goal in good faith
        <br /> to achieve <br />
        great results
      </Typography>
      <Typography p={"20px"} mb={"10px"} fontWeight={400} fontFamily="cursive">
        Check out the most effective excercises
      </Typography>
      <Button variant="contained" color="error" href="#excercises">
        Explore Excercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.2,
          display: { lg: "block", xs: "none" },
        }} fontSize="200px"
      >
        iFreelance
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Hero Banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;