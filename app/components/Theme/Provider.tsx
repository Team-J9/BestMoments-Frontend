'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class">
      {children}
    </NextThemesProvider>
  );
};

export default Provider;
