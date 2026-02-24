/**
 * Analytics Types and Interfaces
 * Feature: personal-branding-seo-domination
 */

export interface WebVitalsMetric {
  name: "LCP" | "FID" | "CLS" | "TTFB" | "FCP";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
}

export interface SearchConsoleMetrics {
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  date: Date;
}

export interface KeywordPerformance {
  query: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}

export interface RankingData {
  keyword: string;
  position: number;
  url: string;
  date: Date;
  change: number;
}

export interface RankingHistory {
  keyword: string;
  history: Array<{ date: Date; position: number }>;
}

export interface Backlink {
  sourceUrl: string;
  targetUrl: string;
  anchorText: string;
  domainAuthority: number;
  discovered: Date;
  status: "active" | "lost";
}

export interface BacklinkMetrics {
  totalBacklinks: number;
  referringDomains: number;
  domainAuthority: number;
  newBacklinks: number;
  lostBacklinks: number;
}
