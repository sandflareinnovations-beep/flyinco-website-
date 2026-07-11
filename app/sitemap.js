import { packagesData } from '../src/data/packagesData';
import { SITE_URL } from '../src/lib/seo';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/visa',
    '/saudi-packages',
    '/india-packages',
    '/international-packages',
    '/honeymoon-packages',
    '/adventure-tours',
    '/corporate-travel',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const packageRoutes = packagesData.map((pkg) => ({
    url: `${SITE_URL}/package/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...packageRoutes];
}
