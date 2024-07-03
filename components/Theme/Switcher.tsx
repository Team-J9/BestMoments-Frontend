'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="focus:outline-none">
      {theme === 'dark' ? (
        <FiMoon className="w-8 h-8 text-yellow-500 transition-transform transform rotate-40" />
      ) : (
        <FiSun className="w-8 h-8 text-yellow-500 transition-transform transform rotate-45" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
