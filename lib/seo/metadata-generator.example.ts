/**
 * Example Usage of SEO Metadata Generator
 * Feature: personal-branding-seo-domination
 * 
 * This file demonstrates how to use the metadata generator functions
 */

import {
  generateSEOMetadata,
  optimizeTitle,
  optimizeDescription,
  calculateKeywordDensity,
} from './metadata-generator';
import type { PageData } from './types';

// Example 1: Generate complete metadata for a page
export function exampleGenerateMetadata() {
  const pageData: PageData = {
    title: 'About',
    description: 'Learn about my work in Django, AI, and Web Development',
    url: '/about',
    image: '/images/about.jpg',
    type: 'website',
  };

  const metadata = generateSEOMetadata(pageData);
  
  // Use metadata in your Next.js page:
  // export const metadata = generateSEOMetadata({ ... });
  
  return metadata;
}

// Example 2: Optimize a title
export function exampleOptimizeTitle() {
  // With person name (default)
  const title1 = optimizeTitle('About', true);
  // Returns: "About | Mustafa Pinjari" (50-60 chars)
  
  // Without person name
  const title2 = optimizeTitle('My Projects', false);
  // Returns: "My Projects"
  
  // Long title gets truncated
  const title3 = optimizeTitle(
    'This is a very long title that exceeds the character limit',
    true
  );
  // Returns: "This is a very long title... | Mustafa Pinjari"
  
  return { title1, title2, title3 };
}

// Example 3: Optimize a description
export function exampleOptimizeDescription() {
  const desc1 = optimizeDescription(
    'Learn about web development and modern technologies'
  );
  // Returns: "Mustafa Pinjari - Learn about web development... (150-160 chars)"
  
  const desc2 = optimizeDescription(
    'Explore Django tutorials, AI projects, and web development best practices'
  );
  // Returns: Description with "Mustafa Pinjari" in first 120 chars
  
  return { desc1, desc2 };
}

// Example 4: Calculate keyword density
export function exampleCalculateKeywordDensity() {
  const blogContent = `
    Mustafa Pinjari is a software developer specializing in Django and AI.
    In this article, we'll explore web development best practices.
    Django is a powerful framework for building web applications.
    Modern web development requires understanding of multiple technologies.
    AI and machine learning are transforming the tech industry.
  `;
  
  const density = calculateKeywordDensity(blogContent, 'Mustafa Pinjari');
  // Returns: ~2.5% (ideal range is 1-3% for SEO)
  
  return density;
}

// Example 5: Use in Next.js page
export function exampleNextJsUsage() {
  // In your Next.js page or layout:
  /*
  import { generateSEOMetadata } from '@/lib/seo';
  
  export const metadata = generateSEOMetadata({
    title: 'About Me',
    description: 'Learn about my journey in software development',
    url: '/about',
    image: '/images/about-og.jpg',
    type: 'website',
  });
  
  export default function AboutPage() {
    return <div>About content...</div>;
  }
  */
}

// Example 6: Validate content before publishing
export function exampleValidateContent() {
  const blogPost = {
    title: 'Getting Started with Django',
    content: `
      Django is a high-level Python web framework...
      [Your blog content here]
    `,
  };
  
  // Check keyword density
  const density = calculateKeywordDensity(blogPost.content, 'Django');
  
  if (density < 1 || density > 3) {
    console.warn(`Keyword density is ${density}%. Ideal range is 1-3%.`);
  }
  
  // Optimize metadata
  const title = optimizeTitle(blogPost.title, true);
  const description = optimizeDescription(
    'Learn how to get started with Django framework'
  );
  
  return { title, description, density };
}
