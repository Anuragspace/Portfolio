
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/performance-optimizations.css'
import HomeButton from './components/HomeButton.tsx'

// Initialize performance monitoring
const root = createRoot(document.getElementById("root")!);

root.render(
  <>
    <App />
    <HomeButton />
  </>
);
