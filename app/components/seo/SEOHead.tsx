import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  publishedAt?: string;
  modifiedAt?: string;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/static/images/og-image.png',
  ogType = 'website',
  publishedAt,
  modifiedAt,
  noIndex = false,
}: SEOHeadProps): Metadata {
  const url = `https://mustafapinjari.live${path}`;
  const fullTitle = path === '/' 
    ? 'Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur'
    : `${title} | Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Mustafa Pinjari',
      locale: 'en_US',
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(modifiedAt && { modifiedTime: modifiedAt }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@mustafapinjari',
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'theme-color': '#000000',
      'color-scheme': 'dark light',
    },
  };
}

export default generateSEOMetadata;