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

  // Add new service pages
  const servicePages = [
    '/services/house-cleaning-services-atlanta',
    '/services/deep-cleaning-services-atlanta',
    '/services/move-in-move-out-cleaning-atlanta',
    '/services/office-cleaning-services-atlanta',
    '/services/janitorial-business-cleaning-atlanta',
    '/services/moving-services-atlanta',
    '/services/local-movers-atlanta-ga',
    '/services/courier-same-day-delivery-atlanta',
  ];

  const serviceRoutes = servicePages.map(page => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));


  const serviceMainRoute = staticRoutes.find(r => r.url.endsWith('/services'));
  if (serviceMainRoute) {
    serviceMainRoute.priority = 0.9;
    serviceMainRoute.changeFrequency = 'weekly';
  }
  
  const uniqueRoutes = [
    ...staticRoutes,
    quoteRoute,
    ...serviceRoutes
  ];

  // Remove potential duplicates, just in case
  const finalSitemap = Array.from(new Map(uniqueRoutes.map(item => [item.url, item])).values());

  return finalSitemap;
}
