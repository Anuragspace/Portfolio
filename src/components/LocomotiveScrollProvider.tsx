
import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export const LocomotiveScrollContext = React.createContext<{
  scroll: LocomotiveScroll | null;
}>({
  scroll: null,
});

const LocomotiveScrollProvider: React.FC<LocomotiveScrollProviderProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize locomotive scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smoothMobile: false,
      multiplier: 1.0,
      lerp: 0.09, // Lower values make scrolling smoother but slower
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
    });

    setScroll(locomotiveScroll);

    // Update scroll on window resize
    const handleResize = () => {
      locomotiveScroll.update();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll }}>
      <div 
        className="viewport" 
        data-scroll-container 
        ref={containerRef}
      >
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  );
};

export default LocomotiveScrollProvider;
