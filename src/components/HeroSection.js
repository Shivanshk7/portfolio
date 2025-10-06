import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const backgroundImage =
  "https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?semt=ais_hybrid&w=740&q=80";
const profileImage =
  "https://i.postimg.cc/gc1HJh0D/temp-Imagef-FVZVo.avif";

const skills = ["React", "Node.js", "JavaScript", "Kotlin", "HTML"];

const HeroSection = ({ sectionsRef }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating neon streaks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: ["-150%", "150%"], opacity: [0.1, 0.4, 0.1] }}
          transition={{ repeat: Infinity, duration: 6 + i, delay: i * 0.5 }}
          style={{
            position: "absolute",
            top: `${50 + i * 80}px`,
            width: "300px",
            height: "2px",
            background: "linear-gradient(90deg, #ff6ec4, #7873f5, #00f2c3)",
            opacity: 0.2,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Profile photo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.08, rotate: 5 }}
        style={{ marginBottom: "20px", cursor: "pointer" }}
        onClick={() =>
          sectionsRef.about.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <Avatar
          src={profileImage}
          alt="Shivansh Kushwaha"
          sx={{
            width: 190,
            height: 190,
            borderRadius: "50%", // circle banane ke liye
            objectFit: "cover", // crop karega
            objectPosition: "top", // upar ka portion rakhega
            boxShadow:
              "0 0 25px rgba(255,110,196,0.7), 0 0 45px rgba(0,242,195,0.6)",
          }}
        />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: "Times New Roman, serif",
            background: "linear-gradient(90deg, #ff6ec4, #7873f5, #00f2c3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 3px 12px rgba(0,0,0,0.6)",
          }}
        >
          Shivansh Kushwaha
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontFamily: "Times New Roman, serif",
            background: "linear-gradient(90deg, #f7971e, #ffd200, #00f2c3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}
        >
          Software Developer
        </Typography>

        {/* Projects Button */}
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #ff6ec4, #7873f5, #00f2c3)",
              px: 6,
              py: 1.7,
              fontWeight: "bold",
              borderRadius: "2.5rem",
              boxShadow:
                "0 0 25px #ff6ec4, 0 0 45px #7873f5, 0 0 70px #00f2c3",
              textTransform: "none",
            }}
            onClick={() =>
              sectionsRef.projects.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </Button>
        </motion.div>
      </motion.div>

      {/* Skills cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 6,
          px: 2,
          maxWidth: "90%",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4 + i }}
            style={{
              padding: "12px 18px",
              borderRadius: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 5px 25px rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              cursor: "default",
              margin: "5px",
              minWidth: "90px",
              textAlign: "center",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </Box>

      {/* Scroll-down arrow */}
      <Box
        sx={{ mt: 5, cursor: "pointer" }}
        onClick={() =>
          sectionsRef.about.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ExpandMoreIcon
            sx={{
              fontSize: 55,
              color: "#ff6ec4",
              textShadow: "0 3px 8px rgba(0,0,0,0.6)",
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
