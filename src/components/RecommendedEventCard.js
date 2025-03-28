// EventCard.js
import React from "react";
import { Box, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const getDirectImageUrl = (url) => {
    if (!url) return ""; // Handle empty or undefined URLs

  const googleDrivePattern = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\//;
  const match = url.match(googleDrivePattern);

  if (match) {
    const fileId = match[1]; 
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`; // Convert to viewable format
  }

  return url;
  };

// Function to format the date
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const formatDistance = (distance) => {
    return Math.round(parseFloat(distance) / 100) + " Km";
  };

const RecommendedEventCard = ({ event }) => {
    const imageUrl = getDirectImageUrl(event.imgUrl); // Convert the URL
    console.log(imageUrl);
  return (
    <Box
      sx={{
        position: "relative",
        width: 260,
        height: 350,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        marginRight: 3, padding: 0
      }}
    >
      <img
        src={imageUrl}
        alt={event.eventName}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "none",
        }}
      />
      <Box
        sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            color: "white",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" fontSize={"15px"} color="#fff">
            {event.eventName}
          </Typography>
          <Typography variant="h6" fontSize={"13px"} color="#d4d9d6">
            {formatDate(event.date)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#d4d9d6" }}>
            <PlaceIcon sx={{ fontSize: 16, marginRight: 0.5 }} /> {event.cityName}
          </Typography>
          <Typography variant="body2" color="#d4d9d6">
            {event.weather} | {formatDistance(event.distanceKm)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendedEventCard;
