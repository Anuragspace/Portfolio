import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WordRotate } from "@/components/WordRotate";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface ProjectPageHeaderProps {
  className?: string;
}

const ProjectPageHeader = ({ className }: ProjectPageHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 w-full transition-all duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isVisible && "bg-white/30 backdrop-blur-sm border-b border-gray-100",
        className
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo with WordRotate */}
          <Link to="/" className="text-black font-medium text-lg relative z-10">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-8 h-8 rounded-full bg-[#3E40EF] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </motion.div>
              <div className="flex items-center">
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
              </div>
            </div>
          </Link>

          {/* Get in Touch button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link 
              to="/#contact" 
              className="flex items-center whitespace-nowrap gap-1.5 px-5 py-2.5 bg-[#3E40EF] text-white rounded-full hover:bg-[#3E40EF]/90 transition-all text-base font-medium"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4 rotate-45" />
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default ProjectPageHeader;
