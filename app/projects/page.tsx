import Projects from 'app/projects/projects';
import { Fragment } from 'react';
import Header from '../components/header';

export const metadata = {
  title: 'Projects - Mustafa Pinjari',
  description: 'Explore my portfolio of web development projects, including full-stack applications, React components, and innovative tech solutions. See my work in action.',
  keywords: ['Mustafa Pinjari projects', 'web development portfolio', 'React projects', 'full stack applications', 'JavaScript projects', 'TypeScript projects'],
  openGraph: {
    title: 'Projects - Mustafa Pinjari',
    description: 'Explore my portfolio of web development projects, including full-stack applications, React components, and innovative tech solutions.',
    url: 'https://mustafapinjari.live/projects',
    type: 'website',
    images: [
      {
        url: '/static/images/projects-og.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari - Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Mustafa Pinjari',
    description: 'Explore my portfolio of web development projects and innovative tech solutions.',
  },
  alternates: {
    canonical: 'https://mustafapinjari.live/projects',
  },
};

export default function Page() {
  return (
    <Fragment>
      <Header title="Projects" />
      <div className="space-y-2 md:space-y-5 ">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some of my selected projects worth sharing.
        </p>
      </div>
      <Projects />
    </Fragment>
  );
}
