
import React, { useEffect, useCallback, useRef } from "react";
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
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

// Create global type for LocomotiveScroll
declare global {
  interface Window {
    locomotiveScroll: any;
  }
}

const Index = () => {
  const containerRef = useRef(null);
  
  // Initialize smooth scroll
  const { scrollTo, update } = useSmoothScroll({
    lerp: 0.075, // Lower = smoother (0.05-0.1 is good for liquid feel)
    smooth: true,
    smartphone: { smooth: false },
    tablet: { smooth: false }
  });
  
  // Update scroll on content change
  useEffect(() => {
    // Allow time for content to render
    const timer = setTimeout(() => {
      update();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [update]);

  // Handle anchor link clicks
  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const target = e.currentTarget;
    const href = target.getAttribute('href');
    if (!href) return;
    
    // Use locomotive scroll for smooth navigation
    scrollTo(href);
  }, [scrollTo]);

  useEffect(() => {
    // Apply click handler to anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as any);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as any);
      });
    };
  }, [handleAnchorClick]);

  return (
    <div className="min-h-screen bg-white" data-scroll-container ref={containerRef}>
      <MetaHead />
      <Navbar />
      <div data-scroll-section>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Posters />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
