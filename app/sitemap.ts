import { MetadataRoute } from 'next';
import { demos } from './demos/registry';

// Update this to your actual domain
const SITE_URL = process.env.SITE_URL || 'https://nengovhela.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Add all demo pages
  const demoRoutes: MetadataRoute.Sitemap = demos.map((demo) => ({
    url: `${SITE_URL}/demos/${demo.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...baseRoutes, ...demoRoutes];
}
