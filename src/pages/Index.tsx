
import React, { useEffect, useCallback, memo, lazy, Suspense } from "react";
import { Events, scrollSpy } from "react-scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/Skills";
import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations";
import { LazyMotion, domAnimation, m } from "framer-motion";
import MetaHead from "@/components/MetaHead";
import HomeButton from "@/components/HomeButton";

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
  
  // Optimize scrolling with throttled scroll handler for react-scroll
  const updateScrollSpy = useCallback(() => {
    scrollSpy.update();
  }, []);
  
  useEffect(() => {
    // Make sure react-scroll and Lenis work well together
    Events.scrollEvent.register('begin', () => {
      // Temporarily disable Lenis during react-scroll navigation
      if (window.lenis) {
        window.lenis.stop();
      }
    });
    
    Events.scrollEvent.register('end', () => {
      // Re-enable Lenis after react-scroll navigation completes
      if (window.lenis) {
        window.lenis.start();
      }
      updateScrollSpy();
    });
    
    // Initialize scrollSpy once
    scrollSpy.update();
    
    // Let Lenis handle the scroll events, but still update react-scroll
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
    
    // Use passive listeners for better performance
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
        
        <HomeButton />
      </div>
    </LazyMotion>
  );
};

export default memo(Index);
