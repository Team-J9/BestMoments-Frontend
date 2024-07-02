'use client';

import { useEffect } from 'react';

const TransitionInitializer = () => {
  useEffect(() => {
    document.body.classList.add('transition');
  }, []);

  return null;
};

export default TransitionInitializer;
