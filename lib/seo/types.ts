/**
 * SEO Types and Interfaces
 * Feature: personal-branding-seo-domination
 */

export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  alternateName?: string;
  description: string;
  image: string;
  url: string;
  sameAs: string[];
  jobTitle: string;
  worksFor?: OrganizationSchema;
  alumniOf?: string[];
  knowsAbout: string[];
  [key: string]: unknown;
}

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  [key: string]: unknown;
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: PersonSchema | { "@id": string };
  publisher: OrganizationSchema;
  mainEntityOfPage: string;
  [key: string]: unknown;
}

export interface ProjectSchema {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication" | "CreativeWork";
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
  url: string;
  author: PersonSchema | { "@id": string };
  screenshot?: string;
  [key: string]: unknown;
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
  [key: string]: unknown;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
  robots?: {
    index: boolean;
    follow: boolean;
  };
}

export interface PageData {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
  locale: string;
  targetKeywords: {
    primary: string[];
    secondary: string[];
    longTail: string[];
  };
  structuredData: {
    enablePerson: boolean;
    enableOrganization: boolean;
    enableBreadcrumbs: boolean;
    enableArticle: boolean;
  };
}
