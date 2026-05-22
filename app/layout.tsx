import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Benjamín López | Software Developer +1 año de experiencia.',
  description:
    'Software Developer especializado en Node.js, Next, React, microservicios y cloud, +1 año construyendo soluciones escalables.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
