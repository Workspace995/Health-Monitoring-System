// src/usePageTransition.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTransition = (showLoader) => {
  const location = useLocation();

  useEffect(() => {
    showLoader(true);
    const timer = setTimeout(() => {
      showLoader(false);
    }, 1000); // Adjust the timeout as needed

    return () => {
      clearTimeout(timer);
    };
  }, [location, showLoader]);
};

export default usePageTransition;
