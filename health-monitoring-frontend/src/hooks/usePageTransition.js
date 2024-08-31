// src/usePageTransition.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoader } from './LoaderContext';

const usePageTransition = () => {
  const location = useLocation();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    hideLoader();
  }, [location, showLoader, hideLoader]);
};

export default usePageTransition;
