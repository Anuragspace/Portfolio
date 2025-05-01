
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';
import ProjectDetail from './features/projects/ProjectDetail';
import NotFound from './pages/NotFound';
import { logPageView } from './analytics';

// Analytics listener component with optimized rendering
function AnalyticsListener() {
  useEffect(() => {
    // Log page view on initial load and route changes
    logPageView();
    
    // Setup route change listener
    const handleRouteChange = () => {
      logPageView();
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return null;
}

function App() {
  // Apply base HTML attributes for dark mode
  useEffect(() => {
    // Add scroll-padding-top for better anchor navigation
    document.documentElement.style.setProperty('scroll-padding-top', '80px');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Router>
        <AnalyticsListener />
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
