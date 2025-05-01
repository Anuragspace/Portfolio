import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  Linkedin,
  ExternalLink,
  Github,
  Instagram,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/WordRotate";
import {
  BorderBeam,
  RainbowButton,
  WhiteRainbowButton,
} from "@/features/shared/components/magic-ui";
import { motion, AnimatePresence } from "framer-motion";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>Behance</title>
    <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.102.894.273 1.241.507.344.235.612.546.804.938.188.387.281.871.281 1.443 0 .619-.141 1.137-.421 1.551-.284.414-.7.753-1.255 1.014.756.214 1.311.601 1.663 1.164.35.558.527 1.235.527 2.031 0 .645-.106 1.202-.314 1.67-.211.47-.5.854-.878 1.154-.373.304-.835.527-1.374.671-.54.146-1.125.219-1.765.219H1V5.698h6.799zm-.351 4.832c.475 0 .87-.114 1.176-.344.305-.229.455-.544.455-.941 0-.296-.065-.539-.189-.727-.13-.187-.307-.333-.522-.436A2.419 2.419 0 0 0 7.75 7.95a5.167 5.167 0 0 0-.704-.052H3.629v2.632h3.819zm.162 5.031c.267 0 .523-.024.765-.072.243-.049.457-.122.637-.221.182-.097.328-.232.436-.406.12-.175.162-.384.162-.635 0-.501-.162-.868-.485-1.102-.324-.23-.764-.347-1.326-.347H3.629v2.783h3.981zm8.663-9.552h5.086v1.228h-5.086V6.009zm5.576 5.526c0 .709-.122 1.352-.368 1.935a4.413 4.413 0 0 1-1.031 1.515c-.44.43-.964.764-1.572 1.005a5.381 5.381 0 0 1-1.992.359c-.699 0-1.347-.119-1.949-.359a4.208 4.208 0 0 1-1.563-1.005c-.44-.427-.798-.897-1.075-1.402-.277-.505-.423-1.068-.432-1.691h2.621c.039.577.193 1.028.465 1.353.271.325.675.486 1.212.486.315 0 .586-.065.811-.197.227-.135.415-.317.566-.546.148-.228.256-.497.32-.804.065-.306.096-.628.096-.964 0-.33-.033-.647-.096-.951-.065-.306-.174-.578-.331-.811a1.684 1.684 0 0 0-.582-.546c-.233-.134-.515-.197-.851-.197-.36 0-.677.096-.946.29-.268.193-.456.435-.559.725h-2.5c.095-.74.323-1.37.684-1.891a4.411 4.411 0 0 1 1.265-1.343 5.273 5.273 0 0 1 1.679-.801 7.091 7.091 0 0 1 1.935-.264c.647 0 1.265.099 1.857.298.59.197 1.111.49 1.555.878.444.39.797.876 1.056 1.456.258.583.387 1.26.387 2.035z" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const year = new Date().getFullYear();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 30; // Adjust this value to match your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
      <div className="container-custom flex items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <div
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <a
              href="/"
              className="text-xl font-bold group flex items-center gap-1"
            >
              <Sparkles className="h-4 w-4 text-[#3E40EF] mr-2" />
              <span className="font-display">
                <div className={isMenuOpen ? "hidden" : "block"}>
                  <WordRotate
                    words={[
                      "Portfolio",
                      "Anurag Adarsh",
                      "Designer",
                      "Developer",
                    ]}
                    className="text-inherit inline-block"
                    motionProps={{
                      initial: { opacity: 0, y: 8 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -8 },
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                </div>
              </span>
            </a>
          </div>

          <nav
            className={`hidden md:flex items-center justify-center w-full transition-all duration-500 ${
              isScrolled ? "fixed top-0 left-0 right-0 mt-4 z-50" : ""
            }`}
            style={isScrolled ? { left: 0, right: 0 } : {}}
          >
            <div className="relative bg-white shadow-sm rounded-full px-2 py-2.5 flex items-center gap-1 mx-auto">
              <BorderBeam
                colorFrom="#3E40EF"
                colorTo="#6366F1"
                size={70}
                duration={7}
                className="opacity-70"
              />
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className={`relative z-10 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:text-[#3E40EF] ${
                    activeSection === link.href.substring(1)
                      ? "bg-[#3E40EF]/10 text-[#3E40EF]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>

          <div
            className={`hidden md:flex items-center transition-all duration-300 ${
              isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <div className="ml-2">
              <a
                href="https://drive.google.com/file/d/13sT38haaEyeer0A-SJeqAVRGsHEnaGC1/view?usp=sharing" // <-- Replace with your actual Google Drive resume link
                target="_blank"
                rel="noopener noreferrer"
              >
                <RainbowButton className="text-sm px-4 py-1.5">
                  Resume
                </RainbowButton>
              </a>
            </div>
          </div>

          <button
            className={`md:hidden relative z-50 p-2 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
              isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              boxShadow: isMenuOpen
                ? "0 0 0 2px rgba(62, 64, 239, 0.3), 0 2px 8px rgba(62, 64, 239, 0.2)"
                : "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45" : "translate-y-[-4px]"
                  }`}
                ></span>

                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>

                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45" : "translate-y-[4px]"
                  }`}
                ></span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ zIndex: 45 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative ml-auto h-full w-4/5 max-w-sm bg-[#3E40EF] text-white flex flex-col overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-8 pt-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-white" />
                    <span className="font-display text-xl font-bold">
                      Anurag Adarsh
                    </span>
                  </div>
                  <div className="mt-2 h-0.5 w-12 bg-white/30 rounded-full"></div>
                </div>

                <nav className="flex flex-col space-y-1 py-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <button
                        onClick={() => {
                          toggleMenu();
                          scrollToSection(link.href.substring(1));
                        }}
                        className={`flex items-center py-3 px-4 text-lg font-medium rounded-lg transition-colors w-full text-left ${
                          activeSection === link.href.substring(1)
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Remove the old Resume button here */}
                {/* <div className="mt-40"> ... </div> */}

                <div className="mt-auto pt-6 border-t border-white/10">
                  {/* Resume button placed above social icons with margin */}
                  <div className="mb-6">
                    <a
                      href="https://drive.google.com/file/d/13sT38haaEyeer0A-SJeqAVRGsHEnaGC1/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhiteRainbowButton className="px-4 py-1.5 h-auto w-full">
                        Resume
                      </WhiteRainbowButton>
                    </a>
                  </div>
                  <div className="flex items-center justify-between mb-6 ">
                    <div className="flex space-x-10">
                      <a
                        href="https://www.linkedin.com/in/adarshanurag/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href="https://github.com/Anuragspace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://www.instagram.com/anurag__adarsh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      {/* Add Behance icon here */}
                      <a
                        href="https://www.behance.net/anuragadarsh1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Behance"
                      >
                        <BehanceIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm md:mb-0">
                    © {year} Anurag Adarsh • All rights reserved
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
