
import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface UseSmoothScrollOptions {
  selector?: string;
  lerp?: number; // Linear interpolation factor (0-1)
  smooth?: boolean;
  smartphone?: { smooth?: boolean };
  tablet?: { smooth?: boolean };
  reloadOnContextChange?: boolean;
}

export const useSmoothScroll = ({
  selector = '[data-scroll-container]',
  lerp = 0.09,
  smooth = true,
  smartphone = { smooth: false },
  tablet = { smooth: false },
  reloadOnContextChange = true,
}: UseSmoothScrollOptions = {}) => {
  const locomotiveScrollRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!locomotiveScrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: document.querySelector(selector) as HTMLElement,
        lerp, // Lower = smoother
        smooth,
        smartphone,
        tablet,
        class: 'is-revealed'
      });

      // Set scroll to ready once initialized
      locomotiveScrollRef.current.on('call', (func: string) => {
        if (func === 'initSmoothScroll') {
          setIsReady(true);
        }
      });

      window.locomotiveScroll = locomotiveScrollRef.current;
    }

    // Clean up locomotive scroll
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
        setIsReady(false);
      }
    };
  }, []); // Run only on initial mount

  // Method to update locomotive scroll
  const update = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  };

  // Method to scroll to a specific element
  const scrollTo = (target: string | HTMLElement, options = {}) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(target, {
        offset: -80, // Adjust for header height
        duration: 1500, // Longer, smoother animation
        easing: [0.25, 0.0, 0.35, 1.0], // Cubic bezier for smooth acceleration/deceleration
        ...options
      });
    }
  };

  return { scroll: locomotiveScrollRef.current, update, scrollTo, isReady };
};
