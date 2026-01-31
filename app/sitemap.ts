import { getPosts } from './thoughts/utils';

export const baseUrl = 'https://mustafapinjari.live';

const routes = [
  {
    url: baseUrl,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/projects`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/thoughts`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/uses`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.5,
  },
];

export default async function sitemap() {
  // Get blog posts if they exist
  const blogPosts = getPosts?.()?.map((post) => ({
    url: `${baseUrl}/thoughts/${post.slug}`,
    lastModified: post.metadata?.publishedAt || new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8,
  })) || [];

  return [...routes, ...blogPosts];
}
