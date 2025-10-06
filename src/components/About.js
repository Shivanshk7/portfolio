import React from "react";
import { Box, Container, Grid, Typography, Button, Avatar, LinearProgress, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statsVariant = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <Box sx={{ position: "relative", backgroundColor: "#0f0f10", color: "#fff", py: { xs: 8, md: 14 }, overflow: "hidden" }}>

      {/* Background floating circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 1000, y: Math.random() * 500, opacity: 0 }}
          animate={{ y: [0, -40 - i * 5, 0], opacity: [0.1, 0.25 + i * 0.05, 0.1] }}
          transition={{ repeat: Infinity, duration: 12 + i, delay: i * 0.5 }}
          style={{
            position: "absolute",
            width: 80 + Math.random() * 120,
            height: 80 + Math.random() * 120,
            borderRadius: "50%",
            background: `rgba(${Math.floor(255 - i * 20)},${110 + i * 15},${196 - i * 10},${0.1 + Math.random() * 0.2})`,
            zIndex: 0,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left: Avatar & intro */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
                <Avatar
                  src="https://i.postimg.cc/6qzBM0cz/temp-Imaget-WSVQl.avif"
                  alt="Shivansh"
                  sx={{
                    width: 180,
                    height: 180,
                    boxShadow: "0 0 35px #ff6ec4, 0 0 55px #7873f5, 0 0 75px #00f2c3",
                    mb: 3,
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    "&:hover": { transform: "scale(1.08) rotate(-2deg)", boxShadow: "0 0 50px #ff6ec4, 0 0 70px #7873f5, 0 0 90px #00f2c3" },
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                  Shivansh Kushwaha
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "rgba(255,255,255,0.7)", mb: 2, textAlign: { xs: "center", md: "left" } }}>
                  Software Developer | Building web and app experiences with React.js, Node.js, Kotlin, and Android Studio.
                </Typography>

                <Button
                  variant="contained"
                  href="mailto:shivanshkushwaha0007@gmail.com"
                  sx={{
                    background: "linear-gradient(90deg, #ff6ec4, #7873f5, #00f2c3)",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "0 0 20px #ff6ec4, 0 0 40px #7873f5",
                    transition: "all 0.4s ease",
                    "&:hover": { opacity: 0.9, transform: "scale(1.05)" },
                  }}
                >
                  Hire / Contact
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: About text & stats */}
          <Grid item xs={12} md={7}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>

              <motion.div variants={itemVariant}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    color: "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
                    textAlign: "left",
                    background: "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Me
                </Typography>
              </motion.div>

              <motion.div variants={itemVariant}>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 4, lineHeight: 1.8 }}>
                  I am a versatile Software Developer and AI/Data Science enthusiast with experience in React.js, Node.js, JavaScript, Kotlin, Android Studio, XML, HTML, and full-stack web development. I build interactive websites and mobile apps, develop single- and multi-modal AI projects, create datasets, and craft ML pipelines. I enjoy turning ideas into real products, blending technical expertise with creative problem-solving to deliver scalable, user-friendly, and AI-driven solutions.
                </Typography>
              </motion.div>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { label: "Months Experience", value: "6+" },
                  { label: "Projects", value: "6+" },
                  { label: "LinkedIn", value: "View Profile", link: "https://www.linkedin.com/in/shivanshkushwaha0007/" },
                  { label: "GitHub", value: "View Repo", link: "https://github.com/Shivanshk7" },
                ].map((stat, i) => (
                  <Grid item xs={6} sm={3} key={i}>
                    <motion.div whileHover="hover" variants={statsVariant}>
                      <Box
                        sx={{
                          background: "rgba(255,255,255,0.03)",
                          p: 2,
                          borderRadius: 3,
                          textAlign: "center",
                          cursor: stat.link ? "pointer" : "default",
                          transition: "all 0.4s ease",
                          "&:hover": { background: "rgba(255,255,255,0.06)", boxShadow: "0 0 20px #ff6ec4, 0 0 40px #7873f5, 0 0 60px #00f2c3" },
                        }}
                        onClick={() => stat.link && window.open(stat.link, "_blank")}
                      >
                        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>{stat.value}</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{stat.label}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* Animated Skills with tooltip % */}
              <motion.div variants={itemVariant}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Skills</Typography>
                {[
                  { skill: "React.js", value: 90 },
                  { skill: "Java", value: 85 },
                  { skill: "Node.js", value: 80 },
                  { skill: "Python", value: 80 },
                  { skill: "Kotlin", value: 75 },
                ].map((s, i) => (
                  <Tooltip key={i} title={`${s.value}%`} arrow>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.3 }}
                      style={{ marginBottom: 12 }}
                    >
                      <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14, mb: 0.5 }}>{s.skill}</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={s.value}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: "rgba(255,255,255,0.1)",
                          "& .MuiLinearProgress-bar": {
                            background: "linear-gradient(90deg, #ff6ec4, #7873f5, #00f2c3)",
                          },
                        }}
                      />
                    </motion.div>
                  </Tooltip>
                ))}
              </motion.div>

              <motion.div variants={itemVariant}>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 4 }}>
                  I’m open to freelance & full-time opportunities. If you like clean design, accessible components and fast prototypes — let's talk.
                </Typography>
              </motion.div>

            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

