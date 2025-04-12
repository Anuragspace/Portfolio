
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
  LazyMotion, 
  domAnimation
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
  duration = 0.3, // Shorter duration for better performance
  delay = 0,
  offset = 8, // Reduced offset
  direction = "down",
  inView = false,
  inViewMargin = "-10%", // More aggressive threshold
  blur = "4px", // Less blur for better performance
  ...props
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { 
    once: true, 
    margin: inViewMargin,
    amount: 0.2 // Only need to see 20% of the element
  });
  const isInView = !inView || inViewResult;
  
  // Simpler variants without blur for better performance
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
    <LazyMotion features={domAnimation}> {/* Load animations only when needed */}
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          variants={combinedVariants}
          transition={{
            delay: 0.02 + delay, // Shorter delay
            duration,
            ease: "easeOut",
          }}
          className={className}
          {...props}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  );
});

BlurFade.displayName = "BlurFade";
