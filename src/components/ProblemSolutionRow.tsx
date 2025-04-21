
import React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { Asterisk, Circle } from "lucide-react";

interface ProblemSolutionRowProps {
  problem: string;
  solution: string;
  className?: string;
}

const ProblemSolutionRow = ({
  problem,
  solution,
  className,
}: ProblemSolutionRowProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-16">
        {/* Problem Column */}
        <div className="flex flex-col">
          <m.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <m.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="mr-3 text-[#3E40EF]"
            >
              <Asterisk size={20} />
            </m.div>
            <h3 className="text-xl font-medium uppercase tracking-wider text-gray-500 font-manrope">problem</h3>
          </m.div>
          <m.p 
            className="text-lg text-gray-800 font-manrope"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {problem}
          </m.p>
        </div>
        
        {/* Separator for mobile */}
        <div className="h-px w-full bg-gray-200 md:hidden my-6"></div>
        
        {/* Solution Column with circular icon */}
        <div className="flex flex-col">
          <m.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <m.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="mr-3 text-[#3E40EF]"
            >
              <Circle size={20} className="stroke-current" />
            </m.div>
            <h3 className="text-xl font-medium uppercase tracking-wider text-gray-500 font-manrope">solution</h3>
          </m.div>
          <m.p 
            className="text-lg text-gray-800 font-manrope"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {solution}
          </m.p>
        </div>
      </div>
      
      {/* Horizontal line separator for desktop */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-200"></div>
      
      {/* Vertical line separator for desktop */}
      <div className="hidden md:block absolute top-8 bottom-0 left-1/2 -ml-px w-px bg-gray-200"></div>
    </div>
  );
};

export default ProblemSolutionRow;
