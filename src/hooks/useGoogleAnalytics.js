import { useEffect } from 'react';
import { gtag } from '../utils/gtag';

const TRACKING_ID = 'G-V8VMDDG604'; // Your tracking ID

const useGoogleAnalytics = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) {
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
    script.async = true;
    
    // Add script to document
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Initialize gtag
    gtag('js', new Date());
    gtag('config', TRACKING_ID, {
      send_page_view: true,
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title
    });

    // Debug logs
    console.log('Google Analytics initialized with ID:', TRACKING_ID);
    console.log('Current page path:', window.location.pathname);

    // Optional: Track initial pageview
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    return () => {
      // Cleanup if needed
      const scriptToRemove = document.querySelector(`script[src*="googletagmanager.com/gtag"]`);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);
};

export default useGoogleAnalytics;