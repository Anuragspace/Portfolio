
import React, { useState, useEffect } from "react";
import { Menu, X, Linkedin, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/WordRotate";
import { BorderBeam } from "@/components/BorderBeam";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || "home";
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-5" : "py-5" 
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
        }`}>
          <a href="#" className="text-xl font-bold group flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-[#3E40EF] mr-2" />
            <span className="font-display">
              {!isMenuOpen && (
                <WordRotate 
                  words={["Portfolio", "Anurag Adarsh", "Designer", "Developer"]} 
                  className="text-inherit inline-block"
                  motionProps={{
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -8 },
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                />
              )}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${
          isScrolled ? "fixed left-1/2 -translate-x-1/2 mt-4" : ""
        }`}>
          <div className="relative bg-white shadow-sm rounded-full px-2 py-2.5 flex items-center gap-1">
            <BorderBeam 
              colorFrom="#3E40EF"
              colorTo="#6366F1"
              size={70}
              duration={7}
              className="opacity-70"
            />
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative z-10 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:text-[#3E40EF] ${
                  activeSection === link.href.substring(1) 
                    ? "bg-[#3E40EF]/10 text-[#3E40EF]" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Social Links */}
        <div className={`hidden md:flex items-center space-x-4 transition-all duration-300 ${
          isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
        }`}>
          <Button size="sm" className="bg-[#3E40EF] hover:bg-[#3E40EF]/90">
            Resume
          </Button>
        </div>

        {/* Enhanced Mobile Menu Button with modern UI */}
        {/* Mobile Menu Button - Refined Design */}
        <button
          className={`md:hidden relative z-50 p-3 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
            isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{
            boxShadow: isMenuOpen 
              ? '0 0 0 2px rgba(62, 64, 239, 0.2), 0 2px 8px rgba(62, 64, 239, 0.1)' 
              : '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <div className={`relative w-6 h-6 transition-all duration-300`}>
              <span className={`absolute h-[2px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 top-1/2" : "top-1"
              }`} style={{ left: 0, transform: isMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0)' }}></span>
              
              <span className={`absolute h-[2.5px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 top-1/2" : "top-1/2"
              }`} style={{ left: 0, transform: isMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%)' }}></span>
              
              <span className={`absolute h-[2.5px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : "bottom-1"
              }`} style={{ left: 0, transform: isMenuOpen ? 'translateY(0)' : 'translateY(0)' }}></span>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation - Simplified animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
          >
            {/* Backdrop with blur effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={toggleMenu}
            />
            
            {/* Menu content with simpler animation */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative ml-auto h-full w-4/5 max-w-sm bg-[#3E40EF] text-white flex flex-col overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Logo for mobile menu */}
                <div className="mb-8 pt-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-white" />
                    <span className="font-display text-xl font-bold">Anurag Adarsh</span>
                  </div>
                  <div className="mt-2 h-0.5 w-12 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Navigation links */}
                <nav className="flex flex-col space-y-1 py-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className={`flex items-center py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                          activeSection === link.href.substring(1) 
                            ? "bg-white/10 text-white" 
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Social links and resume button */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-3">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path
                            fill="currentColor"
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                          />
                        </svg>
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path
                            fill="currentColor"
                            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                          />
                        </svg>
                      </a>
                    </div>
                    
                    <Button className="bg-white text-[#3E40EF] hover:bg-white/90">
                      Resume
                    </Button>
                  </div>
                  
                  
                  
                  <p className="text-sm text-white/60">© 2023 Anurag Adarsh. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
