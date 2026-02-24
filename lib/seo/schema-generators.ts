/**
 * Schema.org Markup Generators
 * Feature: personal-branding-seo-domination
 */

import {
  PersonSchema,
  ArticleSchema,
  ProjectSchema,
  BreadcrumbSchema,
  OrganizationSchema,
} from './types';
import { BlogPost } from '../blog/types';
import { Project } from '../projects/types';

/**
 * Input data for Person schema generation
 */
export interface PersonData {
  name: string;
  alternateName?: string;
  description: string;
  image: string;
  url: string;
  sameAs: string[];
  jobTitle: string;
  worksFor?: {
    name: string;
    url: string;
    logo?: string;
    description?: string;
  };
  alumniOf?: string[];
  knowsAbout: string[];
}

/**
 * Generate Person schema markup
 * 
 * @param data - Person data including required and optional properties
 * @returns Valid Person schema JSON-LD
 * 
 * Requirements: 1.1, 3.1
 */
export function generatePersonSchema(data: PersonData): PersonSchema {
  const schema: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    sameAs: data.sameAs,
    jobTitle: data.jobTitle,
    knowsAbout: data.knowsAbout,
  };

  // Add optional properties if provided
  if (data.alternateName) {
    schema.alternateName = data.alternateName;
  }

  if (data.worksFor) {
    schema.worksFor = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: data.worksFor.name,
      url: data.worksFor.url,
      ...(data.worksFor.logo && { logo: data.worksFor.logo }),
      ...(data.worksFor.description && { description: data.worksFor.description }),
    };
  }

  if (data.alumniOf && data.alumniOf.length > 0) {
    schema.alumniOf = data.alumniOf;
  }

  return schema;
}

/**
 * Input data for Article schema generation
 */
export interface ArticleData {
  headline: string;
  description: string;
  image: string;
  datePublished: Date;
  dateModified: Date;
  authorId?: string; // Optional @id reference to Person schema
  authorData?: PersonData; // Optional full Person data
  publisher: {
    name: string;
    url: string;
    logo?: string;
  };
  mainEntityOfPage: string;
}

/**
 * Generate Article/BlogPosting schema markup
 * 
 * @param data - Article data including required properties
 * @returns Valid BlogPosting schema JSON-LD
 * 
 * Requirements: 3.3
 */
export function generateArticleSchema(data: ArticleData): ArticleSchema {
  // Determine author representation
  let author: PersonSchema | { "@id": string };
  
  if (data.authorId) {
    // Use @id reference for entity linking
    author = { "@id": data.authorId };
  } else if (data.authorData) {
    // Use full Person schema
    author = generatePersonSchema(data.authorData);
  } else {
    throw new Error("Either authorId or authorData must be provided");
  }

  const schema: ArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished.toISOString(),
    dateModified: data.dateModified.toISOString(),
    author,
    publisher: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: data.publisher.name,
      url: data.publisher.url,
      ...(data.publisher.logo && { logo: data.publisher.logo }),
    },
    mainEntityOfPage: data.mainEntityOfPage,
  };

  return schema;
}

/**
 * Generate Article schema from BlogPost
 * Convenience function that converts BlogPost to ArticleSchema
 * 
 * @param post - BlogPost object
 * @param authorId - Optional @id reference to Person schema
 * @param authorData - Optional full Person data
 * @param publisherData - Publisher organization data
 * @returns Valid BlogPosting schema JSON-LD
 */
export function generateArticleSchemaFromBlogPost(
  post: BlogPost,
  publisherData: { name: string; url: string; logo?: string },
  authorId?: string,
  authorData?: PersonData
): ArticleSchema {
  return generateArticleSchema({
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    authorId,
    authorData,
    publisher: publisherData,
    mainEntityOfPage: `${publisherData.url}/blog/${post.slug}`,
  });
}

/**
 * Input data for Project schema generation
 */
export interface ProjectData {
  name: string;
  description: string;
  url: string;
  type: "SoftwareApplication" | "CreativeWork";
  applicationCategory?: string;
  operatingSystem?: string;
  screenshot?: string;
  authorId?: string; // Optional @id reference to Person schema
  authorData?: PersonData; // Optional full Person data
}

/**
 * Generate Project schema markup
 * Supports both SoftwareApplication and CreativeWork types
 * 
 * @param data - Project data including required and optional properties
 * @returns Valid SoftwareApplication or CreativeWork schema JSON-LD
 * 
 * Requirements: 3.2
 */
export function generateProjectSchema(data: ProjectData): ProjectSchema {
  // Determine author representation
  let author: PersonSchema | { "@id": string };
  
  if (data.authorId) {
    // Use @id reference for entity linking
    author = { "@id": data.authorId };
  } else if (data.authorData) {
    // Use full Person schema
    author = generatePersonSchema(data.authorData);
  } else {
    throw new Error("Either authorId or authorData must be provided");
  }

  const schema: ProjectSchema = {
    "@context": "https://schema.org",
    "@type": data.type,
    name: data.name,
    description: data.description,
    url: data.url,
    author,
  };

  // Add optional properties if provided
  if (data.applicationCategory) {
    schema.applicationCategory = data.applicationCategory;
  }

  if (data.operatingSystem) {
    schema.operatingSystem = data.operatingSystem;
  }

  if (data.screenshot) {
    schema.screenshot = data.screenshot;
  }

  return schema;
}

/**
 * Generate Project schema from Project object
 * Convenience function that converts Project to ProjectSchema
 * 
 * @param project - Project object
 * @param baseUrl - Base URL for constructing project URL
 * @param type - Schema type (SoftwareApplication or CreativeWork)
 * @param authorId - Optional @id reference to Person schema
 * @param authorData - Optional full Person data
 * @returns Valid SoftwareApplication or CreativeWork schema JSON-LD
 */
export function generateProjectSchemaFromProject(
  project: Project,
  baseUrl: string,
  type: "SoftwareApplication" | "CreativeWork" = "SoftwareApplication",
  authorId?: string,
  authorData?: PersonData
): ProjectSchema {
  return generateProjectSchema({
    name: project.title,
    description: project.description,
    url: `${baseUrl}/projects/${project.slug}`,
    type,
    applicationCategory: project.category,
    screenshot: project.featuredImage,
    authorId,
    authorData,
  });
}

/**
 * Breadcrumb item for navigation path
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate Breadcrumb schema markup
 * Creates BreadcrumbList from navigation path array
 * 
 * @param items - Array of breadcrumb items with name and URL
 * @returns Valid BreadcrumbList schema JSON-LD
 * 
 * Requirements: 3.4
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  const schema: BreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1, // Position starts at 1
      name: item.name,
      item: item.url,
    })),
  };

  return schema;
}

/**
 * Generate Breadcrumb schema from URL path
 * Convenience function that constructs breadcrumbs from a URL path
 * 
 * @param path - URL path (e.g., "/blog/my-post")
 * @param baseUrl - Base URL for constructing full URLs
 * @param labels - Optional custom labels for path segments
 * @returns Valid BreadcrumbList schema JSON-LD
 * 
 * @example
 * generateBreadcrumbSchemaFromPath("/blog/my-post", "https://example.com", { blog: "Blog" })
 * // Returns breadcrumbs: Home > Blog > My Post
 */
export function generateBreadcrumbSchemaFromPath(
  path: string,
  baseUrl: string,
  labels?: Record<string, string>
): BreadcrumbSchema {
  const segments = path.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [
    { name: "Home", url: baseUrl },
  ];

  let currentPath = baseUrl;
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = labels?.[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    items.push({
      name: label,
      url: currentPath,
    });
  });

  return generateBreadcrumbSchema(items);
}

/**
 * Input data for Organization schema generation
 */
export interface OrganizationData {
  name: string;
  url: string;
  logo?: string;
  description?: string;
}

/**
 * Generate Organization schema markup (conditional)
 * Only generates schema when organization data is provided
 * 
 * @param data - Organization data (optional)
 * @returns Valid Organization schema JSON-LD or null if no data provided
 * 
 * Requirements: 3.5
 */
export function generateOrganizationSchema(data?: OrganizationData): OrganizationSchema | null {
  if (!data) {
    return null;
  }

  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
  };

  // Add optional properties if provided
  if (data.logo) {
    schema.logo = data.logo;
  }

  if (data.description) {
    schema.description = data.description;
  }

  return schema;
}

/**
 * Schema entity with @id for referencing
 */
export interface SchemaEntity {
  "@id": string;
  [key: string]: unknown;
}

/**
 * Add @id to a schema for entity linking
 * 
 * @param schema - Any schema object
 * @param id - Unique identifier (typically a URL)
 * @returns Schema with @id property
 * 
 * Requirements: 3.7
 */
export function addSchemaId<T extends Record<string, unknown>>(schema: T, id: string): T & { "@id": string } {
  return {
    ...schema,
    "@id": id,
  };
}

/**
 * Create a reference to another schema entity
 * 
 * @param id - The @id of the entity to reference
 * @returns Object with @id reference
 * 
 * Requirements: 3.7
 */
export function createSchemaReference(id: string): { "@id": string } {
  return { "@id": id };
}

/**
 * Validate schema relationships
 * Checks that referenced entities have valid @id properties
 * 
 * @param schema - Schema object to validate
 * @param referencedIds - Set of valid @id values that can be referenced
 * @returns True if all references are valid
 * 
 * Requirements: 3.7
 */
export function validateSchemaRelationships(
  schema: Record<string, unknown>,
  referencedIds: Set<string>
): boolean {
  // Check if schema has author reference
  if (schema.author && typeof schema.author === 'object' && schema.author !== null && '@id' in schema.author) {
    const authorId = (schema.author as { '@id': string })['@id'];
    if (!referencedIds.has(authorId)) {
      return false;
    }
  }

  // Check if schema has publisher reference
  if (schema.publisher && typeof schema.publisher === 'object' && schema.publisher !== null && '@id' in schema.publisher) {
    const publisherId = (schema.publisher as { '@id': string })['@id'];
    if (!referencedIds.has(publisherId)) {
      return false;
    }
  }

  return true;
}

/**
 * Create a complete schema graph with entity relationships
 * Combines multiple schemas with proper @id references
 * 
 * @param schemas - Array of schemas to combine
 * @returns Schema graph with @graph property
 * 
 * Requirements: 3.7
 * 
 * @example
 * const person = addSchemaId(generatePersonSchema(personData), "https://example.com/#person");
 * const article = generateArticleSchema({ ...articleData, authorId: "https://example.com/#person" });
 * const graph = createSchemaGraph([person, article]);
 */
export function createSchemaGraph(schemas: Array<Record<string, unknown>>): {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
} {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

/**
 * Helper to generate a complete page schema with all relationships
 * Useful for pages that need Person + Article or Person + Project schemas
 * 
 * @param personData - Person data
 * @param personId - Unique ID for the person entity
 * @param contentSchema - Article or Project schema (will use personId as author reference)
 * @returns Complete schema graph with proper entity relationships
 * 
 * Requirements: 3.7
 */
export function generatePageSchemaWithRelationships(
  personData: PersonData,
  personId: string,
  contentSchema: ArticleSchema | ProjectSchema
): {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
} {
  // Generate Person schema with @id
  const personSchema = addSchemaId(generatePersonSchema(personData), personId);

  // Content schema should already have author reference to personId
  // Validate the relationship
  const referencedIds = new Set([personId]);
  if (!validateSchemaRelationships(contentSchema as Record<string, unknown>, referencedIds)) {
    console.warn("Schema relationships validation failed - author reference may be invalid");
  }

  return createSchemaGraph([personSchema, contentSchema as Record<string, unknown>]);
}
