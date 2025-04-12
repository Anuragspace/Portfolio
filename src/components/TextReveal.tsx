
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  direction?: "left-to-right" | "right-to-left";
  lineByLine?: boolean;
  earlierStart?: boolean; // Simple flag for earlier animation start
}

export const TextReveal: FC<TextRevealProps> = ({ 
  children, 
  className, 
  direction = "left-to-right",
  lineByLine = true,
  earlierStart = false
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: earlierStart ? ["start 90%", "start 40%"] : ["start 80%", "start 30%"], // Earlier or standard trigger
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  // We'll use a progressive line-by-line reveal
  // First, split by breaking spaces or natural line breaks
  const lines = children.split(/\n/).map(line => line.trim());
  
  // Then concatenate and split into words
  const words = children.split(/\s+/);
  
  // This approach creates a more responsive estimate of words per line
  // based on viewport size and font size
  const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
  const estimatedWordsPerLine = Math.max(
    3, // Minimum 3 words per line
    Math.floor(Math.min(
      // Scale based on viewport width
      typeof window !== 'undefined' ? window.innerWidth / 25 : 15, 
      40
    ) / avgWordLength)
  );
  
  return (
    <div ref={targetRef} className={cn("relative z-0 overflow-hidden", className)}>
      <div 
        ref={containerRef}
        className="mx-auto flex flex-col bg-transparent w-full"
      >
        {/* Use a div with flex-wrap for natural text flow */}
        <div className="flex flex-wrap text-2xl md:text-3xl font-bold">
          {words.map((word, i) => {
            // Calculate position in the sequence with progressive reveal
            const lineIndex = Math.floor(i / estimatedWordsPerLine);
            const wordInLineIndex = i % estimatedWordsPerLine;
            
            // If we want line-by-line animation, base it on the line index
            // and the position of the word within that line
            let start, end;
            
            if (lineByLine) {
              // Line-by-line animation - each line reveals consecutively
              // Line progress starts at 0 and increases for each line
              const lineProgress = lineIndex * 0.3; // Each line takes 30% of the scroll
              // Words within a line reveal from left to right
              const wordProgress = wordInLineIndex / estimatedWordsPerLine * 0.3;
              
              // Combine line and word progress for smooth line-by-line, word-by-word animation
              start = lineProgress + wordProgress;
              end = start + 0.1; // Each word gets 10% of scroll to fully reveal
              
              // Ensure values stay within 0-1 range
              start = Math.min(Math.max(0, start), 0.9);
              end = Math.min(Math.max(0.1, end), 1);
            } else {
              // Simple sequential word-by-word animation
              start = i / words.length;
              end = start + 1 / words.length; // Each word gets an equal portion
            }
            
            return (
              <Word 
                key={i} 
                progress={scrollYProgress} 
                range={[Math.max(0, start), Math.min(1, end)]}
                direction={direction}
              >
                {word}
              </Word>
            );
          })}
        </div>
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
  isLastWordInLine?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, delay = 0, direction = "left-to-right", isLastWordInLine }) => {
  // Transform opacity with smoother transition
  const opacity = useTransform(progress, range, [0.15, 1]); 
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]); 
  
  // Use x-axis transform for left-to-right reveal effect
  const xTransform = useTransform(
    progress, 
    [range[0] - 0.05, range[0], range[1]],
    direction === "left-to-right" ? [-10, 0, 0] : [10, 0, 0]
  );
  
  return (
    <span className="relative mx-[0.25em] my-[0.1em] overflow-hidden whitespace-pre">
      {/* The static dim version that's always visible */}
      <span className="absolute opacity-20">{children}</span>
      
      {/* The animated version that fades in with slight movement */}
      <motion.span
        style={{ 
          opacity, 
          color,
          x: xTransform
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
        className="font-semibold inline-block"
      >
        {children}
      </motion.span>
      
      {/* Add a space after each word */}
      {" "}
    </span>
  );
};

export default TextReveal;
