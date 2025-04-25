
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  once = false,
}: IntersectionObserverOptions = {}): [boolean, RefObject<T>] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const isElementIntersecting = entries[0].isIntersecting;
        
        setIsIntersecting(isElementIntersecting);
        
        if (once && isElementIntersecting && currentRef) {
          observerRef.current?.unobserve(currentRef);
        }
      },
      { root, rootMargin, threshold }
    );
    
    observerRef.current.observe(currentRef);
    
    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, once]);
  
  return [isIntersecting, ref];
}

export default useIntersectionObserver;
