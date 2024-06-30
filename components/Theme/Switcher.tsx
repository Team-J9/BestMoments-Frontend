'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Switcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>테마 변경</button>;
};

export default Switcher;
