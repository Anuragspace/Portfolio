
import { ReactNode, useEffect, createContext, useContext, useState } from 'react';
import Lenis from '@studio-freight/lenis';

type SmoothScrollContextType = {
  lenis: Lenis | null;
};

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
  };
}

export const LenisProvider = ({ 
  children,
  options = {
    duration: 1.5,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.2,
    touchMultiplier: 1.5,
  }
}: LenisProviderProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Hide scrollbar with CSS
    document.documentElement.style.scrollbarWidth = 'none'; // Firefox
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        display: none;
      }
      html, body {
        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow-y: auto;
      }
    `;
    document.head.appendChild(style);

    // Initialize Lenis with correctly typed options
    const lenisInstance = new Lenis({
      duration: options.duration,
      easing: options.easing,
      wheelMultiplier: options.wheelMultiplier,
      touchMultiplier: options.touchMultiplier,
      smoothWheel: options.smoothWheel,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      document.head.removeChild(style);
      document.documentElement.style.scrollbarWidth = '';
      document.body.style.overflow = '';
    };
  }, [options.duration, options.easing, options.smoothWheel, options.wheelMultiplier, options.touchMultiplier]); 

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
