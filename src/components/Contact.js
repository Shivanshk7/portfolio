import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  const contacts = [
    {
      name: "Gmail",
      icon: <EmailIcon sx={{ fontSize: 50, color: "#ef5350" }} />,
      link: "mailto:shivanshkushwaha0007@gmail.com",
      label: "Send Mail",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon sx={{ fontSize: 50, color: "#0a66c2" }} />,
      link: "https://www.linkedin.com/in/shivansh-kushwaha-5a3565309/",
      label: "View Profile",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon sx={{ fontSize: 50, color: "white" }} />,
      link: "https://github.com/Shivanshk7",
      label: "View Repos",
    },
    {
      name: "Phone",
      icon: <PhoneIcon sx={{ fontSize: 50, color: "#66bb6a" }} />,
      link: "tel:+919910330329",
      label: "Call Now",
    },
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <Box sx={{ backgroundColor: "#0b0b0c", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 8,
              textAlign: "center",
              background: "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </Typography>
        </motion.div>

        {/* Contact Grid */}
        <Grid container spacing={4} justifyContent="center">
          {contacts.map((c, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariant}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  onClick={() => window.open(c.link, "_blank")}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 4,
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.15)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.1)",
                      boxShadow:
                        "0 0 20px #ff6ec4, 0 0 40px #7873f5, 0 0 60px #00f2c3",
                    },
                  }}
                >
                  {/* Icon with glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                    }}
                  >
                    {c.icon}
                  </motion.div>

                  <Typography
                    sx={{ mt: 1, mb: 1, fontWeight: 700, color: "#fff" }}
                  >
                    {c.name}
                  </Typography>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}
                  >
                    {c.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
