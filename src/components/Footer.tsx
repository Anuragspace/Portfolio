
import React, { useState } from "react";
import { Linkedin, Instagram, Twitter, Github, Heart, Share2, ArrowUp, Dribbble, ExternalLink } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  
  const handleHeartClick = () => {
    setIsHeartAnimating(true);
    setTimeout(() => setIsHeartAnimating(false), 1000);
  };
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];
  
  // Replace Behance with Github as a workaround
  const socialLinks = [
    { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com" },
    { name: "Github", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#3E40EF] text-white min-h-[50vh] relative pt-20 pb-10">
      {/* Go to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3E40EF] hover:bg-gray-100 transition-colors shadow-md"
        aria-label="Go to top"
      >
        <ArrowUp size={18} />
      </button>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-1 pb-20">
          <div className="md:col-span-12 space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <a href="#" className="text-2xl font-bold">
                <span className="font-display">Anurag Adarsh</span>
              </a>
              
              <div className="flex flex-col items-end mt-2 md:mt-0">
                {/* Made with love text - larger font */}
                <div 
                  className="text-sm md:text-base text-white/80 flex items-center cursor-pointer group"
                  onClick={handleHeartClick}
                >
                  Made with 
                  <span className="inline-block mx-1.5 relative">
                    <Heart 
                      size={18} 
                      className={`text-red-400 fill-red-400 transition-all duration-300 ${isHeartAnimating ? 'scale-150' : 'group-hover:scale-125'}`} 
                    />
                  </span> 
                  by Anurag
                </div>
                
                {/* Share Portfolio button directly below Made with love */}
                <button className="px-4 py-3 rounded-full bg-white/10 text-sm flex items-center text-white hover:bg-white/20 transition-colors mt-5">
                  <Share2 size={16} className="mr-2" />
                  Share Portfolio
                </button>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
              Let's Design Experiences That Make an Impact! <span className="text-yellow-300">👍</span>
            </h2>
            
            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
              >
                Let's Talk <ArrowUp className="ml-2 rotate-45" size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-white/80 text-sm mb-6 md:mb-0">
              © 2025 Anurag Adarsh • All rights reserved
            </p>
            
            <div className="flex flex-wrap gap-5 mb-6 md:mb-0">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-sm"
                  aria-label={social.name}
                >
                  <social.icon size={16} className="mr-2" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
