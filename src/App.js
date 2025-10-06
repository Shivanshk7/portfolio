import React from "react";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const sectionsRef = {
    home: React.useRef(null),
    about: React.useRef(null),
    projects: React.useRef(null),
    skills: React.useRef(null),
    contact: React.useRef(null),
  };

  return (
    <Layout sectionsRef={sectionsRef}>
      <div ref={sectionsRef.home}>
        <HeroSection sectionsRef={sectionsRef} />
      </div>
      <div ref={sectionsRef.about}>
        <About />
      </div>
      <div ref={sectionsRef.projects}>
        <Projects />
      </div>
      <div ref={sectionsRef.skills}>
        <Skills />
      </div>
      <div ref={sectionsRef.contact}>
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
