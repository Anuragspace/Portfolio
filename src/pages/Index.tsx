import React, { useEffect } from "react";
import { useSmoothScroll } from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Posters from "@/components/Posters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { lenis } = useSmoothScroll();

  // Enhanced smooth anchor scrolling with improved easing
  useEffect(() => {
    if (!lenis) return;
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      // Enhanced smooth scrolling with cubic-bezier easing
      lenis.scrollTo(targetElement as HTMLElement, { 
        offset: -80,
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // More natural cubic ease-out
      });
    };

    // Add event listener to the document for all anchor links
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [lenis]);

  // Improved Lenis recalculation timing
  useEffect(() => {
    if (!lenis) return;
    
    const handleResize = () => {
      lenis.resize();
    };
    
    // Initial resize with a more reliable approach using requestAnimationFrame
    const initialResize = () => {
      lenis.resize();
      // Check if elements have fully loaded by looking at their dimensions
      if (document.body.offsetHeight > window.innerHeight) {
        // If content exceeds viewport, we're likely loaded
        return;
      } else {
        // Otherwise, try again in the next frame
        requestAnimationFrame(initialResize);
      }
    };
    
    requestAnimationFrame(initialResize);
    
    // Additional resize triggers
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Handle content changes that might affect page height
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    
    resizeObserver.observe(document.body);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      resizeObserver.disconnect();
    };
  }, [lenis]);

  return (
    <div className="min-h-screen bg-white">
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
