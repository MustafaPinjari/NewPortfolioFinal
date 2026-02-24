# Image Optimization System

This module provides utilities for optimizing images and generating SEO-friendly alt text for the personal branding SEO domination system.

## Features

- **Image Optimization**: Leverage Next.js Image component with proper sizing and lazy loading
- **Alt Text Generation**: Automatically generate descriptive, SEO-friendly alt text
- **Alt Text Validation**: Ensure alt text meets SEO best practices
- **Responsive Images**: Generate sizes and srcset for responsive images
- **Specialized Generators**: Profile and project-specific alt text generators

## Installation

The module is already integrated into the project. Import from `@/lib/images`:

```tsx
import { optimizeImage, generateAltText } from '@/lib/images';
```

## Usage

### Basic Image Optimization

```tsx
import { optimizeImage } from '@/lib/images';

function MyComponent() {
  const image = optimizeImage({
    src: '/profile.jpg',
    alt: 'Mustafa Pinjari profile photo',
    width: 400,
    height: 400,
  });

  return <div>{image}</div>;
}
```

### Image Optimization with Custom Config

```tsx
import { optimizeImage } from '@/lib/images';

const image = optimizeImage({
  src: '/hero-image.jpg',
  alt: 'Mustafa Pinjari Django development workspace',
  width: 1200,
  height: 600,
  config: {
    quality: 90,
    priority: true, // Load immediately (above the fold)
    lazy: false,
  },
});
```

### Fill Container Images

```tsx
import { optimizeImage } from '@/lib/images';

const image = optimizeImage({
  src: '/background.jpg',
  alt: 'Abstract technology background',
  fill: true,
  className: 'object-cover',
  config: {
    sizes: '100vw',
  },
});
```

### Generate Alt Text from Filename

```tsx
import { generateAltText } from '@/lib/images';

// Basic usage
const alt1 = generateAltText('profile-photo.jpg');
// Returns: "Profile Photo"

// With context
const alt2 = generateAltText('django-project-screenshot.png', {
  personName: 'Mustafa Pinjari',
  section: 'portfolio',
  keywords: ['Django', 'web development'],
});
// Returns: "Django Project Screenshot by Mustafa Pinjari - portfolio Django, web development"

// With explicit description
const alt3 = generateAltText('image.jpg', {
  description: 'Dashboard showing real-time analytics data',
});
// Returns: "Dashboard showing real-time analytics data"
```

### Profile Image Alt Text

```tsx
import { generateProfileAltText } from '@/lib/images';

const alt = generateProfileAltText('Mustafa Pinjari', 'professional headshot');
// Returns: "Mustafa Pinjari professional headshot"
```

### Project Screenshot Alt Text

```tsx
import { generateProjectAltText } from '@/lib/images';

const alt = generateProjectAltText(
  'Django Blog Platform',
  'homepage',
  'showing article list and navigation'
);
// Returns: "Django Blog Platform homepage showing article list and navigation"
```

### Validate Alt Text

```tsx
import { validateAltText } from '@/lib/images';

const result = validateAltText('Image');
console.log(result);
// {
//   valid: false,
//   issues: ['Alt text is too short', 'Alt text is too generic'],
//   suggestions: [
//     'Alt text should be at least 10 characters for better SEO',
//     'Describe what the image shows, not just that it is an image'
//   ]
// }
```

### Generate Responsive Sizes

```tsx
import { generateSizes } from '@/lib/images';

const sizes = generateSizes({
  mobile: '100vw',
  tablet: '50vw',
  desktop: '33vw',
});
// Returns: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### Generate SrcSet

```tsx
import { generateSrcSet } from '@/lib/images';

const srcset = generateSrcSet('/image.jpg', [400, 800, 1200]);
// Returns: "/image.jpg?w=400 400w, /image.jpg?w=800 800w, /image.jpg?w=1200 1200w"
```

## Complete Example

```tsx
import { optimizeImage, generateAltText } from '@/lib/images';

function ProjectCard({ project }) {
  const alt = generateAltText(project.image, {
    personName: 'Mustafa Pinjari',
    section: 'projects',
    keywords: project.technologies,
    description: project.imageDescription,
  });

  const image = optimizeImage({
    src: project.image,
    alt,
    width: 600,
    height: 400,
    config: {
      quality: 85,
      lazy: true,
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px',
    },
  });

  return (
    <div className="project-card">
      {image}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
```

## SEO Best Practices

### Alt Text Guidelines

1. **Be Descriptive**: Describe what's in the image, not just generic terms
2. **Include Keywords**: Naturally incorporate relevant keywords (e.g., "Mustafa Pinjari")
3. **Keep it Concise**: Aim for 10-125 characters
4. **Avoid Redundancy**: Don't use "image of" or "picture of"
5. **Context Matters**: Include relevant context (page, section, purpose)

### Image Optimization Guidelines

1. **Use Appropriate Quality**: 85 is a good default, 90+ for hero images
2. **Lazy Load**: Enable lazy loading for below-the-fold images
3. **Priority Loading**: Use priority for above-the-fold images
4. **Responsive Sizes**: Always provide sizes attribute for responsive images
5. **Modern Formats**: Next.js automatically serves WebP/AVIF when supported

## API Reference

### `optimizeImage(props: OptimizedImageProps): ReactElement`

Optimizes an image using Next.js Image component.

**Parameters:**
- `src` (string): Image source URL or path
- `alt` (string): Descriptive alt text
- `width` (number, optional): Image width in pixels
- `height` (number, optional): Image height in pixels
- `fill` (boolean, optional): Fill parent container
- `className` (string, optional): Additional CSS classes
- `config` (ImageOptimizationConfig, optional): Optimization configuration

**Returns:** React element with optimized image

### `generateAltText(filename: string, context?: AltTextContext): string`

Generates descriptive alt text from filename and context.

**Parameters:**
- `filename` (string): Image filename
- `context` (AltTextContext, optional): Additional context

**Returns:** Descriptive alt text string

### `validateAltText(altText: string): AltTextValidationResult`

Validates if alt text meets SEO best practices.

**Parameters:**
- `altText` (string): Alt text to validate

**Returns:** Validation result with issues and suggestions

### `generateProfileAltText(personName: string, context?: string): string`

Generates alt text for profile/avatar images.

**Parameters:**
- `personName` (string): Name of the person
- `context` (string, optional): Additional context

**Returns:** Optimized alt text for profile images

### `generateProjectAltText(projectName: string, screenshotType?: string, additionalContext?: string): string`

Generates alt text for project screenshots.

**Parameters:**
- `projectName` (string): Name of the project
- `screenshotType` (string, optional): Type of screenshot
- `additionalContext` (string, optional): Additional context

**Returns:** Optimized alt text for project images

## Requirements Validation

This implementation satisfies **Requirement 1.9**:
- ✅ Uses Next.js Image component with proper sizing
- ✅ Generates descriptive alt tags
- ✅ Includes relevant keywords naturally
- ✅ Supports lazy loading and priority loading
- ✅ Provides validation for alt text quality
