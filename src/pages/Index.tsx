import React, { useEffect, useCallback, memo, lazy, Suspense } from "react";
import { Events, scrollSpy, scroller } from "react-scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";

// Lazy load below-the-fold components
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Posters = lazy(() => import("@/components/Posters"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

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
        
        <div id="about">
          <Element name="about"><About /></Element>
        </div>

        <div id="projects" className="scroll-mt-16">
          <Suspense fallback={<div className="min-h-[800px] animate-pulse bg-gray-50 flex items-center justify-center text-gray-400">Loading projects...</div>}>
            <Element name="projects"><Projects /></Element>
          </Suspense>
        </div>

        <div id="skills" className="scroll-mt-16">
          <Suspense fallback={<div className="min-h-[600px] animate-pulse bg-gray-50 flex items-center justify-center text-gray-400">Loading skills...</div>}>
            <Element name="skills"><Skills /></Element>
          </Suspense>
        </div>

        <div id="experience" className="scroll-mt-16">
          <Suspense fallback={<div className="min-h-[600px] animate-pulse bg-white flex items-center justify-center text-gray-400">Loading experience...</div>}>
            <MemoizedExperience />
          </Suspense>
        </div>

        <div id="posters" className="scroll-mt-16">
          <Suspense fallback={<div className="min-h-[500px] animate-pulse bg-gradient-to-b from-white to-gray-50/50 flex items-center justify-center text-gray-400">Loading flyers...</div>}>
            <MemoizedPosters />
          </Suspense>
        </div>

        <div id="contact" className="scroll-mt-16">
          <Suspense fallback={<div className="min-h-[600px] animate-pulse bg-white flex items-center justify-center text-gray-400">Loading contact...</div>}>
            <MemoizedContact />
          </Suspense>
        </div>

        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-gray-50 flex items-center justify-center text-gray-400">Loading footer...</div>}>
          <MemoizedFooter />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default Index;
