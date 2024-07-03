import ThemeProvider from '@/components/Theme/Provider';
import '@/app/(app)/globals.css';
import TransitionInitializer from '@/app/TransitionInitializer';

export const metadata = {
  title: 'BestMoments Share Page',
  description: 'BestMoments Share Page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body>
        <ThemeProvider>
          {children}
          <TransitionInitializer />
        </ThemeProvider>
      </body>
    </html>
  );
}
