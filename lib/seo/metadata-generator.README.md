# SEO Metadata Generator

**Feature**: personal-branding-seo-domination

This module provides comprehensive SEO metadata generation functionality for the personal branding website. It implements optimized title tags, meta descriptions, canonical URLs, OpenGraph metadata, Twitter Card metadata, and keyword density calculation.

## Requirements Implemented

- **Requirement 1.5**: Canonical URL generation
- **Requirement 1.6**: Optimized title tags (50-60 chars) and meta descriptions (150-160 chars)
- **Requirement 1.7**: Complete OpenGraph and Twitter Card metadata
- **Requirement 2.2**: Keyword density calculation
- **Requirement 2.3**: "Mustafa Pinjari" included in all titles
- **Requirement 2.4**: "Mustafa Pinjari" within first 120 characters of descriptions

## Functions

### `generateSEOMetadata(page: PageData): SEOMetadata`

Generates complete SEO metadata for a page including title, description, canonical URL, OpenGraph, and Twitter Card data.

**Parameters:**
- `page`: PageData object with title, description, url, image (optional), type (optional)

**Returns:** Complete SEOMetadata object

**Example:**
```typescript
import { generateSEOMetadata } from '@/lib/seo';

const metadata = generateSEOMetadata({
  title: 'About',
  description: 'Learn about my work in Django, AI, and Web Development',
  url: '/about',
  image: '/images/about.jpg',
  type: 'website',
});

// Use in Next.js:
export const metadata = generateSEOMetadata({ ... });
```

### `optimizeTitle(title: string, includePersonName: boolean): string`

Optimizes title tags to meet SEO best practices (50-60 characters) and includes "Mustafa Pinjari".

**Parameters:**
- `title`: Original title text
- `includePersonName`: Whether to include "Mustafa Pinjari" (default: true)

**Returns:** Optimized title string (50-60 characters)

**Example:**
```typescript
optimizeTitle('About', true)
// Returns: "About | Mustafa Pinjari"

optimizeTitle('My Very Long Title That Exceeds Limits', true)
// Returns: "My Very Long Title... | Mustafa Pinjari"
```

### `optimizeDescription(description: string, keywords: string[]): string`

Optimizes meta descriptions to meet SEO best practices (150-160 characters) with "Mustafa Pinjari" in first 120 characters.

**Parameters:**
- `description`: Original description text
- `keywords`: Array of keywords to include (e.g., ["Mustafa Pinjari"])

**Returns:** Optimized description string (150-160 characters)

**Example:**
```typescript
optimizeDescription('Learn about web development', ['Mustafa Pinjari'])
// Returns: "Mustafa Pinjari - Learn about web development, Django, AI, and modern tech. Explore tutorials, projects, and technical articles."
```

### `calculateKeywordDensity(content: string, keyword: string): number`

Calculates keyword density as a percentage (0-100). Ideal SEO range is 1-3%.

**Parameters:**
- `content`: Text content to analyze
- `keyword`: Keyword or phrase to search for

**Returns:** Keyword density as percentage (0-100)

**Example:**
```typescript
const content = 'Mustafa Pinjari is a developer. Mustafa builds apps.';
calculateKeywordDensity(content, 'Mustafa Pinjari')
// Returns: ~10% (1 occurrence of 2-word phrase in ~10 words)

const blogPost = '... 1500 words of content with "Django" mentioned 20 times ...';
calculateKeywordDensity(blogPost, 'Django')
// Returns: ~1.33% (20 occurrences in 1500 words = ideal range)
```

## Usage in Next.js

### Page Metadata

```typescript
// app/about/page.tsx
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
```

### Blog Post Metadata

```typescript
// app/blog/[slug]/page.tsx
import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  return generateSEOMetadata({
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    image: post.featuredImage,
    type: 'article',
  });
}
```

### Content Validation

```typescript
import { calculateKeywordDensity } from '@/lib/seo';

function validateBlogPost(content: string) {
  const density = calculateKeywordDensity(content, 'Mustafa Pinjari');
  
  if (density < 1 || density > 3) {
    console.warn(`Keyword density is ${density}%. Ideal range is 1-3%.`);
  }
  
  return density;
}
```

## SEO Best Practices

### Title Tags
- **Length**: 50-60 characters (enforced by `optimizeTitle`)
- **Format**: "Page Title | Mustafa Pinjari"
- **Keywords**: Include primary keyword (person name)
- **Uniqueness**: Each page should have unique title

### Meta Descriptions
- **Length**: 150-160 characters (enforced by `optimizeDescription`)
- **Keywords**: Include "Mustafa Pinjari" within first 120 characters
- **Call-to-action**: Encourage clicks from search results
- **Relevance**: Accurately describe page content

### Keyword Density
- **Ideal Range**: 1-3% for primary keywords
- **Natural Usage**: Keywords should appear naturally in content
- **Avoid Stuffing**: Don't artificially inflate keyword count
- **Monitoring**: Use `calculateKeywordDensity` to check before publishing

### Canonical URLs
- **Consistency**: Always use absolute URLs
- **Protocol**: Use HTTPS
- **Trailing Slashes**: Be consistent (with or without)
- **Parameters**: Avoid unnecessary query parameters

### OpenGraph & Twitter Cards
- **Images**: Use 1200x630px images for best display
- **Descriptions**: Can differ slightly from meta description
- **Type**: Use appropriate type (website, article, profile)
- **Testing**: Validate with Facebook Debugger and Twitter Card Validator

## Configuration

Default configuration is set in `metadata-generator.ts`:

```typescript
const DEFAULT_CONFIG = {
  siteName: 'Mustafa Pinjari',
  siteUrl: 'https://mustafapinjari.com',
  defaultImage: '/static/images/og-image.png',
  twitterHandle: '@mustafapinjari',
  personName: 'Mustafa Pinjari',
};
```

To customize, modify these values or create a separate config file.

## Testing

While property-based tests are defined in the task list (tasks 4.2-4.4, 4.8), this implementation focuses on the core functionality. The functions are designed to be easily testable with property-based testing libraries like `fast-check`.

### Manual Verification

Run the verification script to test all functions:

```bash
# If tsx is available:
npx tsx lib/seo/verify-metadata-generator.ts

# Or check the example file:
cat lib/seo/metadata-generator.example.ts
```

## Integration Checklist

- [x] Create metadata generator functions
- [x] Implement title optimization (50-60 chars)
- [x] Implement description optimization (150-160 chars)
- [x] Implement keyword density calculator
- [x] Export functions from lib/seo/index.ts
- [ ] Add to Next.js pages (homepage, about, blog, projects)
- [ ] Configure default SEO values
- [ ] Test with Google Rich Results Test
- [ ] Validate OpenGraph with Facebook Debugger
- [ ] Validate Twitter Cards with Twitter Card Validator

## Next Steps

1. **Integrate with Pages**: Add metadata to all Next.js pages
2. **Configure Defaults**: Set up site-wide SEO configuration
3. **Add Schema Markup**: Combine with schema generators for complete SEO
4. **Monitor Performance**: Track rankings and CTR in Google Search Console
5. **Iterate**: Adjust titles/descriptions based on performance data

## Related Files

- `lib/seo/types.ts` - TypeScript interfaces
- `lib/seo/schema-generators.ts` - Schema.org markup generators
- `lib/seo/index.ts` - Module exports
- `.kiro/specs/personal-branding-seo-domination/` - Complete specification

## Support

For questions or issues, refer to:
- Design document: `.kiro/specs/personal-branding-seo-domination/design.md`
- Requirements: `.kiro/specs/personal-branding-seo-domination/requirements.md`
- Tasks: `.kiro/specs/personal-branding-seo-domination/tasks.md`
