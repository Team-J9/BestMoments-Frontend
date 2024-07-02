import { ReactNode } from 'react';
import Provider from '@/components/Theme/Provider';
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
        <Provider>
          <Header />
          {children}
          <TransitionInitializer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
