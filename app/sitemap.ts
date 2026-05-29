import { MetadataRoute } from 'next';
import { demos } from './demos/registry';

export const dynamic = 'force-static';

const SITE_URL = process.env.SITE_URL || 'https://nengovhela.me';
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/demos`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const demoRoutes: MetadataRoute.Sitemap = demos.map((demo) => ({
    url: `${SITE_URL}/demos/${demo.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...baseRoutes, ...demoRoutes];
}
