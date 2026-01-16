
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Top Moving & Cleaning Services in Atlanta`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: 'Top-rated moving and cleaning services in Atlanta, GA. We offer residential & commercial cleaning, plus local moving and courier services. Get a free quote!',
  keywords: ['cleaning services atlanta', 'house cleaning atlanta', 'commercial cleaning atlanta', 'office cleaning services atlanta ga', 'moving services atlanta', 'local movers atlanta ga', 'courier services atlanta'],
  metadataBase: new URL('https://moemoeenterprise.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Top Moving & Cleaning Services in Atlanta`,
    description: 'Your trusted partner for professional moving and cleaning in Metro Atlanta.',
    url: 'https://moemoeenterprise.com',
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
    title: `${SITE_CONFIG.name} | Top Moving & Cleaning Services in Atlanta`,
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
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://moemoeenterprise.com/#localbusiness",
  "name": "MoeMoe Enterprises LLC",
  "description": "MoeMoe Enterprises LLC provides professional residential cleaning, commercial cleaning, moving, and courier services across the Atlanta Metro area. Request a free quote today.",
  "url": "https://moemoeenterprise.com",
  "telephone": "+1-(404) 375-9495",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4935 Presidents Way",
    "addressLocality": "Tucker",
    "addressRegion": "GA",
    "postalCode": "30084",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Atlanta Metro Area"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.thumbtack.com/ga/atlanta/moving-companies/moemoe-enterprises-llc"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "MoeMoe Enterprises LLC Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Cleaning Services",
          "areaServed": "Atlanta Metro Area"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial & Office Cleaning Services",
          "areaServed": "Atlanta Metro Area"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moving Services",
          "areaServed": "Atlanta Metro Area"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Courier & Same-Day Delivery Services",
          "areaServed": "Atlanta Metro Area"
        }
      }
    ]
  },
  "potentialAction": {
    "@type": "Action",
    "name": "Request a Free Quote",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://moemoeenterprise.com/quote",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }
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
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
