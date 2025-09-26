import { MetadataRoute } from 'next';
import { SITE_CONFIG, SERVICES } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://moemoe-enterprises-llc.web.app'; // Replace with your actual domain

  const staticRoutes = SITE_CONFIG.navLinks.map(link => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1.0 : 0.8,
  }));
  
  const quoteRoute = {
    url: `${siteUrl}${SITE_CONFIG.cta.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  };

  const serviceRoutes = SERVICES.map(service => ({
    url: `${siteUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    quoteRoute,
    ...serviceRoutes
  ];
}
