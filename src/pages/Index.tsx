
import React, { useEffect, useCallback, memo } from "react";
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
import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations";
import { LazyMotion, domAnimation } from "framer-motion";

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
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";
    
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
      document.documentElement.style.removeProperty("scroll-behavior");
    };
  }, []);
  
  // Pre-connect to external domains for faster loading
  useEffect(() => {
    const linkEl = document.createElement('link');
    linkEl.rel = 'preconnect';
    linkEl.href = 'https://fonts.gstatic.com';
    linkEl.crossOrigin = 'anonymous';
    document.head.appendChild(linkEl);
    
    return () => {
      document.head.removeChild(linkEl);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        <MetaHead />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MemoizedExperience />
        <MemoizedPosters />
        <MemoizedContact />
        <MemoizedFooter />
      </div>
    </LazyMotion>
  );
};

export default Index;
