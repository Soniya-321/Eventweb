// RecommendedShows.js
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CircularProgress} from "@mui/material";
import Slider from "react-slick";
import RecommendedEventCard from "./RecommendedEventCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowBackIosIcon
        style={{
          color: "gray", // Change color here
          position: "absolute",
          left: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={onClick}
      />
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowForwardIosIcon
        style={{
          color: "gray", // Change color here
          position: "absolute",
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={onClick}
      />
    );
  };

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
  ]
};

const RecommendedShows = ({ events }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (events.length > 0) {
          setLoading(false);
        }
      }, [events]);
    
    console.log("Recommended");
  return (
    <Box margin="20px" padding="20px">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        {/* Left: Heading with Arrow */}
        <Typography variant="h5" fontWeight="bold" color="#fff" sx={{ display: "flex", alignItems: "center", fontFamily: "Inter" }}>
          Recommended Shows <ArrowForwardIcon sx={{ fontSize: 24, marginLeft: 1 }} />
        </Typography>

        {/* Right: "See all ->" Button */}
        <Button 
          variant="text" 
          color="white"
          sx={{ display: "flex", alignItems: "center", textTransform: "none", fontSize: 16, color: "#fff",fontFamily: "Inter", textDecoration: "underline" }}
        >
          See all
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" height={'50%'}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Slider {...settings} gap={3}>
          {events.map((event) => (
            <RecommendedEventCard key={event.eventName} event={event} />
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default RecommendedShows;