"use client";

import { motion, MotionValue, useScroll, useTransform, stagger } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<string[][]>([]);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.5"], // Adjusted for faster animation
  });

  useEffect(() => {
    if (typeof children !== "string") {
      throw new Error("TextReveal: children must be a string");
    }

    // Calculate line breaks for responsive design
    // For simplicity here we'll assume breaks at ~40 chars for mobile, ~60 for desktop
    const words = children.split(" ");
    const mobileBreakpoint = window.innerWidth < 768 ? 4 : 7; // words per line
    
    const newLines: string[][] = [];
    let currentLine: string[] = [];
    
    words.forEach((word) => {
      currentLine.push(word);
      if (currentLine.length >= mobileBreakpoint) {
        newLines.push([...currentLine]);
        currentLine = [];
      }
    });
    
    if (currentLine.length > 0) {
      newLines.push(currentLine);
    }
    
    setLines(newLines);
  }, [children]);

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className="mx-auto flex flex-col bg-transparent">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap mb-1">
            {line.map((word, wordIndex) => {
              // Calculate animation sequence based on position in the text
              // Words appear from left to right, line by line
              const position = lineIndex * 10 + wordIndex;
              const totalWords = lines.reduce((acc, line) => acc + line.length, 0);
              const start = position / totalWords;
              const end = start + (1 / totalWords) * 1.5; // Slightly overlap for smoother effect
              
              return (
                <Word 
                  key={`${lineIndex}-${wordIndex}`} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                  delay={wordIndex * 0.05}
                >
                  {word}
                </Word>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  delay: number;
}

const Word: FC<WordProps> = ({ children, progress, range, delay }) => {
  const opacity = useTransform(progress, range, [0.2, 1]); 
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);
  const x = useTransform(progress, range, [-20, 0]); // Move from left to right

  return (
    <span className="relative mx-1 overflow-hidden">
      <motion.span
        style={{ opacity, color, x, display: "inline-block" }}
        transition={{ delay, duration: 0.5 }}
        className="font-semibold transition-all duration-500"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
