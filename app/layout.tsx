import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://joshpaulsmith.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'joshpaulsmith.com',
  description: 'joshpaulsmith.com',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    title: 'joshpaulsmith.com',
    description: 'joshpaulsmith.com',
    siteName: 'joshpaulsmith.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
