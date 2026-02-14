import type { MetadataRoute } from 'next';

const SITE_URL = 'https://agnieszka.wawro.ovh';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/pl`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          pl: `${SITE_URL}/pl`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          pl: `${SITE_URL}/pl`,
          en: `${SITE_URL}/en`,
        },
      },
    },
  ];
}
