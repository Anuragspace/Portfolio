
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectPageHeaderProps {
  className?: string;
}

const ProjectPageHeader = ({ className }: ProjectPageHeaderProps) => {
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 py-6 w-full", className)}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-medium text-lg relative z-10">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-black font-bold">A</span>
              </motion.div>
              <span className="hidden sm:inline-block">Anurag Adarsh</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <motion.div 
              className="hidden md:flex space-x-8 text-white/80"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Link to="/#about" className="hover:text-white transition-colors">About</Link>
              <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
              <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link to="/contact" className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectPageHeader;
