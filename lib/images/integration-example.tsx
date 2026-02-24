/**
 * Integration example showing how to use the image optimization system
 * in actual React components throughout the application.
 * 
 * This file demonstrates real-world usage patterns.
 */

'use client';

import { optimizeImage, generateAltText, generateProfileAltText } from '@/lib/images';

/**
 * Example 1: Profile section with optimized avatar
 */
export function ProfileSection() {
  const alt = generateProfileAltText('Mustafa Pinjari', 'professional headshot');
  
  const avatarImage = optimizeImage({
    src: '/static/images/avatar.webp',
    alt,
    width: 200,
    height: 200,
    className: 'rounded-full border-4 border-white shadow-lg',
    config: {
      quality: 90,
      priority: true, // Above the fold
    },
  });

  return (
    <div className="profile-section">
      {avatarImage}
      <h1>Mustafa Pinjari</h1>
      <p>Django, AI & Web Development Expert</p>
    </div>
  );
}

/**
 * Example 2: Blog post with featured image
 */
interface BlogPostProps {
  title: string;
  slug: string;
  featuredImage: string;
  tags: string[];
}

export function BlogPostCard({ title, slug, featuredImage, tags }: BlogPostProps) {
  const alt = generateAltText(featuredImage, {
    personName: 'Mustafa Pinjari',
    section: 'blog',
    keywords: tags.slice(0, 3),
    description: `${title} tutorial and guide`,
  });

  const image = optimizeImage({
    src: featuredImage,
    alt,
    width: 800,
    height: 450,
    className: 'rounded-lg',
    config: {
      quality: 85,
      lazy: true,
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px',
    },
  });

  return (
    <article className="blog-post-card">
      <a href={`/thoughts/${slug}`}>
        {image}
        <h2>{title}</h2>
      </a>
    </article>
  );
}

/**
 * Example 3: Project showcase with screenshot
 */
interface ProjectProps {
  name: string;
  slug: string;
  screenshot: string;
  technologies: string[];
}

export function ProjectCard({ name, slug, screenshot, technologies }: ProjectProps) {
  const alt = generateAltText(screenshot, {
    personName: 'Mustafa Pinjari',
    section: 'portfolio',
    keywords: technologies,
    description: `${name} application interface`,
  });

  const image = optimizeImage({
    src: screenshot,
    alt,
    width: 600,
    height: 400,
    className: 'rounded-lg shadow-xl hover:shadow-2xl transition-shadow',
    config: {
      quality: 85,
      lazy: true,
    },
  });

  return (
    <div className="project-card">
      <a href={`/projects/${slug}`}>
        {image}
        <h3>{name}</h3>
        <div className="technologies">
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}

/**
 * Example 4: Hero section with background image
 */
export function HeroSection() {
  const backgroundImage = optimizeImage({
    src: '/static/images/hero-background.jpg',
    alt: 'Mustafa Pinjari workspace showing Django and AI development environment',
    fill: true,
    className: 'object-cover',
    config: {
      quality: 90,
      priority: true,
      sizes: '100vw',
    },
  });

  return (
    <section className="hero relative h-screen">
      {backgroundImage}
      <div className="hero-content relative z-10">
        <h1>Mustafa Pinjari</h1>
        <p>Building the future with Django, AI & Web Technologies</p>
      </div>
    </section>
  );
}

/**
 * Example 5: Technology stack logos
 */
export function TechnologyStack() {
  const technologies = [
    { name: 'Django', logo: '/static/images/tech/django.png' },
    { name: 'React', logo: '/static/images/tech/react.png' },
    { name: 'Python', logo: '/static/images/tech/python.png' },
    { name: 'TypeScript', logo: '/static/images/tech/typescript.png' },
  ];

  return (
    <div className="tech-stack">
      <h2>Technology Stack</h2>
      <div className="tech-logos">
        {technologies.map((tech) => {
          const alt = `${tech.name} logo - technology used by Mustafa Pinjari`;
          const image = optimizeImage({
            src: tech.logo,
            alt,
            width: 80,
            height: 80,
            config: {
              quality: 90,
              lazy: true,
            },
          });

          return (
            <div key={tech.name} className="tech-logo">
              {image}
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Example 6: Testimonial with client photo
 */
interface TestimonialProps {
  clientName: string;
  clientPhoto: string;
  testimonial: string;
  company: string;
}

export function Testimonial({ clientName, clientPhoto, testimonial, company }: TestimonialProps) {
  const alt = `${clientName} from ${company} - client testimonial`;
  
  const image = optimizeImage({
    src: clientPhoto,
    alt,
    width: 80,
    height: 80,
    className: 'rounded-full',
    config: {
      quality: 85,
      lazy: true,
    },
  });

  return (
    <div className="testimonial">
      {image}
      <blockquote>{testimonial}</blockquote>
      <cite>
        {clientName}, {company}
      </cite>
    </div>
  );
}

/**
 * Example 7: Gallery with multiple images
 */
interface GalleryImage {
  src: string;
  caption: string;
}

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="image-gallery grid grid-cols-3 gap-4">
      {images.map((img, index) => {
        const alt = generateAltText(img.src, {
          personName: 'Mustafa Pinjari',
          description: img.caption,
        });

        const image = optimizeImage({
          src: img.src,
          alt,
          width: 400,
          height: 300,
          className: 'rounded-lg cursor-pointer hover:scale-105 transition-transform',
          config: {
            quality: 85,
            lazy: index > 2, // Lazy load images after the first 3
          },
        });

        return (
          <figure key={img.src}>
            {image}
            <figcaption className="text-sm text-gray-600 mt-2">
              {img.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
