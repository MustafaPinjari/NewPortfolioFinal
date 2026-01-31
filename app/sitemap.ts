import { getPosts } from './thoughts/utils';
import { MetadataRoute } from 'next';

export const baseUrl = 'https://mustafapinjari.live';

const staticRoutes = [
  {
    url: baseUrl,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/projects`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: `${baseUrl}/thoughts`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/uses`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: `${baseUrl}/stats`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  },
  {
    url: `${baseUrl}/demo/marquee-3d`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Get blog posts if they exist
    const blogPosts = getPosts?.()?.map((post) => ({
      url: `${baseUrl}/thoughts/${post.slug}`,
      lastModified: post.metadata?.publishedAt || new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })) || [];

    return [...staticRoutes, ...blogPosts];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticRoutes;
  }
}
