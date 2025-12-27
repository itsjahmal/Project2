import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.moemoeenterprises.com';

  // Main pages
  const mainPages = ['/', '/about', '/contact', '/quote', '/services'];

  // Service pages, which are higher priority
  const servicePages = [
    '/services/courier-same-day-delivery-atlanta',
    '/services/deep-cleaning-services-atlanta',
    '/services/house-cleaning-services-atlanta',
    '/services/janitorial-business-cleaning-atlanta',
    '/services/local-movers-atlanta-ga',
    '/services/move-in-move-out-cleaning-atlanta',
    '/services/moving-services-atlanta',
    '/services/office-cleaning-services-atlanta',
  ];

  const mainEntries: MetadataRoute.Sitemap = mainPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
  
  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...mainEntries, ...serviceEntries];
}
