
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import projects from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
