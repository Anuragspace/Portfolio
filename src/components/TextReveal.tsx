
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, memo, useContext, createContext, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Create a context to track line index
interface RevealContextType {
  lineIndex: number;
  totalLines: number;
}

const RevealContext = createContext<RevealContextType>({ lineIndex: 0, totalLines: 1 });

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  lineIndex?: number;
  totalLines?: number;
}

export const TextReveal: FC<TextRevealProps> = memo(({ 
  children, 
  className,
  lineIndex = 0,
  totalLines = 1
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.3"], // Adjusted for smoother reveal
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <RevealContext.Provider value={{ lineIndex, totalLines }}>
      <div ref={targetRef} className={cn("relative z-0 w-full", className)}>
        <div className="w-full flex flex-wrap bg-transparent">
          {words.map((word, i) => {
            const startBase = lineIndex / totalLines; 
            const endBase = (lineIndex + 1) / totalLines;
            const segmentSize = (endBase - startBase) / words.length;
            
            // Adjust timing for smoother, gradual word-by-word reveal
            const start = Math.max(0, startBase + (i * segmentSize * 0.8));
            const end = Math.min(1, start + (segmentSize * 1.2));
            
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </RevealContext.Provider>
  );
});

TextReveal.displayName = "TextReveal";

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = memo(({ children, progress, range }) => {
  // Smoother transitions with better contrast
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);
  const y = useTransform(progress, range, [8, 0]); // Subtle upward movement

  return (
    <span className="relative mx-[3px] md:mx-2 inline-flex">
      <motion.span
        style={{ opacity, color, y }}
        className="font-semibold whitespace-pre text-xl md:text-2xl lg:text-3xl"
      >
        {children}{" "}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export default TextReveal;
