
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
    smoothTouch?: boolean;
  };
}

export const LenisProvider = ({ 
  children,
  options = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    smoothTouch: false,
  }
}: LenisProviderProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Hide scrollbar with CSS
    document.documentElement.style.scrollbarWidth = 'none'; // Firefox
    document.documentElement.style.msOverflowStyle = 'none'; // IE/Edge
    document.body.style.overflow = 'auto';
    const style = document.createElement('style');
    style.textContent = `
      body::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: options.duration,
      easing: options.easing,
      smoothWheel: options.smoothWheel,
      wheelMultiplier: options.wheelMultiplier,
      touchMultiplier: options.touchMultiplier,
      smoothTouch: options.smoothTouch,
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
      document.documentElement.style.msOverflowStyle = '';
      document.body.style.overflow = '';
    };
  }, [options]);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
