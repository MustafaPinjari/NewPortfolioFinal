interface BlogPostSchemaProps {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  slug: string;
  readingTime?: string;
  tags?: string[];
}

export const BlogPostSchema = ({ 
  title, 
  description, 
  publishedAt, 
  modifiedAt, 
  slug,
  readingTime,
  tags = []
}: BlogPostSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `https://mustafapinjari.live/thoughts/${slug}`,
    "datePublished": publishedAt,
    "dateModified": modifiedAt || publishedAt,
    "author": {
      "@type": "Person",
      "name": "Mustafa Pinjari",
      "url": "https://mustafapinjari.live/about"
    },
    "publisher": {
      "@type": "Person",
      "name": "Mustafa Pinjari",
      "url": "https://mustafapinjari.live"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mustafapinjari.live/thoughts/${slug}`
    },
    "image": `https://mustafapinjari.live/static/images/thoughts/${slug}-og.png`,
    ...(readingTime && { "timeRequired": readingTime }),
    ...(tags.length > 0 && { "keywords": tags.join(", ") }),
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://mustafapinjari.live/thoughts"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BlogPostSchema;