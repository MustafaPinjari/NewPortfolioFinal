/**
 * Project Types and Interfaces
 * Feature: personal-branding-seo-domination
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featuredImage: string;
  gallery: string[];
  githubUrl?: string;
  liveUrl?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  publishedAt: Date;
}
