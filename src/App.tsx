import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import { ThemeProvider } from 'next-themes';
import { logPageView } from './analytics';
import { useEffect, lazy, Suspense } from 'react';

import SmoothScroll from './components/SmoothScroll';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const UniDeals = lazy(() => import('./pages/projects/UniDeals'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return null;
}

// Move useLocation and logPageView into a separate component
function AnalyticsListener() {
  const location = useLocation();
  useEffect(() => {
    logPageView();
  }, [location]);
  return null;
}

function App() {
  return (
    <>
      <SmoothScroll />
      <ThemeProvider attribute="class" defaultTheme="light">
        <Router>
          <ScrollToTop />
          <AnalyticsListener />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-white text-gray-400">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/projects/unideals" element={<UniDeals />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
