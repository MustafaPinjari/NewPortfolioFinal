import { MetadataRoute } from 'next';

/**
 * Generate robots.txt with proper crawl directives
 * - Allow all user agents to crawl public content
 * - Disallow admin paths and internal directories
 * - Include sitemap URL for search engines
 * Validates: Requirements 1.4
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/static/',
          '/.well-known/',
        ],
      },
      // Block AI crawlers from scraping content
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],
    sitemap: 'https://mustafapinjari.live/sitemap.xml',
    host: 'https://mustafapinjari.live',
  };
}
