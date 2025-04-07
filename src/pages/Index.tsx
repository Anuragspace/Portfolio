
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

  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        if (lenis) {
          // Use Lenis for smooth scrolling
          lenis.scrollTo(targetElement, { 
            offset: -80, // Adjust for header height
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          // Fallback to native scrolling
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, [lenis]);

  // Force Lenis to recalculate on page load
  useEffect(() => {
    if (lenis) {
      setTimeout(() => {
        lenis.resize();
      }, 500);
    }
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
