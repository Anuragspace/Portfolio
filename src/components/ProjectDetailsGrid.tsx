
import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProjectDetailsItem {
  label: string;
  value: string | string[];
  isLink?: boolean;
  linkUrl?: string;
}

interface ProjectDetailsGridProps {
  items: ProjectDetailsItem[];
  className?: string;
}

const ProjectDetailsGrid = ({ items, className }: ProjectDetailsGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="flex flex-col">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{item.label}</div>
            
            {Array.isArray(item.value) ? (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {item.value.map((val, i) => (
                  <span 
                    key={i}
                    className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {val}
                  </span>
                ))}
              </div>
            ) : item.isLink ? (
              <a 
                href={item.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#3E40EF] hover:underline font-medium"
              >
                <span>{item.value}</span>
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="font-medium text-gray-800">{item.value}</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectDetailsGrid;
