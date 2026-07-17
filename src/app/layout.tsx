import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'iQOO Neo 7 — Power Beyond Limits',
  description:
    'Experience the iQOO Neo 7 — powered by MediaTek Dimensity 8200, 120Hz AMOLED display, 120W FlashCharge, 64MP OIS camera, and advanced vapor chamber cooling. Flagship performance for gamers, creators, and power users.',
  keywords: [
    'iQOO Neo 7',
    'iQOO',
    'Neo 7',
    'Dimensity 8200',
    '120Hz AMOLED',
    '120W FlashCharge',
    '5000mAh',
    '64MP OIS',
    'gaming phone',
    'flagship killer',
    'smartphone',
    '5G phone',
  ],
  openGraph: {
    title: 'iQOO Neo 7 — Power Beyond Limits',
    description:
      'Flagship performance engineered for gamers, creators, and everyday power users. Dimensity 8200 · 120Hz AMOLED · 120W FlashCharge · 64MP OIS Camera.',
    type: 'website',
    locale: 'en_US',
    siteName: 'iQOO Neo 7',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iQOO Neo 7 — Power Beyond Limits',
    description:
      'Flagship performance engineered for gamers, creators, and everyday power users.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#050505] text-white antialiased font-sans">
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="min-h-screen">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
