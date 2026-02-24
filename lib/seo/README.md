# SEO Infrastructure

This directory contains the SEO infrastructure for the personal branding SEO domination system.

## Structure

- `types.ts` - TypeScript interfaces for SEO entities (Schema.org markup, metadata, configuration)
- `index.ts` - Module exports

## Types Defined

### Schema.org Types
- `PersonSchema` - Person entity markup
- `OrganizationSchema` - Organization entity markup
- `ArticleSchema` - Blog post/article markup
- `ProjectSchema` - Project/software application markup
- `BreadcrumbSchema` - Breadcrumb navigation markup

### Metadata Types
- `SEOMetadata` - Complete SEO metadata including OpenGraph and Twitter Cards
- `PageData` - Page-level data for metadata generation
- `SEOConfig` - Site-wide SEO configuration

## Dependencies

- `next-seo` (^7.2.0) - Next.js SEO utilities
- `schema-dts` (^1.1.5) - TypeScript definitions for Schema.org

## Requirements Addressed

- 1.1: Schema.org Person JSON-LD markup
- 1.3: Sitemap.xml generation
- 1.4: Robots.txt generation
- 1.5: Canonical tags
- 1.6: Optimized meta tags
- 1.7: OpenGraph and Twitter Card metadata
