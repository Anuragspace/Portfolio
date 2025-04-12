
"use client";

import { motion, MotionValue, useScroll, useTransform, useInView } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  direction?: "left-to-right" | "right-to-left";
  lineByLine?: boolean;
  earlierStart?: boolean; 
}

export const TextReveal: FC<TextRevealProps> = ({ 
  children, 
  className, 
  direction = "left-to-right",
  lineByLine = true,
  earlierStart = false
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef, { 
    once: false, 
    margin: earlierStart ? "0px 0px -20% 0px" : "0px 0px -10% 0px",
    amount: 0.1
  });
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: earlierStart ? ["start 90%", "start 35%"] : ["start 80%", "start 25%"],
  });
  
  const [lineGroups, setLineGroups] = useState<string[][]>([]);
  const [containerWidth, setContainerWidth] = useState(0);
  
  // Width detection for better line breaks
  useEffect(() => {
    if (!targetRef.current) return;
    
    const updateWidth = () => {
      if (targetRef.current) {
        setContainerWidth(targetRef.current.offsetWidth);
      }
    };
    
    // Initial measurement
    updateWidth();
    
    // Update on resize
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  // Create line groups based on container width for natural text flow
  useEffect(() => {
    if (!containerWidth || !children) return;
    
    const words = children.split(/\s+/);
    const testDiv = document.createElement('div');
    testDiv.style.position = 'absolute';
    testDiv.style.visibility = 'hidden';
    testDiv.style.width = `${containerWidth}px`;
    testDiv.style.fontSize = window.innerWidth < 768 ? '1.5rem' : '1.875rem'; // text-2xl/text-3xl
    testDiv.style.fontWeight = 'bold';
    testDiv.style.whiteSpace = 'normal';
    testDiv.style.wordBreak = 'break-word';
    document.body.appendChild(testDiv);
    
    const lines: string[][] = [[]];
    let currentLine = 0;
    
    // Measure each word to determine line breaks
    words.forEach((word) => {
      testDiv.textContent = [...lines[currentLine], word].join(' ');
      
      // If the content overflows, create a new line
      if (testDiv.scrollWidth > containerWidth && lines[currentLine].length > 0) {
        currentLine++;
        lines[currentLine] = [word];
      } else {
        lines[currentLine].push(word);
      }
    });
    
    document.body.removeChild(testDiv);
    setLineGroups(lines);
  }, [children, containerWidth]);
  
  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  return (
    <div 
      ref={targetRef} 
      className={cn("relative z-0 overflow-hidden w-full", className)}
    >
      <div className="flex flex-col w-full text-2xl md:text-3xl lg:text-4xl font-bold">
        {lineGroups.map((lineWords, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap mb-1 w-full">
            {lineWords.map((word, wordIndex) => {
              // Calculate start and end positions for animation
              // Based on both line index and word position within the line
              let start, end;
              
              if (lineByLine) {
                const totalLines = lineGroups.length;
                // Line animation progress - each line gets a portion of the scroll range
                const lineStart = lineIndex / totalLines;
                const lineEnd = (lineIndex + 1) / totalLines;
                
                // Word animation progress within a line
                const wordInLinePercentage = wordIndex / lineWords.length;
                const wordDuration = (lineEnd - lineStart) * 0.8; // 80% of line duration
                
                // Ensure words animate left to right within their line
                start = lineStart + (wordInLinePercentage * wordDuration);
                end = start + (wordDuration / lineWords.length);
                
                // Clamp values to valid range
                start = Math.min(Math.max(0, start), 0.95);
                end = Math.min(Math.max(0.05, end), 1);
              } else {
                // All words animate sequentially regardless of line breaks
                const totalWords = lineGroups.reduce((sum, line) => sum + line.length, 0);
                const wordPosition = lineGroups.slice(0, lineIndex).reduce((sum, line) => sum + line.length, 0) + wordIndex;
                
                start = wordPosition / totalWords;
                end = (wordPosition + 1) / totalWords;
              }
              
              return (
                <Word 
                  key={`${lineIndex}-${wordIndex}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isInView={isInView}
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
  isInView: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isInView }) => {
  // Transform opacity with smoother transition - NO movement
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);
  
  return (
    <div className="relative mx-[0.25em] my-[0.1em] inline-block">
      {/* The static dim version that's always visible */}
      <span className="absolute opacity-20">{children}</span>
      
      {/* The animated version that fades in WITHOUT movement */}
      <motion.span
        style={{ 
          opacity, 
          color
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative font-semibold"
      >
        {children}
      </motion.span>
      
      {/* Add a space after each word */}
      &nbsp;
    </div>
  );
};

export default TextReveal;
