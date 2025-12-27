import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moemoeenterprises.com';

  // Static routes from navLinks
  const staticRoutes = SITE_CONFIG.navLinks.map(link => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1.0 : 0.8,
  }));
  
  // Quote page route from cta
  const quoteRoute = {
    url: `${siteUrl}${SITE_CONFIG.cta.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  };

  const allRoutes = [
    ...staticRoutes,
    quoteRoute,
  ];

  // Ensure there are no duplicate URLs
  const uniqueRoutes = Array.from(new Map(allRoutes.map(item => [item.url, item])).values());

  return uniqueRoutes;
}
