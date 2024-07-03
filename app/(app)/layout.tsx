import { ReactNode } from 'react';
import ThemeProvider from '@/components/Theme/Provider';
import Header from '@/components/common/Header';
import './globals.css';
import TransitionInitializer from '@/app/TransitionInitializer';
import Footer from '@/components/common/Footer';

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
      <body>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <TransitionInitializer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
