export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Techentrance",
    "url": "https://techentrance.com",
    "founder": {
      "@type": "Person",
      "name": "Mustafa Pinjari",
      "url": "https://mustafapinjari.live"
    },
    "description": "Innovative technology solutions and web development services",
    "sameAs": [
      "https://github.com/MustafaPinjari"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;