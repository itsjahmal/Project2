import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://moemoeenterprise.com';

  const staticPages = [
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

  staticPages.sort();

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '/' ? 1.0 : 0.8,
  }));
}
