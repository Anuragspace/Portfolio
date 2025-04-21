import React, { useEffect, useCallback, memo, lazy, Suspense } from "react";
import { Events, scrollSpy } from "react-scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/Skills";
import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations";
import { LazyMotion, domAnimation, m } from "framer-motion";
import MetaHead from "@/components/MetaHead";

// Lazy load non-critical components
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Posters = lazy(() => import("@/components/Posters"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Lightweight loading fallback
const LoadingFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  // Apply performance optimizations
  const { isOptimized } = usePerformanceOptimizations();
  
  // Optimize scrolling with throttled scroll handler
  const updateScrollSpy = useCallback(() => {
    scrollSpy.update();
  }, []);
  
  useEffect(() => {
    // Use passive event listeners for better performance
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    
    // Initialize scrollSpy once
    scrollSpy.update();
    
    // Use passive event listener and throttle scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollSpy]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-white">
        <MetaHead />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        
        {/* Lazy load less critical sections */}
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        
        <section id="posters">
          <Suspense fallback={<LoadingFallback />}>
            <Posters />
          </Suspense>
        </section>
        
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default memo(Index);
