import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const logoUrl =
  "https://i.postimg.cc/6qzBM0cz/temp-Imaget-WSVQl.avif";

const Navbar = ({ sectionsRef }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", ref: "home", icon: <HomeIcon /> },
    { label: "About", ref: "about", icon: <InfoIcon /> },
    { label: "Projects", ref: "projects", icon: <BuildIcon /> },
    { label: "Skills", ref: "skills", icon: <StarIcon /> },
    { label: "Contact", ref: "contact", icon: <ContactMailIcon /> },
  ];

  const handleScroll = (refKey) => {
    sectionsRef[refKey].current.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3))", // Dark transparent gradient
          backdropFilter: "blur(10px)", // Slight blur for creativity
          color: "#fff",
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo + Name */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={() => handleScroll("home")}
          >
            <Box
              component="img"
              src={logoUrl}
              alt="Logo"
              sx={{
                height: 40,
                width: "auto",
                borderRadius: "50%",
                border: "2px solid #ff6ec4",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
                color: "#fff",
              }}
            >
              Shivansh Kushwaha
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    sx={{
                      position: "relative",
                      color: "#fff",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#ff6ec4",
                        textShadow: "0px 0px 8px #ff6ec4",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "3px",
                        left: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(90deg, #ff6ec4, #7873f5, #00f2c3)",
                        transition: "width 0.3s",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                    onClick={() => handleScroll(item.ref)}
                    startIcon={item.icon}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, backgroundColor: "rgba(0,0,0,0.9)", height: "100%" }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} onClick={() => handleScroll(item.ref)}>
                <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} sx={{ color: "#ffffff" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
