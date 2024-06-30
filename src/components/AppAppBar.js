// /src/components/AppAppBar.js

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ToggleColorMode from "./ToggleColorMode";
import logo from "../images/logo.png";

const logoStyle = {
  width: "80px",
  height: "auto",
  cursor: "pointer",
};

const menuItems = [
  { text: "Therapeutic Approach", icon: <HomeIcon /> },
  { text: "Testimonials", icon: <ReviewsIcon /> },
  { text: "Therapeutic Advantages", icon: <StarIcon /> },
  { text: "FAQ", icon: <HelpIcon /> },
];

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 0,
        borderRadius: 2,
        zIndex: 1300, // Ensures the AppBar is on top of other elements
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md="auto" sx={{ textAlign: { xs: "center", md: "left" } }}>
              <img
                src={logo}
                style={logoStyle}
                alt="logo"
              />
            </Grid>
            <Grid item sx={{ ml: 14, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              {menuItems.map(({ text, icon }) => (
                <MenuItem
                  key={text}
                  onClick={() => scrollToSection(text.replace(/ /g, "").toLowerCase())}
                  sx={{
                    py: "6px",
                    px: "12px",
                    mx: 1,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "5px",
                    },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                  <Typography variant="body2" color="text.primary" sx={{ ml: 1 }}>
                    {text}
                  </Typography>
                </MenuItem>
              ))}
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {menuItems.map(({ text, icon }) => (
                  <MenuItem
                    key={text}
                    onClick={() => scrollToSection(text.replace(/ /g, "").toLowerCase())}
                    sx={{
                      py: "6px",
                      px: "12px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icon}
                    <Typography variant="body2" color="text.primary" sx={{ ml: 1 }}>
                      {text}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
