import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Joshua P. Smith for Council | Township of St. Joseph',
  description:
    'Joshua P. Smith is running for Council in the Township of St. Joseph. Rooted in our community and ready to serve.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
