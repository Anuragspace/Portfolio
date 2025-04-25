
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetail from './features/projects/ProjectDetail';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
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
