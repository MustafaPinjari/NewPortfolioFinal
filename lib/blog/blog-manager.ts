/**
 * Blog Post Management Utilities
 * Feature: personal-branding-seo-domination
 * Requirements: 4.4, 4.5
 */

import * as fs from 'fs';
import * as path from 'path';
import { BlogPost } from './types';

/**
 * Parse frontmatter from MDX content
 */
function parseFrontmatter(fileContent: string): {
  metadata: Record<string, any>;
  content: string;
} {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  
  if (!match) {
    return { metadata: {}, content: fileContent };
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Record<string, any> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    const trimmedKey = key.trim();
    
    if (trimmedKey === 'draft') {
      metadata[trimmedKey] = value === 'true';
    } else if (trimmedKey === 'tags') {
      // Parse tags as array
      metadata[trimmedKey] = value
        .replace(/^\[|\]$/g, '')
        .split(',')
        .map((tag) => tag.trim());
    } else {
      metadata[trimmedKey] = value;
    }
  });

  return { metadata, content };
}

/**
 * Get all MDX files from a directory
 */
function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Get all blog posts from the posts directory
 * Requirements: 4.4
 */
export function getAllBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'app/thoughts/posts');
  const mdxFiles = getMDXFiles(postsDirectory);

  const posts = mdxFiles.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { metadata, content } = parseFrontmatter(rawContent);
    const slug = path.basename(file, path.extname(file));

    const post: BlogPost = {
      slug,
      title: metadata.title || '',
      description: metadata.summary || metadata.description || '',
      content,
      publishedAt: metadata.publishedAt ? new Date(metadata.publishedAt) : new Date(),
      updatedAt: metadata.updatedAt ? new Date(metadata.updatedAt) : new Date(metadata.publishedAt || Date.now()),
      author: metadata.author || 'Mustafa Pinjari',
      tags: metadata.tags || [],
      category: metadata.category || 'Uncategorized',
      featuredImage: metadata.image || metadata.featuredImage || '',
      readingTime: calculateReadingTime(content),
      keywords: metadata.keywords || [],
    };

    return post;
  });

  // Filter out drafts and sort by published date (newest first)
  return posts
    .filter((post) => {
      const rawContent = fs.readFileSync(
        path.join(postsDirectory, `${post.slug}.mdx`),
        'utf-8'
      );
      const { metadata } = parseFrontmatter(rawContent);
      return !metadata.draft;
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

/**
 * Get a single blog post by slug
 * Requirements: 4.4
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const postsDirectory = path.join(process.cwd(), 'app/thoughts/posts');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { metadata, content } = parseFrontmatter(rawContent);

  // Check if draft
  if (metadata.draft === true) {
    return null;
  }

  const post: BlogPost = {
    slug,
    title: metadata.title || '',
    description: metadata.summary || metadata.description || '',
    content,
    publishedAt: metadata.publishedAt ? new Date(metadata.publishedAt) : new Date(),
    updatedAt: metadata.updatedAt ? new Date(metadata.updatedAt) : new Date(metadata.publishedAt || Date.now()),
    author: metadata.author || 'Mustafa Pinjari',
    tags: metadata.tags || [],
    category: metadata.category || 'Uncategorized',
    featuredImage: metadata.image || metadata.featuredImage || '',
    readingTime: calculateReadingTime(content),
    keywords: metadata.keywords || [],
  };

  return post;
}
