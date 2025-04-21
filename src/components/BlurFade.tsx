
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
} from "framer-motion";
import { useRef, memo } from "react";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export const BlurFade = memo(({
  children,
  className,
  variant,
  duration = 0.25,
  delay = 0,
  offset = 5, // Reduced offset for subtler animation
  direction = "down",
  inView = false,
  inViewMargin = "-5%", // More aggressive threshold
  ...props
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { 
    once: true, 
    margin: inViewMargin,
    amount: 0.1 // Only need to see 10% of the element
  });
  const isInView = !inView || inViewResult;
  
  // Simplified variants without filter transformations for better performance
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
    },
  };
  
  const combinedVariants = variant || defaultVariants;
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          type: "tween", // Changed from spring to tween for lighter animation
          delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
});

BlurFade.displayName = "BlurFade";
