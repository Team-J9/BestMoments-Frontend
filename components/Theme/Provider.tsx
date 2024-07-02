'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
};

export default Provider;
