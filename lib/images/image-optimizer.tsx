import Image from 'next/image';
import { ReactElement } from 'react';

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
 * Default image optimization configuration
 */
const DEFAULT_CONFIG: ImageOptimizationConfig = {
  quality: 85,
  formats: ['webp', 'avif', 'jpeg'],
  lazy: true,
  priority: false,
};

/**
 * Optimizes an image using Next.js Image component with proper sizing and alt tags
 * 
 * @param src - Image source URL or path
 * @param alt - Descriptive alt text for the image
 * @param width - Image width in pixels (optional if fill is true)
 * @param height - Image height in pixels (optional if fill is true)
 * @param fill - Whether to fill the parent container
 * @param className - Additional CSS classes
 * @param config - Image optimization configuration
 * @returns React element with optimized image
 * 
 * @example
 * ```tsx
 * const image = optimizeImage('/profile.jpg', 'Mustafa Pinjari profile photo', 400, 400);
 * ```
 */
export function optimizeImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  config = {},
}: OptimizedImageProps): ReactElement {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  // Validate that alt text is provided and not empty
  if (!alt || alt.trim() === '') {
    console.warn(`Image ${src} is missing alt text. Using filename as fallback.`);
  }

  // Determine loading strategy
  const loading = mergedConfig.priority ? undefined : (mergedConfig.lazy ? 'lazy' : 'eager');

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      quality={mergedConfig.quality}
      sizes={mergedConfig.sizes}
      priority={mergedConfig.priority}
      loading={loading}
      className={className}
      style={{
        objectFit: fill ? 'cover' : undefined,
      }}
    />
  );
}

/**
 * Generates responsive sizes attribute for Next.js Image component
 * 
 * @param breakpoints - Object mapping breakpoints to image widths
 * @returns Sizes string for responsive images
 * 
 * @example
 * ```tsx
 * const sizes = generateSizes({
 *   mobile: '100vw',
 *   tablet: '50vw',
 *   desktop: '33vw'
 * });
 * // Returns: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
 * ```
 */
export function generateSizes(breakpoints: Record<string, string>): string {
  const breakpointMap: Record<string, number> = {
    mobile: 768,
    tablet: 1024,
    desktop: 1440,
  };

  const entries = Object.entries(breakpoints);
  const sizeStrings: string[] = [];

  entries.forEach(([key, value], index) => {
    if (index < entries.length - 1) {
      const maxWidth = breakpointMap[key] || 768;
      sizeStrings.push(`(max-width: ${maxWidth}px) ${value}`);
    } else {
      // Last entry is the default size
      sizeStrings.push(value);
    }
  });

  return sizeStrings.join(', ');
}

/**
 * Generates srcset for responsive images
 * 
 * @param src - Base image source
 * @param sizes - Array of widths for srcset
 * @returns Srcset string
 * 
 * @example
 * ```tsx
 * const srcset = generateSrcSet('/image.jpg', [400, 800, 1200]);
 * // Returns: "/image.jpg?w=400 400w, /image.jpg?w=800 800w, /image.jpg?w=1200 1200w"
 * ```
 */
export function generateSrcSet(src: string, sizes: number[]): string {
  return sizes
    .map((size) => {
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}w=${size} ${size}w`;
    })
    .join(', ');
}
