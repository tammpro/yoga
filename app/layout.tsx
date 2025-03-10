import './globals.css';
import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'YOGA STUDIO - 心と体の調和を育む',
  description: '極上の自分リセット・リラックス＆ダイエット',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${mplus.className} font-light bg-gradient-to-b from-pink-50 to-orange-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}