import Provider from '../components/Theme/Provider';
import '../(app)/globals.css';

export const metadata = {
  title: 'BestMoments Share Page',
  description: 'BestMoments Share Page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
