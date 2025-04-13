
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProblemSolutionProps {
  problem: string;
  solution: string;
  className?: string;
}

const ProblemSolution = ({
  problem,
  solution,
  className,
}: ProblemSolutionProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12", className)}>
      {/* Problem Card */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
            <span className="text-red-600 font-bold text-sm">❗</span>
          </div>
          <h3 className="text-xl font-bold">Problem</h3>
        </div>
        <p className="text-gray-700">{problem}</p>
      </motion.div>
      
      {/* Solution Card */}
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <span className="text-green-600 font-bold text-sm">✓</span>
          </div>
          <h3 className="text-xl font-bold">Solution</h3>
        </div>
        <p className="text-gray-700">{solution}</p>
      </motion.div>
    </div>
  );
};

export default ProblemSolution;
