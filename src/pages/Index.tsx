
import React from "react";
import About from "@/components/about";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Posters from "@/components/Posters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SocialDock } from "@/components/SocialDock";
import MetaHead from "@/components/MetaHead";
import { usePerformanceOptimizations } from "@/hooks/use-performance-optimizations";

const Index = () => {
  // Apply performance optimizations
  usePerformanceOptimizations();
  
  return (
    <>
      <MetaHead />
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300 overscroll-none">
        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Posters />
          <Contact />
        </main>
        <SocialDock />
        <Footer />
      </div>
    </>
  );
};

export default Index;
