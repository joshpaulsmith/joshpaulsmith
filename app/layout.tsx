import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://joshpaulsmith.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Joshua P. Smith | Official Website',
  description: 'The official website of Joshua P. Smith.',
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
    title: 'Joshua P. Smith | Official Website',
    description: 'The official website of Joshua P. Smith.',
    siteName: 'Joshua P. Smith',
  },
  twitter: {
    card: 'summary',
    title: 'Joshua P. Smith | Official Website',
    description: 'The official website of Joshua P. Smith.',
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
