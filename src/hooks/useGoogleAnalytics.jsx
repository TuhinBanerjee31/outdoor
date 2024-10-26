import { useEffect } from 'react';

const useGoogleAnalytics = () => {
  useEffect(() => {
    try {
      // Load the Google Analytics script
      const script1 = document.createElement('script');
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-V8VMDDG604';
      script1.async = true;
      document.head.appendChild(script1);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-V8VMDDG604');

      // Cleanup function
      return () => {
        document.head.removeChild(script1);
      };
    } catch (error) {
      console.error('Error loading Google Analytics:', error);
    }
  }, []); // Empty dependency array means this runs once on mount
};

export default useGoogleAnalytics;