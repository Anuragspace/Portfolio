import React, { useEffect, useCallback, memo } from "react";
import { Events, scrollSpy, scroller } from "react-scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Posters from "@/components/Posters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations";
import { LazyMotion, domAnimation } from "framer-motion";
import { Element } from "react-scroll";

// Memoize components for better performance
const MemoizedExperience = memo(Experience);
const MemoizedPosters = memo(Posters);
const MemoizedContact = memo(Contact);
const MemoizedFooter = memo(Footer);

const Index = () => {
  // Apply performance optimizations
  const { isOptimized } = usePerformanceOptimizations();
  
  // Optimize scrolling with react-scroll
  useEffect(() => {
    // Initialize scrollSpy for detecting active sections
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();
    
    // Register for scroll events with passive: true for better performance
    window.addEventListener('scroll', scrollSpy.update, { passive: true });
    
    return () => {
      // Clean up scroll events when component unmounts
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', scrollSpy.update);
    };
  }, []);

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        
        <Navbar />
        <Hero />
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <MemoizedExperience />
        <section id="posters">
          <MemoizedPosters />
        </section>
        <MemoizedContact />
        <MemoizedFooter />
      </div>
    </LazyMotion>
  );
};

export default Index;
