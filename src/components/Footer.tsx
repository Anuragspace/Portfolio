import React, { useState } from "react";
import { Linkedin, Instagram, Twitter, Github, Heart, Share2, ArrowUp, ExternalLink, Link, Globe as GlobeIcon } from "lucide-react";
import { Globe } from "@/features/shared/components/magic-ui/Globe";
import BubblingHearts from "./BubblingHearts";
import AnimatedWord from "./AnimatedWord";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  
  const handleHeartClick = () => {
    setIsHeartAnimating(true);
    setTimeout(() => setIsHeartAnimating(false), 2000);
  };
  
  const handleShareClick = () => {
    // Copy to clipboard and show tooltip
    navigator.clipboard.writeText("https://anuragadarsh.in");
    setShowShareTooltip(true);
    setTimeout(() => setShowShareTooltip(false), 3000);
  };
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];
  
  // Add this BehanceIcon component above Footer
  const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <title>Behance</title>
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.102.894.273 1.241.507.344.235.612.546.804.938.188.387.281.871.281 1.443 0 .619-.141 1.137-.421 1.551-.284.414-.7.753-1.255 1.014.756.214 1.311.601 1.663 1.164.35.558.527 1.235.527 2.031 0 .645-.106 1.202-.314 1.67-.211.47-.5.854-.878 1.154-.373.304-.835.527-1.374.671-.54.146-1.125.219-1.765.219H1V5.698h6.799zm-.351 4.832c.475 0 .87-.114 1.176-.344.305-.229.455-.544.455-.941 0-.296-.065-.539-.189-.727-.13-.187-.307-.333-.522-.436A2.419 2.419 0 0 0 7.75 7.95a5.167 5.167 0 0 0-.704-.052H3.629v2.632h3.819zm.162 5.031c.267 0 .523-.024.765-.072.243-.049.457-.122.637-.221.182-.097.328-.232.436-.406.12-.175.162-.384.162-.635 0-.501-.162-.868-.485-1.102-.324-.23-.764-.347-1.326-.347H3.629v2.783h3.981zm8.663-9.552h5.086v1.228h-5.086V6.009zm5.576 5.526c0 .709-.122 1.352-.368 1.935a4.413 4.413 0 0 1-1.031 1.515c-.44.43-.964.764-1.572 1.005a5.381 5.381 0 0 1-1.992.359c-.699 0-1.347-.119-1.949-.359a4.208 4.208 0 0 1-1.563-1.005c-.44-.427-.798-.897-1.075-1.402-.277-.505-.423-1.068-.432-1.691h2.621c.039.577.193 1.028.465 1.353.271.325.675.486 1.212.486.315 0 .586-.065.811-.197.227-.135.415-.317.566-.546.148-.228.256-.497.32-.804.065-.306.096-.628.096-.964 0-.33-.033-.647-.096-.951-.065-.306-.174-.578-.331-.811a1.684 1.684 0 0 0-.582-.546c-.233-.134-.515-.197-.851-.197-.36 0-.677.096-.946.29-.268.193-.456.435-.559.725h-2.5c.095-.74.323-1.37.684-1.891a4.411 4.411 0 0 1 1.265-1.343 5.273 5.273 0 0 1 1.679-.801 7.091 7.091 0 0 1 1.935-.264c.647 0 1.265.099 1.857.298.59.197 1.111.49 1.555.878.444.39.797.876 1.056 1.456.258.583.387 1.26.387 2.035z" />
      </svg>
  );
  
  const socialLinks = [
    { name: "Behance", icon: (props) => <FontAwesomeIcon icon={faBehance} {...props} />, href: "https://www.behance.net/anuragadarsh1" },
    { name: "Github", icon: (props) => <FaGithub {...props} />, href: "https://github.com/Anuragspace" },
    { name: "LinkedIn", icon: (props) => <IoLogoLinkedin {...props} />, href: "https://www.linkedin.com/in/adarshanurag/" },
    { name: "Instagram", icon: (props) => <RiInstagramFill {...props} />, href: "https://www.instagram.com/anurag__adarsh/" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const impactText = "Let's Design Experiences That Make an Impact! 🤝";
  const words = impactText.split(' ');

  return (
    <footer className="bg-white p-1 pb-1">
      <div className="rounded-3xl bg-[#3E40EF] text-white relative pt-20 pb-10 overflow-hidden mx-4 mb-4">
        {/* Go to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3E40EF] hover:bg-gray-100 transition-colors shadow-md"
          aria-label="Go to top"
        >
          <ArrowUp size={18} />
        </button>
        
        <div className="container-custom">
          {/* Main content section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
            {/* Left column - Text content */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <a href="#" className="text-2xl font-bold">
                  <span className="font-display">Anurag Adarsh</span>
                </a>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl flex flex-wrap gap-x-2">
                {words.map((word, index) => (
                  <AnimatedWord key={index} word={word} />
                ))}
              </h2>
              
              <div className="flex flex-wrap gap-4 pb-12">
                <a 
                  href="/#contact"
                  className="inline-flex items-center justify-center w-36 px-5 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
                >
                  Let's Talk <ArrowUp className="ml-2 rotate-45" size={16} />
                </a>
                
                <div className="relative">
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Anurag Adarsh Portfolio',
                          text: 'Check out my portfolio showcasing UI/UX design work',
                          url: 'https://anuragadarsh.in',
                        })
                        .catch(err => {
                          console.error('Share failed:', err);
                          // Fallback to copy to clipboard
                          handleShareClick();
                        });
                      } else {
                        // Fallback to copy to clipboard
                        handleShareClick();
                      }
                    }}
                    className="inline-flex items-center justify-center w-40 px-5 py-2.5 rounded-full bg-white/10 text-sm text-white hover:bg-white/20 transition-colors"
                  >
                    <Share2 size={16} className="mr-2" />
                    <span className="whitespace-nowrap">Share Portfolio</span>
                  </button>
                  
                  {/* Tooltip for share confirmation */}
                  {showShareTooltip && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-2 px-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-1">
                        <GlobeIcon size={12} />
                        <span>anuragadarsh.in copied!</span>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Social links with improved design */}
              <div className="flex flex-wrap gap-4 pt-12">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm shadow-sm hover:shadow-md backdrop-blur-sm"
                    aria-label={social.name}
                  >
                    <span className="mr-2">
                      {social.icon({ size: 20 })}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right column - Globe */}
            <div className="md:col-span-5 flex justify-center md:justify-end items-center">
              <div className="relative h-[300px] w-[300px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="scale-[1.2]" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section with copyright and made with love */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80 text-sm mb-4 md:mb-0">
                © {year} Anurag Adarsh • All rights reserved
              </p>
              
              <div 
                className="text-sm text-white/80 flex items-center cursor-pointer group"
                onClick={handleHeartClick}
              >
                Made with 
                <span className="inline-block mx-1.5 relative">
                  <Heart 
                    size={18} 
                    className={`text-red-500 fill-red-500 transition-all duration-300 ${isHeartAnimating ? 'scale-150' : 'group-hover:scale-125'}`} 
                  />
                  {/* Bubbling hearts animation */}
                  <BubblingHearts isAnimating={isHeartAnimating} />
                </span> 
                by Anurag
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
