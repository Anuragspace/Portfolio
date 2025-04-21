
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetail from './features/projects/ProjectDetail';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';
import { useLenisScroll } from './hooks/use-lenis-scroll';
import { useEffect } from 'react';

function App() {
  // Initialize Lenis with performance optimizations
  const lenis = useLenisScroll({
    options: {
      // Lower values for better performance, still smooth
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothTouch: false,
    }
  });

  // Sync lenis with any internal scroll events
  useEffect(() => {
    if (lenis.current) {
      // Making lenis available globally for other components to use
      window.scrollTo = (options) => {
        lenis.current?.scrollTo(options, { immediate: true });
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
