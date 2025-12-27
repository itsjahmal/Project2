import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.moemoeenterprises.com';

  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/quote',
    '/services',
    '/services/courier-same-day-delivery-atlanta',
    '/services/deep-cleaning-services-atlanta',
    '/services/house-cleaning-services-atlanta',
    '/services/janitorial-business-cleaning-atlanta',
    '/services/local-movers-atlanta-ga',
    '/services/move-in-move-out-cleaning-atlanta',
    '/services/moving-services-atlanta',
    '/services/office-cleaning-services-atlanta',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
