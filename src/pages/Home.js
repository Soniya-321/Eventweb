// Home.js
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import RecommendedShows from "../components/RecommendedShows";
import UpcomingEvents from "../components/UpcomingEvents";
import { Box, Typography } from "@mui/material";
const reco_url = process.env.REACT_APP_REC_URL;
const upc_url = process.env.REACT_APP_UPC_URL;
console.log(reco_url, "recos");
console.log(upc_url, "upc");
console.log(process.env, "envs");
const Home = () => {
  const [recommended, setRecommended] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const recoResponse = await fetch(reco_url);
        const upcomingResponse = await fetch(upc_url);

        if (!recoResponse.ok || !upcomingResponse.ok) {
          throw new Error("Failed to fetch events");
        }


        const recoData = await recoResponse.json();
        const upcomingData = await upcomingResponse.json();
        console.log(recoData, "recos");
        if (!Array.isArray(recoData.events) || recoData.events.length === 0) {
          throw new Error("No recommended events available");
        }

        setRecommended(recoData.events);
        setUpcoming(upcomingData.events);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Box sx={{position: "relative", zIndex: -1}}>
      <HeroSection />
      {error ? (
        <Typography color="error" align="center" variant="h6">
          {error}
        </Typography>
      ) : (
        <>
          {/* Recommended Events Section */}
          <Box
            sx={{
              position: "absolute",
              top: "65%", // Start Recommended Events from middle
              left: "50%",
              transform: "translate(-50%, -10%)", // Center it properly
              width: "90%",
              zIndex: 1,
            }}
          >
            <RecommendedShows events={recommended} />
          </Box>   

          {/* Upcoming Events Section */}
          <Box
            sx={{
              position: "absolute",
              top: {xs: "160%", sm: "160%", md: "145%", lg: "190%", xl: "155%"}, // Positioning after Recommended Shows
              left: "50%",
              transform: "translate(-50%, -10%)",
              width: "90%",
              zIndex: 1,

            }}
          >
            <UpcomingEvents events={upcoming} />
          </Box>      
        </>
      )}
    </Box>
  );
};

export default Home;
