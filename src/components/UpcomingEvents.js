// UpcomingEvents.js
import React, {useState, useEffect} from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingEvents = ({ events }) => {
    const [loadingUpcoming, setLoadingUpcoming] = useState(true);
    useEffect(() => {
        if (events && events.length > 0) {
          setLoadingUpcoming(false); // Hide loader once events are received
        }
      }, [events]);
  return (
    <Box margin={"0px 20px"} padding={"0px 20px"}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Upcoming Events
      </Typography>
      {loadingUpcoming ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <CircularProgress />
        </Box>
      ) : (
        <Box
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {events.map((event) => (
            <Box item key={event.id}>
              <UpcomingEventCard event={event} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default UpcomingEvents;
