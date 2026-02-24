/**
 * Content Validation Utilities
 * Feature: personal-branding-seo-domination
 * Requirements: 4.4, 11.1, 11.4, 11.6
 */

import { BlogPost } from './types';

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Count words in content
 */
function countWords(content: string): number {
  // Remove markdown syntax, code blocks, and extra whitespace
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/[#*_~\[\]()]/g, '') // Remove markdown syntax
    .trim();
  
  const words = cleanContent.split(/\s+/).filter((word) => word.length > 0);
  return words.length;
}

/**
 * Validate content length meets minimum word count
 * Requirements: 4.4, 11.1
 * 
 * @param content - The blog post content to validate
 * @param minWords - Minimum word count (default: 1500)
 * @returns Validation result with word count details
 */
export function validateContentLength(
  content: string,
  minWords: number = 1500
): ValidationResult {
  const wordCount = countWords(content);
  const isValid = wordCount >= minWords;

  const result: ValidationResult = {
    isValid,
    errors: [],
    warnings: [],
  };

  if (!isValid) {
    result.errors.push(
      `Content is too short. Found ${wordCount} words, minimum required is ${minWords} words.`
    );
  }

  return result;
}

/**
 * Calculate keyword density as a percentage
 * 
 * @param content - The content to analyze
 * @param keyword - The target keyword or phrase
 * @returns Keyword density as a percentage (0-100)
 */
export function calculateKeywordDensity(
  content: string,
  keyword: string
): number {
  if (!content || !keyword) {
    return 0;
  }

  const cleanContent = content.toLowerCase();
  const cleanKeyword = keyword.toLowerCase();
  
  // Count total words
  const totalWords = countWords(content);
  
  if (totalWords === 0) {
    return 0;
  }

  // Count keyword occurrences (handle multi-word keywords)
  const keywordWords = cleanKeyword.split(/\s+/).length;
  const regex = new RegExp(cleanKeyword.replace(/\s+/g, '\\s+'), 'gi');
  const matches = cleanContent.match(regex);
  const keywordCount = matches ? matches.length : 0;

  // Calculate density: (keyword occurrences * keyword word count) / total words * 100
  const density = (keywordCount * keywordWords) / totalWords * 100;
  
  return Math.round(density * 100) / 100; // Round to 2 decimal places
}

/**
 * Validate keyword density is within acceptable range
 * Requirements: 11.4
 * 
 * @param content - The blog post content
 * @param keyword - The target keyword
 * @param minDensity - Minimum acceptable density (default: 1%)
 * @param maxDensity - Maximum acceptable density (default: 3%)
 * @returns Validation result with density details
 */
export function validateKeywordDensity(
  content: string,
  keyword: string,
  minDensity: number = 1,
  maxDensity: number = 3
): ValidationResult {
  const density = calculateKeywordDensity(content, keyword);
  const isValid = density >= minDensity && density <= maxDensity;

  const result: ValidationResult = {
    isValid,
    errors: [],
    warnings: [],
  };

  if (density < minDensity) {
    result.warnings.push(
      `Keyword density is too low (${density}%). Recommended range: ${minDensity}-${maxDensity}%.`
    );
  } else if (density > maxDensity) {
    result.warnings.push(
      `Keyword density is too high (${density}%). Recommended range: ${minDensity}-${maxDensity}%. Risk of keyword stuffing.`
    );
  }

  return result;
}

/**
 * Update content timestamp
 * Requirements: 11.6
 * 
 * @param post - The blog post to update
 * @returns Updated blog post with current dateModified
 */
export function updateContentTimestamp(post: BlogPost): BlogPost {
  return {
    ...post,
    updatedAt: new Date(),
  };
}

/**
 * Comprehensive content validation
 * 
 * @param post - The blog post to validate
 * @param targetKeyword - Optional target keyword for density check
 * @returns Comprehensive validation result
 */
export function validateBlogPost(
  post: BlogPost,
  targetKeyword?: string
): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
  };

  // Validate content length
  const lengthValidation = validateContentLength(post.content);
  result.errors.push(...lengthValidation.errors);
  result.warnings.push(...lengthValidation.warnings);

  // Validate keyword density if keyword provided
  if (targetKeyword) {
    const densityValidation = validateKeywordDensity(post.content, targetKeyword);
    result.warnings.push(...densityValidation.warnings);
  }

  // Check required fields
  if (!post.title || post.title.trim().length === 0) {
    result.errors.push('Title is required.');
  }

  if (!post.description || post.description.trim().length === 0) {
    result.errors.push('Description is required.');
  }

  if (!post.author || post.author.trim().length === 0) {
    result.errors.push('Author is required.');
  }

  result.isValid = result.errors.length === 0;

  return result;
}
