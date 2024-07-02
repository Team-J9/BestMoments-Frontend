import { ReactNode } from 'react';
import ThemeProvider from '@/components/Theme/Provider';
import Header from '@/components/common/Header';
import './globals.css';
import TransitionInitializer from '@/app/TransitionInitializer';

export const metadata = {
  title: 'BestMoments',
  description: 'BestMonents MainPage',
  icons: {
    icon: '/logo.png',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className="prose dark:prose-invert">
        <ThemeProvider>
          <Header />
          {children}
          <TransitionInitializer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
