
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/performance-optimizations.css'
import HomeButton from './components/HomeButton.tsx'
import { initPerformanceOptimizations } from './perf-optimizations.ts'

// Initialize performance optimizations
initPerformanceOptimizations();

const root = createRoot(document.getElementById("root")!);

root.render(
  <>
    <App />
    <HomeButton />
  </>
);
