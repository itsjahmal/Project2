
const baseUrl = 'https://www.moemoeenterprises.com';

function generateSiteMap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
           <url>
               <loc>${`${baseUrl}${page}`}</loc>
               <lastmod>${new Date().toISOString()}</lastmod>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  const mainPages = ['/', '/about', '/contact', '/quote', '/services'];
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

  const allPages = [...mainPages, ...servicePages];

  const body = generateSiteMap(allPages);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
