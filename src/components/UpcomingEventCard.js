import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Location icon


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
  

const UpcomingEventsCard = ({ event }) => {
    const imageUrl = getDirectImageUrl(event.imgUrl); // Convert the URL
  return (
    <Card sx={{ width: 300, height: 290, margin: "6px", padding: 0, borderRadius: 3, flexWrap: "wrap", border: "1px solid #B0BABF", cursor: "pointer" }}>
      {/* Event Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={event.eventName}
          sx={{ borderRadius: "12px 12px 0 0", marginTop: 2 }}
        />
        {/* Date Badge */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 1,
            left: 15,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            width: '85%',
            color: "white",
            padding: "4px 8px",
            fontWeight: 600,
          }}
        >
          {formatDate(event.date)}
        </Typography>
      </Box>

      {/* Event Details */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" fontSize={"14px"}>
          {event.eventName}
        </Typography>
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: "gray",
                margin: 0, padding: 0
            }}
            >
            {/* Location */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 0.5, height: "16px" }} />
                <Typography variant="body2" sx={{fontSize: "12px"}}>{event.cityName}</Typography>
            </Box>

            {/* Weather & Distance */}
            <Typography variant="body2" color="textSecondary" sx={{fontSize: "12px"}}>
                {event.weather} | {formatDistance(event.distanceKm)}
            </Typography>
        </Box>

      </CardContent>
    </Card>
  );
};

export default UpcomingEventsCard;
