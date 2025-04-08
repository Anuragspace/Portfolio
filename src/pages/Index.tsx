
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Posters from "@/components/Posters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocomotiveScrollProvider from "@/components/LocomotiveScrollProvider";

const Index = () => {
  return (
    <LocomotiveScrollProvider>
      <div className="min-h-screen bg-white" data-scroll-section>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Posters />
        <Contact />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Index;
