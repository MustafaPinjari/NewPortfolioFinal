export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur",
    "url": "https://mustafapinjari.live",
    "description": "Portfolio and blog of Mustafa Pinjari, Co-founder @ Techentrance, Full Stack Developer, and Tech Entrepreneur",
    "author": {
      "@type": "Person",
      "name": "Mustafa Pinjari",
      "url": "https://mustafapinjari.live/about"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mustafapinjari.live/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://github.com/MustafaPinjari",
      "https://www.linkedin.com/in/mustafapinjari/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebsiteSchema;