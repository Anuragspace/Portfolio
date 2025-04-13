"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, memo, useContext, createContext } from "react";
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
    offset: ["start 0.9", "start 0.4"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <RevealContext.Provider value={{ lineIndex, totalLines }}>
      <div ref={targetRef} className={cn("relative z-0 w-full", className)}>
        <div className="w-full flex items-center bg-transparent">
          <span className="flex flex-wrap text-2xl md:text-3xl font-bold text-gray-400 w-full">
            {words.map((word, i) => {
              // Calculate start and end based on word position and lineIndex
              const wordCount = words.length;
              
              // Adjust overlap for smoother animation between lines
              // Use shallower curve for line transitions to make it more synchronized
              // Start with line index, but ensure all lines progress more closely together
              const lineProgress = lineIndex / (totalLines * 1.2);
              
              // Calculate base animation timing based on synchronized line progress
              const wordPosition = i / wordCount;
              
              // Ensure words within a line animate closely together but maintain sequence
              // Each word starts when the previous is ~40% complete for better visual flow
              const start = lineProgress + (wordPosition * 0.05); 
              const end = start + 0.08; // Shorter completion time for smoother transitions
              
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
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
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#000000"]);

  return (
    <span className="relative mx-1 whitespace-normal break-words">
      <motion.span
        style={{ opacity, color }}
        className="font-semibold"
      >
        {children}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export default TextReveal;
