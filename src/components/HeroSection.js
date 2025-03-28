// HeroSection.js
import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const HeroContainer = styled(Box)`
  background: url("https://res.cloudinary.com/dzsrw1tcr/image/upload/v1742810488/Front_screen_th9pyg.jpg") center/cover no-repeat;
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-align: center;
  z-index: 1;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
    &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Typography variant="h4" fontWeight="bold" sx={{ marginTop: 10, padding: 3, fontFamily: "Inter" }}>
        Discover Exciting Events Happening Near You - Stay tuned for updates
      </Typography>
      <Typography variant="body1" sx={{ padding: "5px 30px", fontFamily: "Inter", color: "#989090", mr: 0 }}>
      Stay updated on thrilling events happening near you, from concerts to festivals. Don’t miss out on the best experiences—plan your next outing today!
      </Typography>
    </HeroContainer>
  );
};

export default HeroSection;
