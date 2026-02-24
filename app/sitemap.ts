import { getPosts } from './thoughts/utils';
import { projects } from './projects/constants';
import { MetadataRoute } from 'next';

export const baseUrl = 'https://mustafapinjari.live';

/**
 * Generate sitemap entries for static pages
 * Priority: Homepage (1.0) > About (0.9) > Projects/Blog (0.8) > Other pages
 * Change frequency based on expected update patterns
 */
function getStaticPageUrls(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thoughts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/stats`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/demo/marquee-3d`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}

/**
 * Generate sitemap entries for blog posts
 * Priority: 0.7 (high value content)
 * Change frequency: monthly (content may be updated)
 */
function getBlogPostUrls(): MetadataRoute.Sitemap {
  try {
    const posts = getPosts();
    
    return posts.map((post) => ({
      url: `${baseUrl}/thoughts/${post.slug}`,
      lastModified: post.metadata?.publishedAt 
        ? new Date(post.metadata.publishedAt) 
        : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

/**
 * Generate sitemap entries for project pages
 * Priority: 0.7 (showcase content)
 * Change frequency: monthly (projects may be updated)
 */
function getProjectUrls(): MetadataRoute.Sitemap {
  try {
    return projects.map((project) => {
      // Extract slug from GitHub URL or use title
      const slug = project.url.split('/').pop() || project.title.toLowerCase().replace(/\s+/g, '-');
      
      return {
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
    return [];
  }
}

/**
 * Generate complete sitemap with all pages
 * Combines static pages, blog posts, and projects
 * Validates: Requirements 1.3
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const staticPages = getStaticPageUrls();
    const blogPosts = getBlogPostUrls();
    const projectPages = getProjectUrls();

    return [...staticPages, ...blogPosts, ...projectPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return at least static pages if dynamic content fails
    return getStaticPageUrls();
  }
}
