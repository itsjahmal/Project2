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
        url: 'https://images.unsplash.com/photo-1634010727710-aeef03fa4cba?w=1200&h=630&fit=crop', // Replace with a branded OG image
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
    // images: ['/og-image.jpg'], // Replace with a branded Twitter image
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
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
