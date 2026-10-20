import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://joshpaulsmith.com';
const siteTitle = 'Joshua P. Smith for Council | Township of St. Joseph';
const siteDescription =
  'Joshua P. Smith is running for Council in the Township of St. Joseph. Rooted in our community and ready to serve.';

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
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Joshua P. Smith for Council',
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Joshua P. Smith', url: '/' }],
  creator: 'Joshua P. Smith',
  keywords: [
    'Joshua P. Smith',
    'Joshua Smith for Council',
    'Township of St. Joseph',
    'St. Joseph Island',
    '2026 municipal election',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    title: siteTitle,
    description: siteDescription,
    siteName: 'Joshua P. Smith for Council',
    images: [
      {
        url: '/campaign-sign.jpeg',
        width: 862,
        height: 648,
        alt: 'Joshua P. Smith for Council — Rooted in our community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/campaign-sign.jpeg'],
  },
  icons: {
    icon: '/joshua-smith-favicon.png',
    shortcut: '/joshua-smith-favicon.png',
    apple: '/joshua-smith-favicon.png',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Joshua P. Smith for Council',
      description: siteDescription,
      inLanguage: 'en-CA',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile-page`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'en-CA',
      dateModified: '2026-10-20',
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#joshua-p-smith` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#joshua-p-smith`,
      name: 'Joshua P. Smith',
      givenName: 'Joshua',
      familyName: 'Smith',
      url: `${siteUrl}/`,
      image: `${siteUrl}/joshua-portrait.jpg`,
      jobTitle: 'Candidate for Council',
      description:
        'Candidate for Council in the Township of St. Joseph and a fifth-generation St. Joseph Islander.',
      email: 'mailto:joshpaulsmith@outlook.com',
      telephone: '+1-705-257-5300',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${manrope.variable} ${newsreader.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
