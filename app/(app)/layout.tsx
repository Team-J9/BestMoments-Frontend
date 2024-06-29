import { ReactNode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Provider from '../components/Theme/Provider';
import Header from '../components/common/Header';
import './globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="ko">
      <body>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
          <Provider>
            <Header />
            {children}
          </Provider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
