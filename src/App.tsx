import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetail from './features/projects/ProjectDetail';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';
import { useLenisScroll } from './hooks/use-lenis-scroll';
import { useEffect } from 'react';

function App() {
  // Initialize Lenis with simpler options for better performance
  const lenis = useLenisScroll({
    options: {
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 0.8, // Less aggressive wheel multiplier
      touchMultiplier: 1.5,
      smoothTouch: false, // Disable on touch for better performance
    }
  });

  // Make scrollTo available globally but in a more reliable way
  useEffect(() => {
    if (lenis.current) {
      const originalScrollTo = window.scrollTo;
      
      // Override scrollTo but keep reference to original
      window.scrollTo = function() {
        if (lenis.current && arguments.length) {
          if (typeof arguments[0] === 'number') {
            lenis.current.scrollTo(arguments[0], { 
              offset: arguments[1] || 0,
              immediate: false,
              duration: 1.0
            });
          } else if (typeof arguments[0] === 'object') {
            lenis.current.scrollTo(arguments[0].top || 0, { 
              immediate: false,
              duration: 1.0
            });
          }
          return;
        }
        // Fallback to original scrollTo if lenis isn't available
        return originalScrollTo.apply(window, arguments as unknown as [number, number]);
      };
    }
  }, [lenis]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
