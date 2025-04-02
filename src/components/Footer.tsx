
import React from "react";
import { Linkedin, Instagram, Twitter, Github, Heart, Share2 } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Github", icon: Github, href: "https://github.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          <div className="md:col-span-5 space-y-6">
            <div>
              <a href="#" className="text-2xl font-bold">
                <span className="font-display">Portfolio</span>
                <span className="text-accent">.</span>
              </a>
            </div>
            <p className="text-gray-400 max-w-md">
              Transforming ideas into exceptional digital experiences through thoughtful design and creative problem-solving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>New York, United States</li>
              <li>hello@example.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
            <button className="mt-6 px-4 py-2 border border-gray-700 rounded-lg text-sm flex items-center text-gray-300 hover:bg-gray-800 transition-colors">
              <Share2 size={16} className="mr-2" />
              Share this portfolio
            </button>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} Portfolio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Designed with <Heart size={14} className="mx-1 text-red-500" /> by Alex Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
