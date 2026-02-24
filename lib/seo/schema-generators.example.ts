/**
 * Schema Generators Usage Examples
 * Feature: personal-branding-seo-domination
 * 
 * This file demonstrates how to use the schema generators
 */

import {
  generatePersonSchema,
  generateArticleSchema,
  generateProjectSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  addSchemaId,
  createSchemaGraph,
  generatePageSchemaWithRelationships,
  type PersonData,
  type ArticleData,
  type ProjectData,
  type BreadcrumbItem,
} from './schema-generators';

// Example 1: Generate Person Schema
const personData: PersonData = {
  name: 'Mustafa Pinjari',
  description: 'Software Developer specializing in Django, AI, Web Development, and Generative Tech',
  image: 'https://mustafapinjari.com/images/profile.jpg',
  url: 'https://mustafapinjari.com',
  sameAs: [
    'https://linkedin.com/in/mustafa-pinjari',
    'https://github.com/mustafa-pinjari',
    'https://twitter.com/mustafapinjari',
    'https://medium.com/@mustafapinjari',
  ],
  jobTitle: 'Full Stack Developer',
  knowsAbout: ['Django', 'AI', 'Web Development', 'Generative Tech', 'Python', 'TypeScript'],
  alumniOf: ['University Name'],
};

const personSchema = generatePersonSchema(personData);
console.log('Person Schema:', JSON.stringify(personSchema, null, 2));

// Example 2: Generate Article Schema with Person Reference
const articleData: ArticleData = {
  headline: 'Building Scalable Django Applications',
  description: 'A comprehensive guide to building scalable Django applications with best practices',
  image: 'https://mustafapinjari.com/blog/django-scalable.jpg',
  datePublished: new Date('2024-01-15'),
  dateModified: new Date('2024-01-20'),
  authorId: 'https://mustafapinjari.com/#person',
  publisher: {
    name: 'Mustafa Pinjari',
    url: 'https://mustafapinjari.com',
    logo: 'https://mustafapinjari.com/logo.png',
  },
  mainEntityOfPage: 'https://mustafapinjari.com/blog/building-scalable-django-applications',
};

const articleSchema = generateArticleSchema(articleData);
console.log('Article Schema:', JSON.stringify(articleSchema, null, 2));

// Example 3: Generate Project Schema
const projectData: ProjectData = {
  name: 'AI-Powered Task Manager',
  description: 'An intelligent task management system powered by AI',
  url: 'https://mustafapinjari.com/projects/ai-task-manager',
  type: 'SoftwareApplication',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Web, iOS, Android',
  screenshot: 'https://mustafapinjari.com/projects/ai-task-manager/screenshot.jpg',
  authorId: 'https://mustafapinjari.com/#person',
};

const projectSchema = generateProjectSchema(projectData);
console.log('Project Schema:', JSON.stringify(projectSchema, null, 2));

// Example 4: Generate Breadcrumb Schema
const breadcrumbItems: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://mustafapinjari.com' },
  { name: 'Blog', url: 'https://mustafapinjari.com/blog' },
  { name: 'Django Tutorial', url: 'https://mustafapinjari.com/blog/django-tutorial' },
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
console.log('Breadcrumb Schema:', JSON.stringify(breadcrumbSchema, null, 2));

// Example 5: Generate Organization Schema (conditional)
const orgSchema = generateOrganizationSchema({
  name: 'Mustafa Pinjari Development',
  url: 'https://mustafapinjari.com',
  logo: 'https://mustafapinjari.com/logo.png',
  description: 'Professional software development services',
});
console.log('Organization Schema:', JSON.stringify(orgSchema, null, 2));

// Example 6: Create Complete Page Schema with Relationships
const personWithId = addSchemaId(personSchema, 'https://mustafapinjari.com/#person');
const completePageSchema = createSchemaGraph([personWithId, articleSchema]);
console.log('Complete Page Schema:', JSON.stringify(completePageSchema, null, 2));

// Example 7: Generate Page Schema with Relationships (Helper)
const pageSchemaWithRelationships = generatePageSchemaWithRelationships(
  personData,
  'https://mustafapinjari.com/#person',
  articleSchema
);
console.log('Page Schema with Relationships:', JSON.stringify(pageSchemaWithRelationships, null, 2));
