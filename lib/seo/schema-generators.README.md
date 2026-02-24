# Schema.org Markup Generators

This module provides comprehensive Schema.org markup generators for the personal branding SEO domination system.

## Features

- ✅ Person schema generation with full profile support
- ✅ Article/BlogPosting schema for blog content
- ✅ Project schema (SoftwareApplication & CreativeWork)
- ✅ Breadcrumb navigation schema
- ✅ Organization schema (conditional)
- ✅ Entity relationship handling with @id references
- ✅ Schema graph creation for complex pages

## Usage

### Person Schema

Generate a Person schema with all required and optional properties:

```typescript
import { generatePersonSchema } from './schema-generators';

const personSchema = generatePersonSchema({
  name: 'Mustafa Pinjari',
  description: 'Software Developer specializing in Django, AI, and Web Development',
  image: 'https://example.com/profile.jpg',
  url: 'https://example.com',
  sameAs: [
    'https://linkedin.com/in/mustafa-pinjari',
    'https://github.com/mustafa-pinjari',
  ],
  jobTitle: 'Full Stack Developer',
  knowsAbout: ['Django', 'AI', 'Web Development'],
  alumniOf: ['University Name'], // Optional
  worksFor: { // Optional
    name: 'Company Name',
    url: 'https://company.com',
  },
});
```

### Article Schema

Generate an Article/BlogPosting schema with author reference:

```typescript
import { generateArticleSchema } from './schema-generators';

const articleSchema = generateArticleSchema({
  headline: 'My Blog Post Title',
  description: 'A comprehensive guide to...',
  image: 'https://example.com/article.jpg',
  datePublished: new Date('2024-01-15'),
  dateModified: new Date('2024-01-20'),
  authorId: 'https://example.com/#person', // Reference to Person schema
  publisher: {
    name: 'Publisher Name',
    url: 'https://example.com',
  },
  mainEntityOfPage: 'https://example.com/blog/my-post',
});
```

### Project Schema

Generate a Project schema (SoftwareApplication or CreativeWork):

```typescript
import { generateProjectSchema } from './schema-generators';

const projectSchema = generateProjectSchema({
  name: 'My Project',
  description: 'An amazing project',
  url: 'https://example.com/projects/my-project',
  type: 'SoftwareApplication',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web, iOS, Android',
  screenshot: 'https://example.com/screenshot.jpg',
  authorId: 'https://example.com/#person',
});
```

### Breadcrumb Schema

Generate a BreadcrumbList schema for navigation:

```typescript
import { generateBreadcrumbSchema } from './schema-generators';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://example.com' },
  { name: 'Blog', url: 'https://example.com/blog' },
  { name: 'Article', url: 'https://example.com/blog/article' },
]);
```

### Organization Schema (Conditional)

Generate an Organization schema only when data is provided:

```typescript
import { generateOrganizationSchema } from './schema-generators';

// Returns null if no data provided
const orgSchema = generateOrganizationSchema();

// Returns valid schema when data provided
const orgSchema = generateOrganizationSchema({
  name: 'Company Name',
  url: 'https://company.com',
  logo: 'https://company.com/logo.png',
  description: 'Company description',
});
```

### Entity Relationships

Create complex schema graphs with proper entity relationships:

```typescript
import {
  generatePersonSchema,
  generateArticleSchema,
  addSchemaId,
  createSchemaGraph,
  generatePageSchemaWithRelationships,
} from './schema-generators';

// Method 1: Manual graph creation
const person = addSchemaId(
  generatePersonSchema(personData),
  'https://example.com/#person'
);

const article = generateArticleSchema({
  ...articleData,
  authorId: 'https://example.com/#person', // Reference the person
});

const graph = createSchemaGraph([person, article]);

// Method 2: Helper function
const pageSchema = generatePageSchemaWithRelationships(
  personData,
  'https://example.com/#person',
  article
);
```

## Schema Validation

All generated schemas are validated against Schema.org specifications and include:

- Proper @context and @type properties
- Required properties for each schema type
- Optional properties when provided
- Entity relationships via @id references
- Nested schema structures

## Requirements Coverage

This implementation satisfies the following requirements:

- **1.1**: Person schema with all required properties
- **3.1**: Complete Person schema implementation
- **3.2**: Project schema (SoftwareApplication & CreativeWork)
- **3.3**: Article/BlogPosting schema with author reference
- **3.4**: BreadcrumbList schema generation
- **3.5**: Conditional Organization schema
- **3.7**: Entity relationship handling with @id references

## Next Steps

1. Integrate schemas into Next.js pages
2. Add schema validation tests
3. Implement property-based tests for schema generation
4. Create React components for schema injection

## See Also

- [Schema.org Documentation](https://schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Design Document](../../.kiro/specs/personal-branding-seo-domination/design.md)
