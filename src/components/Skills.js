import React from "react";
import {
  Container,
  Typography,
  Box,
  LinearProgress,
  Avatar,
  Grid,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React.js", exp: 90 },
    { name: "Material UI", exp: 85 },
    { name: "Framer Motion", exp: 75 },
    { name: "Node.js", exp: 80 },
    { name: "SQL", exp: 70 },
    { name: "Kotlin", exp: 80 },
    { name: "Java", exp: 85 },
    { name: "Python", exp: 75 },
  ];

  const experiences = [
    {
      company: "EStreet",
      role: "Software Developer",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGO5pBnbJOXkg/company-logo_200_200/company-logo_200_200/0/1694694192066/estreet_logo?e=1761782400&v=beta&t=HnJR7-5_y26_XSIuHqZGWggFYYiSx1cMYR5UMi0NpEk",
      type: "Full-time",
      duration: "Jul 2025 - Present",
      location: "Chandigarh, India · On-site",
      link: "https://in.linkedin.com/company/estreet",
    },
    {
      company: "Newgen Software",
      role: "Web Dev Intern",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQFZB0C1RYn7ZA/company-logo_200_200/company-logo_200_200/0/1735883672081/newgen_logo?e=2147483647&v=beta&t=20jQ8rbKatYS3A5Enc46BDdKJT58_KdeJ_BoVIqMU_k",
      type: "Internship",
      duration: "Jun 2024 - Aug 2024",
      location: "Noida, Uttar Pradesh, India · Remote",
      link: "https://in.linkedin.com/company/newgen",
    },
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ backgroundColor: "#0b0b0c", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Top Heading */}
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
              color: "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
              textAlign: "center",
              background: "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Experience
          </Typography>
        </motion.div>

        {/* Skills */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            mb: 10,
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariant}
              transition={{ delay: i * 0.1 }}
            >
              <Box
                sx={{
                  width: 180,
                  px: 3,
                  py: 2,
                  borderRadius: "1.5rem",
                  fontWeight: 600,
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "2px solid transparent",
                  borderImage:
                    "linear-gradient(135deg,#ff6ec4,#7873f5,#00f2c3) 1",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography sx={{ mb: 1, fontWeight: 700 }}>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.exp}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "& .MuiLinearProgress-bar": {
                      background:
                        "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
                    },
                  }}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {skill.exp}%
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Experience */}
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, i) => (
            <Grid item xs={12} md={5} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Box
                  component="a"
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(8px)",
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.15)",
                    textDecoration: "none",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-6px) scale(1.02)",
                      boxShadow: "0 12px 25px rgba(0,0,0,0.6)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Avatar
                      src={exp.logo}
                      alt={exp.company}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: -5,
                        left: -5,
                        width: 65,
                        height: 65,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle,rgba(255,110,196,0.5),transparent)",
                        zIndex: -1,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#fff" }}>
                      {exp.role}
                    </Typography>
                    <Chip
                      label={exp.type}
                      size="small"
                      sx={{
                        background:
                          "linear-gradient(90deg,#ff6ec4,#7873f5,#00f2c3)",
                        color: "#fff",
                        fontSize: 10,
                        height: 20,
                        mb: 1,
                      }}
                    />
                    <Typography
                      sx={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}
                    >
                      {exp.duration}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}
                    >
                      {exp.location}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
