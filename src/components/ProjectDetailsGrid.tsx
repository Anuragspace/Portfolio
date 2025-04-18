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
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="flex flex-col">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-manrope">{item.label}</div>
            
            {Array.isArray(item.value) ? (
              <div className="flex flex-wrap gap-3">
                {item.value.map((val, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
                    {val.icon}
                    <span className="text-gray-800 font-medium">{val.name}</span>
                  </div>
                ))}
              </div>
            ) : item.isLink ? (
              <a 
                href={item.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3E40EF] text-white rounded hover:bg-[#3E40EF]/90 transition-colors"
              >
                <span>{item.value}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="text-xl font-medium text-gray-800">{item.value}</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectDetailsGrid;
