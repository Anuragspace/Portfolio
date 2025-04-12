
import React, { useEffect, useCallback } from "react";
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
  // Define the scroll handler as a callback to prevent recreation on each render
  const handleSmoothScroll = useCallback((e: Event) => {
    e.preventDefault();
    
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (!href) return;
    
    const targetElement = document.querySelector(href);
    if (!targetElement) return;
    
    window.scrollTo({
      top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for header height
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    // Smooth scroll to anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [handleSmoothScroll]);

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
