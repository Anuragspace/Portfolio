
import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/RainbowButton";

export interface ProjectDetailsItem {
  label: string;
  value: string | string[];
  isLink?: boolean;
  linkUrl?: string;
}

interface ProjectDetailsListProps {
  items: ProjectDetailsItem[];
  className?: string;
}

const ProjectDetailsList = ({ items, className }: ProjectDetailsListProps) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <h3 className="text-[#3E40EF] text-sm font-medium mb-2">{item.label}</h3>
          
          {Array.isArray(item.value) ? (
            <div className="flex flex-wrap gap-2">
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
            <div className="mt-3">
              <RainbowButton className="w-full">
                <a 
                  href={item.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-sm"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </RainbowButton>
            </div>
          ) : (
            <p className="font-semibold text-gray-800">{item.value}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectDetailsList;
