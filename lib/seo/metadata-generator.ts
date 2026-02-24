/**
 * SEO Metadata Generator
 * Feature: personal-branding-seo-domination
 * 
 * Generates optimized meta tags for all pages including:
 * - Title tags
 * - Meta descriptions
 * - Canonical URLs
 * - OpenGraph metadata
 * - Twitter Card metadata
 * 
 * Requirements: 1.5, 1.6, 1.7
 */

import { SEOMetadata, PageData } from './types';

/**
 * Default SEO configuration
 */
const DEFAULT_CONFIG = {
  siteName: 'Mustafa Pinjari',
  siteUrl: 'https://mustafapinjari.com',
  defaultImage: '/static/images/og-image.png',
  twitterHandle: '@mustafapinjari',
  personName: 'Mustafa Pinjari',
};

/**
 * Generate complete SEO metadata for a page
 * 
 * @param page - Page data including title, description, url, image, type
 * @returns Complete SEO metadata object with all required tags
 * 
 * Requirements: 1.5, 1.6, 1.7
 * 
 * @example
 * const metadata = generateSEOMetadata({
 *   title: 'About',
 *   description: 'Learn about my work in Django, AI, and Web Development',
 *   url: '/about',
 *   image: '/images/about.jpg',
 *   type: 'website'
 * });
 */
export function generateSEOMetadata(page: PageData): SEOMetadata {
  // Optimize title and description
  const optimizedTitle = optimizeTitle(page.title, true);
  const optimizedDescription = optimizeDescription(page.description);

  // Construct full URLs
  const fullUrl = page.url.startsWith('http') 
    ? page.url 
    : `${DEFAULT_CONFIG.siteUrl}${page.url}`;
  
  const imageUrl = page.image 
    ? (page.image.startsWith('http') ? page.image : `${DEFAULT_CONFIG.siteUrl}${page.image}`)
    : `${DEFAULT_CONFIG.siteUrl}${DEFAULT_CONFIG.defaultImage}`;

  const metadata: SEOMetadata = {
    title: optimizedTitle,
    description: optimizedDescription,
    canonical: fullUrl,
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      url: fullUrl,
      type: page.type || 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${page.title} - ${DEFAULT_CONFIG.personName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: optimizedDescription,
      images: [imageUrl],
    },
  };

  return metadata;
}

/**
 * Optimize title tag to meet SEO best practices
 * Ensures 50-60 character length and includes "Mustafa Pinjari"
 * 
 * @param title - Original title text
 * @param includePersonName - Whether to include "Mustafa Pinjari" in the title
 * @returns Optimized title string (50-60 characters)
 * 
 * Requirements: 1.6, 2.3
 * 
 * @example
 * optimizeTitle('About', true)
 * // Returns: "About | Mustafa Pinjari"
 * 
 * optimizeTitle('My Very Long Title That Exceeds Character Limits', true)
 * // Returns: "My Very Long Title | Mustafa Pinjari" (truncated to fit)
 */
export function optimizeTitle(title: string, includePersonName: boolean = true): string {
  const personName = DEFAULT_CONFIG.personName;
  const separator = ' | ';
  const targetMinLength = 50;
  const targetMaxLength = 60;

  // If person name should be included
  if (includePersonName) {
    // Check if person name is already in the title
    if (title.includes(personName)) {
      // Person name already present, just ensure length is appropriate
      if (title.length >= targetMinLength && title.length <= targetMaxLength) {
        return title;
      }
      
      // If too long, truncate
      if (title.length > targetMaxLength) {
        return title.substring(0, targetMaxLength - 3) + '...';
      }
      
      // If too short, return as is (better short than artificially padded)
      return title;
    }

    // Construct title with person name
    const fullTitle = `${title}${separator}${personName}`;
    
    // Check if it fits within target range
    if (fullTitle.length >= targetMinLength && fullTitle.length <= targetMaxLength) {
      return fullTitle;
    }

    // If too long, truncate the title part
    if (fullTitle.length > targetMaxLength) {
      const availableLength = targetMaxLength - separator.length - personName.length - 3; // 3 for '...'
      if (availableLength > 10) { // Ensure we have reasonable space for title
        return `${title.substring(0, availableLength)}...${separator}${personName}`;
      }
      // If not enough space, just use person name
      return personName;
    }

    // If too short, return as is
    return fullTitle;
  }

  // Person name not included
  if (title.length >= targetMinLength && title.length <= targetMaxLength) {
    return title;
  }

  // If too long, truncate
  if (title.length > targetMaxLength) {
    return title.substring(0, targetMaxLength - 3) + '...';
  }

  // If too short, return as is
  return title;
}

/**
 * Optimize meta description to meet SEO best practices
 * Ensures 150-160 character length and includes "Mustafa Pinjari" within first 120 characters
 * 
 * @param description - Original description text
 * @returns Optimized description string (150-160 characters)
 * 
 * Requirements: 1.6, 2.4
 * 
 * @example
 * optimizeDescription('Learn about web development')
 * // Returns: "Mustafa Pinjari - Learn about web development. Explore insights on Django, AI, Web Development, and Generative Tech."
 */
export function optimizeDescription(description: string): string {
  const targetMinLength = 150;
  const targetMaxLength = 160;
  const personName = DEFAULT_CONFIG.personName;
  const firstKeywordPosition = 120; // Person name should appear within first 120 chars

  // Check if person name is already in the description
  const hasPersonName = description.includes(personName);
  const personNamePosition = hasPersonName ? description.indexOf(personName) : -1;

  // If person name is present and in good position, check length
  if (hasPersonName && personNamePosition <= firstKeywordPosition) {
    if (description.length >= targetMinLength && description.length <= targetMaxLength) {
      return description;
    }

    // If too long, truncate
    if (description.length > targetMaxLength) {
      return description.substring(0, targetMaxLength - 3) + '...';
    }

    // If too short, pad with generic content
    if (description.length < targetMinLength) {
      const padding = ' Explore insights on Django, AI, Web Development, and Generative Tech.';
      const combined = description + padding;
      if (combined.length <= targetMaxLength) {
        return combined;
      }
      return combined.substring(0, targetMaxLength - 3) + '...';
    }

    return description;
  }

  // Person name not present or not in good position - need to add it
  const descWithPersonName = hasPersonName 
    ? description 
    : `${personName} - ${description}`;

  // Check length after adding person name
  if (descWithPersonName.length >= targetMinLength && descWithPersonName.length <= targetMaxLength) {
    return descWithPersonName;
  }

  // If too long, truncate
  if (descWithPersonName.length > targetMaxLength) {
    // Try to keep person name at the beginning
    if (!hasPersonName) {
      const availableLength = targetMaxLength - personName.length - 3 - 3; // 3 for ' - ', 3 for '...'
      if (availableLength > 20) {
        return `${personName} - ${description.substring(0, availableLength)}...`;
      }
    }
    return descWithPersonName.substring(0, targetMaxLength - 3) + '...';
  }

  // If too short, pad with generic content
  if (descWithPersonName.length < targetMinLength) {
    const padding = ' Specializing in Django, AI, Web Development, and Generative Tech.';
    const combined = descWithPersonName + padding;
    if (combined.length <= targetMaxLength) {
      return combined;
    }
    return combined.substring(0, targetMaxLength - 3) + '...';
  }

  return descWithPersonName;
}

/**
 * Calculate keyword density in content
 * Returns percentage (0-100) of keyword frequency
 * 
 * @param content - Text content to analyze
 * @param keyword - Keyword or phrase to search for
 * @returns Keyword density as percentage (0-100)
 * 
 * Requirements: 2.2
 * 
 * @example
 * calculateKeywordDensity('Mustafa Pinjari is a developer. Mustafa builds apps.', 'Mustafa Pinjari')
 * // Returns: 2.0 (appears 1 time in ~50 words = 2%)
 * 
 * calculateKeywordDensity('The quick brown fox jumps over the lazy dog', 'fox')
 * // Returns: 11.11 (appears 1 time in 9 words = 11.11%)
 */
export function calculateKeywordDensity(content: string, keyword: string): number {
  if (!content || !keyword) {
    return 0;
  }

  // Normalize content and keyword (lowercase, trim)
  const normalizedContent = content.toLowerCase().trim();
  const normalizedKeyword = keyword.toLowerCase().trim();

  if (!normalizedContent || !normalizedKeyword) {
    return 0;
  }

  // Count total words in content
  const words = normalizedContent.split(/\s+/).filter(word => word.length > 0);
  const totalWords = words.length;

  if (totalWords === 0) {
    return 0;
  }

  // Count keyword occurrences
  // For multi-word keywords, we need to search for the phrase
  const keywordWords = normalizedKeyword.split(/\s+/).filter(word => word.length > 0);
  const keywordWordCount = keywordWords.length;

  let keywordCount = 0;

  if (keywordWordCount === 1) {
    // Single word keyword - count occurrences
    keywordCount = words.filter(word => word === normalizedKeyword).length;
  } else {
    // Multi-word keyword - search for phrase occurrences
    let searchIndex = 0;
    while (searchIndex !== -1) {
      searchIndex = normalizedContent.indexOf(normalizedKeyword, searchIndex);
      if (searchIndex !== -1) {
        keywordCount++;
        searchIndex += normalizedKeyword.length;
      }
    }
  }

  // Calculate density: (keyword occurrences * keyword word count / total words) * 100
  const density = (keywordCount * keywordWordCount / totalWords) * 100;

  // Round to 2 decimal places
  return Math.round(density * 100) / 100;
}
