import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetail from './features/projects/ProjectDetail';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';
import { logPageView } from './analytics';
import { useEffect } from 'react';
import CustomCursor from "./components/CustomCursor";

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
      <CustomCursor />
      <ThemeProvider attribute="class" defaultTheme="light">
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
    </>
  );
}

export default App;
