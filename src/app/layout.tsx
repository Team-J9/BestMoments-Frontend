import Provider from '@/components/Theme/Provider';
import './globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
