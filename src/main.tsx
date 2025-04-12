import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/performance-optimizations.css'

// Add performance monitoring
const reportWebVitals = (metric: any) => {
  // You can send the metric to an analytics endpoint
  console.log(metric);
};

// Create root with concurrent mode for better performance
const root = createRoot(document.getElementById("root")!);

// Render with React 18 concurrent features
root.render(<App />);

// Optional: measure performance
// reportWebVitals();
