/**
 * Image optimization and alt text generation utilities
 * 
 * This module provides utilities for:
 * - Optimizing images using Next.js Image component
 * - Generating SEO-friendly alt text
 * - Validating alt text quality
 * - Creating responsive image configurations
 */

export {
  optimizeImage,
  generateSizes,
  generateSrcSet,
  type ImageOptimizationConfig,
  type OptimizedImageProps,
} from './image-optimizer';

export {
  generateAltText,
  validateAltText,
  generateProfileAltText,
  generateProjectAltText,
  type AltTextContext,
} from './alt-text-generator';
