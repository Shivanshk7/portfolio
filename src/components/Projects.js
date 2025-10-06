import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

// Intersection Observer Hook
function useInView(ref, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

const PROJECTS = [
  {
    id: 1,
    title: "Creative Landscapes",
    description: "Custom React site with animations and MUI components.",
    thumb: "https://i.postimg.cc/Fs8hhT62/temp-Image-H8aqn6.avif",
    demo: "https://shivanshk7.github.io/Garden-Landscape/",
    git: "https://github.com/Shivanshk7/Garden-Landscape",
    stack: ["React", "MUI", "Framer Motion"],
  },
  {
    id: 2,
    title: "TrackMate App",
    description: "A live vehicle location tracking platform in Android Studio.",
    thumb: "https://i.postimg.cc/4480nhFz/temp-Imagez-CNg-QN.avif",
    stack: ["Android", "Java", "Maps API"],
  },
  {
    id: 3,
    title: "Flinkirt - Ecommerce",
    description: "Custom React site with animations and payment integration.",
    thumb: "https://i.postimg.cc/vT4YVw7M/temp-Imagesmun4-O.avif",
    demo: "https://shopx-site.netlify.app",
    git: "https://github.com/Shivanshk7/Ecommerce-website",
    stack: ["React", "MUI", "Firebase"],
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather forecast with API integration.",
    thumb: "https://i.postimg.cc/vBbBNKrw/temp-Imagej-P635h.avif",
    demo: "https://weatherx-site.netlify.app",
    git: "https://github.com/Shivanshk7/Weather-App",
    stack: ["React", "API", "MUI"],
  },
];

const Projects = () => {
  return (
    <Box
      id="projects-section"
      sx={{
        backgroundColor: "#0b0b0c",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
            My Projects
          </Typography>
        </motion.div>

        {/* Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
        >
          {PROJECTS.map((p) => (
            <Grid item xs={12} sm={10} md={5} key={p.id}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>

        {/* GitHub CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            href="https://github.com/shivanshk7"
            target="_blank"
            rel="noreferrer"
            sx={{
              background: "linear-gradient(90deg,#ff6ec4,#7873f5)",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              borderRadius: "1rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              "&:hover": { filter: "brightness(1.08)" },
            }}
          >
            View More on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const inView = useInView(ref, "-100px");
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Card
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          position: "relative",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "1.2rem",
          overflow: "hidden",
          backdropFilter: "blur(6px)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-10px) scale(1.03)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 16px 50px rgba(0,0,0,0.8)",
          },
        }}
      >
        {/* Image with overlay */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={project.thumb}
            alt={project.title}
            sx={{ height: 280, objectFit: "cover" }}
          />
          {hover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                zIndex: 2,
              }}
            >
              {project.git && (
                <Button
                  variant="outlined"
                  href={project.git}
                  target="_blank"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    "&:hover": { borderColor: "#ff6ec4", color: "#ff6ec4" },
                  }}
                >
                  GitHub
                </Button>
              )}
              {project.demo && (
                <Button
                  variant="contained"
                  onClick={() => window.open(project.demo, "_blank")}
                  sx={{
                    background: "linear-gradient(90deg,#ff6ec4,#7873f5)",
                    "&:hover": { filter: "brightness(1.1)" },
                  }}
                >
                  Live Demo
                </Button>
              )}
            </motion.div>
          )}
        </Box>

        {/* Content */}
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: "#fff",
              mb: 1,
              transition: "color 0.3s",
              "&:hover": { color: "#ff6ec4" },
            }}
          >
            {project.title}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
            {project.description}
          </Typography>

          {/* Tech stack chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {project.stack?.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontSize: 12,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Projects;
