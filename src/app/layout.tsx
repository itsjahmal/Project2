import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { AOSProvider } from '@/components/aos-provider';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Top Moving & Cleaning Services in Atlanta, GA`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: 'Top-rated moving and cleaning services for the Metro Atlanta area, including Roswell, Marietta, and Sandy Springs. Get your free, no-obligation quote today!',
  keywords: ['moving services atlanta', 'cleaning services atlanta', 'local movers atlanta ga', 'office cleaning metro atlanta', 'residential movers roswell ga', 'apartment cleaning sandy springs', 'movers near me'],
  metadataBase: new URL('https://moemoe-enterprises-llc.web.app'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Top Moving & Cleaning Services in Atlanta, GA`,
    description: 'Your trusted partner for professional moving and cleaning in Metro Atlanta.',
    url: 'https://moemoe-enterprises-llc.web.app', // Replace with actual domain
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: 'https://i.imgur.com/yv4A8GD.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Atlanta skyline with MoeMoe Enterprises logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Top Moving & Cleaning Services in Atlanta, GA`,
    description: 'Top-rated moving and cleaning services for the Metro Atlanta area. Get your free quote!',
    images: ['https://i.imgur.com/yv4A8GD.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': SITE_CONFIG.name,
  'image': 'https://i.imgur.com/kpvUUgj.png',
  '@id': 'https://moemoe-enterprises-llc.web.app',
  'url': 'https://moemoe-enterprises-llc.web.app',
  'telephone': SITE_CONFIG.phone,
  'email': SITE_CONFIG.email,
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Atlanta',
    'addressRegion': 'GA',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 33.7488,
    'longitude': -84.3877
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'opens': '00:00',
    'closes': '23:59'
  },
  'makesOffer': [
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Moving Services'
      }
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Cleaning Services'
      }
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Courier Services'
      }
    }
  ],
  'areaServed': {
    '@type': 'AdministrativeArea',
    'name': 'Metro Atlanta'
  },
  'sameAs': [
    SITE_CONFIG.socialLinks.facebook,
    SITE_CONFIG.socialLinks.instagram,
    SITE_CONFIG.socialLinks.twitter
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <AOSProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AOSProvider>
      </body>
    </html>
  );
}
