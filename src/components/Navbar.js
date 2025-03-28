
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box, MenuItem, Menu, Divider, Avatar} from "@mui/material";
import { LocationOn, Close, Settings, Logout} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  border: "solid 1px gray",
  padding: "4px 10px",
  borderRadius: "4px",
  flexGrow: 1,
  margin: "0 16px",
  maxWidth: "500px",
}));

const SearchContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "0px 5px",
    borderRadius: "4px",
    marginLeft: "10px",
    border: "solid 1px gray",
    flexGrow: 1,
    marginRight: "8px",
  }));

const DesktopNav = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  }));
  
  const MiddleSection = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  }));

const MobileNav = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const FlexContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    padding: "8px 16px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }));

const LocationContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
  }));
  
  const CategoryLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    padding: "8px 16px",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")] : {
        alignSelf: "center",
        marginLeft: "100px"
    }
  }));



const Navbar = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const { user } = useAuth();
    // State for location selection
  const [location, setLocation] = useState("Mumbai, India");
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenu, setProfileMenu] = useState(null);
  // State for mobile search bar toggle
  const [showSearch, setShowSearch] = useState(false);

  // Open location menu
  const handleLocationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Change location and close menu
  const handleLocationSelect = (newLocation) => {
    setLocation(newLocation);
    setAnchorEl(null);
  };

  const handleProfileClick = (event) => setProfileMenu(event.currentTarget);
  const handleProfileClose = () => setProfileMenu(null);


  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ fontFamily: "Inter",paddingLeft: 1, paddingRight: 1 }}>
      <Toolbar>
        {/* Mobile View */}
        <MobileNav sx={{ display: { xs: "flex", md: "none" } }}>
          <Typography variant="h6" color="#CF2D2D" fontWeight="bold" sx={{ fontFamily: "Inter", cursor: "pointer" }} onClick={() => navigate("/home")}>
            BookUsNow
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          {showSearch ? (
                <SearchContainer>
                  <InputBase placeholder="Search…" autoFocus fullWidth sx={{ flexGrow: 1 }} />
                  <IconButton onClick={() => setShowSearch(false)}>
                    <Close sx={{ color: "gray", height: "20px" }} />
                  </IconButton>
                </SearchContainer>
              ) : (
                <IconButton onClick={() => setShowSearch(true)}>
                  <SearchIcon sx={{ color: "gray" }} />
                </IconButton>
              )}
            <IconButton>
              <FavoriteIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton onClick={handleProfileClick}>
              <PersonIcon sx={{ color: "gray" }} />
            </IconButton>
          </Box>
        </MobileNav>

        {/* Desktop View */}
        <DesktopNav sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography variant="h6" color="#CF2D2D" fontWeight="bold" sx={{ fontFamily: "Inter",cursor: "pointer" }} onClick={() => navigate("/home")}>
            BookUsNow
          </Typography>
          <MiddleSection>
            <IconButton 
            sx={{ backgroundColor: "black", 
                color: "white", 
                marginRight: 0, 
                marginLeft: 10 ,
                borderRadius: "5px", 
                fontSize: "15px", 
                paddingLeft: 2,
                 paddingRight: 2, 
                 fontFamily: "Inter",
                 "&:hover": {
                    backgroundColor: "black", 
                    color: "white",
                }}}>
              <MenuIcon sx={{marginRight: 1}}/> Categories
            </IconButton>
            <SearchBar sx={{fontFamily: "Inter"}}>
              <InputBase placeholder="Search for items…" fullWidth sx={{fontFamily: "Inter"}} />
              <SearchIcon sx={{ marginLeft: 1, color: "gray" }} />
            </SearchBar>
          </MiddleSection>
          <Box>
            <Button startIcon={<FavoriteIcon />} sx={{ color: "gray", textTransform: "none",fontFamily: "Inter", fontSize: "17px", marginRight: 0 }}>
              Favorites
            </Button>
            <Button onClick={handleProfileClick} sx={{}}>
              <PersonIcon sx={{ color: "gray", cursor: "pointer" }}/>
            </Button>
          </Box>
        </DesktopNav>
      </Toolbar>


      {/* Location and Categories Section */}
      <FlexContainer sx={{fontFamily: "Inter", padding: 0, margin: 0}}>
        {/* Location Selection */}
        <Box display="flex" justifyContent="center" m={0} p={0} sx={{curson: "pointer"}}>
            <LocationContainer onClick={handleLocationClick} sx={{curson: "pointer"}}>
            <LocationOn sx={{ color: "gray" }} />
            <Typography variant="body1" sx={{ marginLeft: "8px", fontSize: "17px",fontFamily: "Inter" }}>{location}</Typography>
            <ArrowForwardIosIcon sx={{ color: "gray", height: "15px", cursor: "pointer" }} />
            </LocationContainer>
        </Box>

        {/* Location Selection Dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => handleLocationSelect("Mumbai, India")}>Mumbai, India</MenuItem>
            <MenuItem onClick={() => handleLocationSelect("Delhi, India")}>Delhi, India</MenuItem>
            <MenuItem onClick={() => handleLocationSelect("Bangalore, India")}>Bangalore, India</MenuItem>
            <MenuItem onClick={() => handleLocationSelect("Hyderabad, India")}>Hyderabad, India</MenuItem>
        </Menu>

      
        <CategoryLinks sx={{fontFamily: "Inter", marginLeft: 2, marginRight: 2, marginBottom: 2, padding: 0}}>
            <Typography variant="body2" sx={{fontSize: "17px",fontFamily: "Inter", cursor: "pointer" }}>Live Shows</Typography>
            <Typography variant="body2" sx={{fontSize: "17px", fontFamily: "Inter",cursor: "pointer" }}>Streams</Typography>
            <Typography variant="body2" sx={{fontSize: "17px",fontFamily: "Inter",cursor: "pointer" }}>Movies</Typography>
            <Typography variant="body2" sx={{fontSize: "17px",fontFamily: "Inter",cursor: "pointer" ,}}>Plays</Typography>
            <Typography variant="body2" sx={{fontSize: "17px",fontFamily: "Inter", cursor: "pointer", borderBottom: "2px solid #CF2D2D" }}>Events</Typography>
            <Typography variant="body2" sx={{fontSize: "17px",fontFamily: "Inter", cursor: "pointer" }}>Sports</Typography>
            <Typography variant="body2" sx={{fontSize: "17px",fontFamily: "Inter", cursor: "pointer" }}>Activities</Typography>
        </CategoryLinks>
       </FlexContainer>

        {/* Profile Dropdown */}
        <Menu anchorEl={profileMenu} open={Boolean(profileMenu)} onClose={handleProfileClose}>
            <Box sx={{ padding: "10px", display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 40, height: 40, marginRight: "10px" }} />
            <Box>
                <Typography variant="body1" fontWeight="bold">{user.username}</Typography>
                <Typography variant="body2" color="gray">{user.email}</Typography>
            </Box>
            </Box>
            <Divider />
            <MenuItem >
            <PersonIcon sx={{ marginRight: "10px" }} /> Profile
            </MenuItem>
            <MenuItem >
            <Settings sx={{ marginRight: "10px" }} /> Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigate("/login")}>
            <Logout sx={{ marginRight: "10px", color: "red" }} /> Logout
            </MenuItem>
        </Menu>

    </AppBar>
  );
};

export default Navbar;
