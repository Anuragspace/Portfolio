
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Define longestWord to set fixed width
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

  useEffect(() => {
    // Only set up the interval if the component is visible in the UI
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration, isVisible]);

  // Use effect to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.querySelector('.word-rotate-container');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="word-rotate-container overflow-hidden py-1 relative" style={{ minWidth: `${longestWord.length}ch` }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn(className, "absolute left-0")}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0">{longestWord}</span>
    </div>
  );
}
