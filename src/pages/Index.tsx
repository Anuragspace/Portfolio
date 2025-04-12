
import React, { useEffect, useCallback } from "react";
import { Events, scrollSpy, scroller } from "react-scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Posters from "@/components/Posters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MetaHead from "@/components/MetaHead";

const Index = () => {
  // Optimize scrolling with react-scroll
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Initialize scrollSpy for detecting active sections
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    // Register for scroll events with passive: true for performance
    window.addEventListener('scroll', scrollSpy.update, { passive: true });
    
    return () => {
      // Clean up scroll events when component unmounts
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', scrollSpy.update);
      document.documentElement.style.removeProperty("scroll-behavior");
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MetaHead />
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
  );
};

export default Index;
