
import React, { useState, useEffect } from "react";
import { Menu, X, Linkedin, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/WordRotate";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        // Cast section to HTMLElement to access offsetTop and offsetHeight
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold group flex items-center gap-1">
            <span className="font-display">Portfolio</span>
            <span className="text-[#3E40EF] group-hover:rotate-12 transition-transform duration-300">.</span>
            <Sparkles className="h-4 w-4 text-[#3E40EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <div className="ml-2 text-xl font-medium">
            <WordRotate 
              words={["Anurag Adarsh", "Designer", "Developer"]} 
              className="text-[#3E40EF] font-display"
              motionProps={{
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -8 },
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="bg-white/50 backdrop-blur-sm shadow-sm rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:text-[#3E40EF] ${
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

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#3E40EF] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#3E40EF] transition-colors duration-300"
            aria-label="Behance"
          >
            <ExternalLink size={20} />
          </a>
          <Button size="sm" className="bg-[#3E40EF] hover:bg-[#3E40EF]/90 ml-2">
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 pt-20 px-6 flex flex-col animate-fade-in">
          <nav className="flex flex-col space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xl font-medium hover:text-[#3E40EF] transition-colors ${
                  activeSection === link.href.substring(1) ? "text-[#3E40EF]" : "text-gray-700"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 mt-auto mb-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#3E40EF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://behance.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#3E40EF] transition-colors"
              aria-label="Behance"
            >
              <ExternalLink size={24} />
            </a>
            <Button className="bg-[#3E40EF] hover:bg-[#3E40EF]/90 ml-auto">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
