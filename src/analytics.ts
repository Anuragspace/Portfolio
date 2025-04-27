// src/analytics.ts
import ReactGA from 'react-ga4'; // Import react-ga4 library

// Initialize Google Analytics with your GA4 Measurement ID
ReactGA.initialize('G-QPEGV1GHKY');

// Function to log a page view to Google Analytics
export const logPageView = (): void => {
  ReactGA.send('pageview');  // Send the pageview event
};
