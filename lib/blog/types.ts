/**
 * Blog Types and Interfaces
 * Feature: personal-branding-seo-domination
 */

export interface BlogPost {
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

export interface ContentMetadata {
  id: string;
  type: "blog" | "project" | "page";
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  publishedAt: Date;
  updatedAt: Date;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    noindex: boolean;
    nofollow: boolean;
  };
}
