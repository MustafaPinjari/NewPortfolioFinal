export const PersonSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mustafa Pinjari',
    url: 'https://mustafapinjari.live',
    sameAs: [
      'https://github.com/MustafaPinjari',
      'https://www.linkedin.com/in/mustafapinjari/',
    ],
    jobTitle: 'Full Stack Developer & Tech Entrepreneur',
    worksFor: {
      '@type': 'Organization',
      name: 'Techentrance',
    },
    description:
      'Co-founder @ Techentrance | Full Stack Developer | Tech Enthusiast | Building innovative web solutions',
    image: 'https://mustafapinjari.live/static/images/profile.jpeg',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default PersonSchema;
