# Blog Management System

**Feature**: personal-branding-seo-domination  
**Requirements**: 4.4, 4.5, 11.1, 11.4, 11.6

## Overview

This module provides comprehensive blog post management utilities for the personal branding SEO system. It includes functionality for retrieving blog posts, validating content quality, generating URL slugs, and managing content metadata.

## Components

### 1. Blog Manager (`blog-manager.ts`)

Handles blog post retrieval and reading time calculations.

**Functions:**
- `getAllBlogPosts()`: Retrieves all published blog posts from the MDX files
- `getBlogPostBySlug(slug)`: Gets a specific blog post by its slug
- `calculateReadingTime(content)`: Calculates reading time based on word count (200 words/minute)

**Usage:**
```typescript
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';

// Get all posts
const posts = getAllBlogPosts();

// Get specific post
const post = getBlogPostBySlug('my-blog-post');
```

### 2. Content Validator (`content-validator.ts`)

Validates blog content for SEO compliance and quality standards.

**Functions:**
- `validateContentLength(content, minWords)`: Ensures content meets minimum word count (default: 1500 words)
- `calculateKeywordDensity(content, keyword)`: Calculates keyword density as a percentage
- `validateKeywordDensity(content, keyword, minDensity, maxDensity)`: Validates keyword density is within acceptable range (1-3%)
- `updateContentTimestamp(post)`: Updates the dateModified field
- `validateBlogPost(post, targetKeyword)`: Comprehensive validation of all blog post requirements

**Usage:**
```typescript
import { validateContentLength, validateKeywordDensity } from '@/lib/blog';

// Validate content length
const lengthResult = validateContentLength(content);
if (!lengthResult.isValid) {
  console.log(lengthResult.errors);
}

// Validate keyword density
const densityResult = validateKeywordDensity(content, 'Mustafa Pinjari');
if (densityResult.warnings.length > 0) {
  console.log(densityResult.warnings);
}
```

### 3. Slug Generator (`slug-generator.ts`)

Generates URL-safe slugs from blog post titles.

**Functions:**
- `generateSlug(title)`: Converts title to URL-safe slug (lowercase, hyphenated, no special chars)
- `generateUniqueSlug(title, existingSlugs)`: Generates unique slug by appending numbers if needed
- `isValidSlug(slug)`: Validates if a string is a valid slug

**Usage:**
```typescript
import { generateSlug, isValidSlug } from '@/lib/blog';

// Generate slug
const slug = generateSlug('How to Build a Django App');
// Result: "how-to-build-a-django-app"

// Validate slug
const isValid = isValidSlug('my-blog-post'); // true
```

## Data Models

### BlogPost Interface

```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: Date;
  updatedAt: Date;
  author: string;
  tags: string[];
  category: string;
  featuredImage: string;
  readingTime: number;
  keywords: string[];
}
```

### ValidationResult Interface

```typescript
interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}
```

## Requirements Mapping

- **Requirement 4.4**: Blog post management with minimum 1500 word count validation
- **Requirement 4.5**: URL slug generation for SEO-friendly URLs
- **Requirement 11.1**: Content length validation
- **Requirement 11.4**: Keyword density validation (1-3% range)
- **Requirement 11.6**: Content update timestamp handling

## Verification

Run the verification script to test all functionality:

```bash
npx tsx lib/blog/verify-blog-system.ts
```

## Integration

The blog management system integrates with:
- MDX blog posts in `app/thoughts/posts/`
- SEO metadata generation
- Schema.org Article markup
- Content syndication system

## Best Practices

1. **Content Length**: Aim for 1500+ words per blog post for SEO authority
2. **Keyword Density**: Maintain 1-3% density for target keywords (e.g., "Mustafa Pinjari")
3. **URL Slugs**: Use descriptive, keyword-rich slugs
4. **Update Timestamps**: Always update `dateModified` when editing content
5. **Validation**: Run validation before publishing to ensure quality standards

## Future Enhancements

- Automated content syndication to Medium and Dev.to
- SEO score calculator
- Content recommendation engine
- A/B testing for titles and descriptions
- Automated internal linking suggestions
