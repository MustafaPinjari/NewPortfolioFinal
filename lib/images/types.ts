/**
 * Type definitions for image optimization system
 */

/**
 * Configuration for image optimization
 */
export interface ImageOptimizationConfig {
  quality?: number;
  formats?: ('webp' | 'avif' | 'jpeg')[];
  sizes?: string;
  lazy?: boolean;
  priority?: boolean;
}

/**
 * Props for the optimized image component
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  config?: ImageOptimizationConfig;
}

/**
 * Context information for generating alt text
 */
export interface AltTextContext {
  pageName?: string;
  section?: string;
  personName?: string;
  keywords?: string[];
  description?: string;
}

/**
 * Result of alt text validation
 */
export interface AltTextValidationResult {
  valid: boolean;
  issues: string[];
  suggestions: string[];
}
