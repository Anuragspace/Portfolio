"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  direction?: "left-to-right" | "right-to-left";
  lineByLine?: boolean;
}

export const TextReveal: FC<TextRevealProps> = ({ 
  children, 
  className, 
  direction = "left-to-right",
  lineByLine = true
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.5"], // Adjusted for better visibility
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  // Split the text by lines for mobile and desktop separately
  const lines = children.split(/\n/);
  
  return (
    <div ref={targetRef} className={cn("relative z-0 overflow-hidden", className)}>
      <div className="mx-auto flex flex-col bg-transparent">
        {lines.map((line, lineIndex) => {
          const words = line.trim().split(" ");
          // Calculate delay based on line number for line-by-line animation
          const lineDelay = lineByLine ? lineIndex * 0.1 : 0;
          
          return (
            <div 
              key={lineIndex} 
              className="flex flex-wrap items-start text-2xl md:text-3xl font-bold overflow-hidden"
            >
              {words.map((word, i) => {
                // Calculate progression range differently based on direction
                let start, end;
                
                if (lineByLine) {
                  // If animating line by line, use a percentage of the line for each word
                  const wordCountInLine = words.length;
                  
                  if (direction === "left-to-right") {
                    start = i / wordCountInLine;
                    end = start + 1.5 / wordCountInLine;
                  } else {
                    // Right to left animation
                    start = 1 - (i / wordCountInLine);
                    end = start - 1.5 / wordCountInLine;
                  }
                } else {
                  // If not line by line, use a percentage of all words
                  const totalWords = lines.reduce((acc, line) => acc + line.split(" ").length, 0);
                  const wordIndexGlobal = lines.slice(0, lineIndex).reduce(
                    (acc, line) => acc + line.split(" ").length, 0
                  ) + i;
                  
                  start = wordIndexGlobal / totalWords;
                  end = start + 1 / totalWords;
                }
                
                return (
                  <Word 
                    key={`${lineIndex}-${i}`} 
                    progress={scrollYProgress} 
                    range={[start, end]}
                    delay={lineDelay}
                    direction={direction}
                  >
                    {word}
                  </Word>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  delay?: number;
  direction?: "left-to-right" | "right-to-left";
}

const Word: FC<WordProps> = ({ children, progress, range, delay = 0, direction = "left-to-right" }) => {
  const opacity = useTransform(progress, range, [0.15, 1]); // Fade-in effect with lower initial opacity
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]); // Light gray to black
  
  // Calculate x-transform based on direction
  const xInitial = direction === "left-to-right" ? -20 : 20;
  const x = useTransform(progress, range, [xInitial, 0]);

  return (
    <span className="relative mx-1 overflow-hidden">
      <motion.span
        style={{ 
          opacity, 
          color, 
          x
        }}
        transition={{
          delay: delay,
          duration: 0.5
        }}
        className="font-semibold inline-block transition-colors duration-500"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
