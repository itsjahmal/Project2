import { MetadataRoute } from 'next';
import { SITE_CONFIG, SERVICES } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://moemoe-enterprises-llc.web.app'; // Replace with your actual domain

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

  // Dynamic service routes from SERVICES
  // The main /services page is already included in staticRoutes
  // This adds specific service anchor links if desired, but it's better to just have the main page.
  // The sitemap should contain unique pages. Anchor links are not separate pages.
  const serviceMainRoute = staticRoutes.find(r => r.url.endsWith('/services'));
  if (serviceMainRoute) {
    serviceMainRoute.priority = 0.9;
    serviceMainRoute.changeFrequency = 'weekly';
  }
  
  const uniqueRoutes = [
    ...staticRoutes,
    quoteRoute,
  ];

  // Remove potential duplicates, just in case
  const finalSitemap = Array.from(new Map(uniqueRoutes.map(item => [item.url, item])).values());

  return finalSitemap;
}
