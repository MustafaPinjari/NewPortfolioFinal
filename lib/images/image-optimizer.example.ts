/**
 * Example usage of image optimization utilities
 * 
 * This file demonstrates how to use the image optimization system
 * in various scenarios throughout the application.
 */

import { optimizeImage, generateSizes, generateSrcSet } from './image-optimizer';

// Example 1: Basic image optimization
export function basicImageExample() {
  return optimizeImage({
    src: '/static/images/profile.jpeg',
    alt: 'Mustafa Pinjari professional headshot',
    width: 400,
    height: 400,
  });
}

// Example 2: Hero image with priority loading
export function heroImageExample() {
  return optimizeImage({
    src: '/static/images/hero-background.jpg',
    alt: 'Mustafa Pinjari workspace showing Django and AI development',
    width: 1920,
    height: 1080,
    config: {
      quality: 90,
      priority: true, // Load immediately (above the fold)
      lazy: false,
    },
  });
}

// Example 3: Fill container image
export function fillContainerExample() {
  return optimizeImage({
    src: '/static/images/project-background.jpg',
    alt: 'Abstract technology background with code patterns',
    fill: true,
    className: 'object-cover',
    config: {
      sizes: '100vw',
      quality: 80,
    },
  });
}

// Example 4: Responsive image with custom sizes
export function responsiveImageExample() {
  const sizes = generateSizes({
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
  });

  return optimizeImage({
    src: '/static/images/project/django-app.png',
    alt: 'Django application dashboard by Mustafa Pinjari',
    width: 800,
    height: 600,
    config: {
      sizes,
      quality: 85,
      lazy: true,
    },
  });
}

// Example 5: Blog post featured image
export function blogFeaturedImageExample() {
  return optimizeImage({
    src: '/static/blog/django-tutorial.webp',
    alt: 'Django tutorial code example by Mustafa Pinjari',
    width: 1200,
    height: 630,
    config: {
      quality: 85,
      lazy: true,
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px',
    },
  });
}

// Example 6: Project gallery image
export function projectGalleryImageExample() {
  return optimizeImage({
    src: '/static/images/project/screenshot-1.png',
    alt: 'AI-powered web application interface showing real-time data analysis',
    width: 600,
    height: 400,
    className: 'rounded-lg shadow-lg',
    config: {
      quality: 85,
      lazy: true,
    },
  });
}

// Example 7: Avatar/profile image (small)
export function avatarImageExample() {
  return optimizeImage({
    src: '/static/images/avatar.webp',
    alt: 'Mustafa Pinjari avatar',
    width: 64,
    height: 64,
    className: 'rounded-full',
    config: {
      quality: 90,
      priority: true,
    },
  });
}

// Example 8: Generate srcset for manual use
export function srcsetExample() {
  const srcset = generateSrcSet('/static/images/hero.jpg', [400, 800, 1200, 1600]);
  console.log('Generated srcset:', srcset);
  // Output: "/static/images/hero.jpg?w=400 400w, /static/images/hero.jpg?w=800 800w, ..."
  return srcset;
}

// Example 9: Testimonial image
export function testimonialImageExample() {
  return optimizeImage({
    src: '/static/images/testimonials/client-1.jpg',
    alt: 'Client testimonial photo',
    width: 100,
    height: 100,
    className: 'rounded-full border-2 border-gray-200',
    config: {
      quality: 85,
      lazy: true,
    },
  });
}

// Example 10: Open Graph image (social sharing)
export function openGraphImageExample() {
  return optimizeImage({
    src: '/static/images/og-image.png',
    alt: 'Mustafa Pinjari - Django, AI, and Web Development Expert',
    width: 1200,
    height: 630,
    config: {
      quality: 90,
      priority: true,
    },
  });
}
