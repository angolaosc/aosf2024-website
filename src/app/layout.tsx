import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins-font',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Angola Open-Source Fest 2024',
  description: 'This is the offical Angola Open-Source Fest 2024 website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} ${inter.className}`}>{children}</body>
    </html>
  );
}
