 
'use client';

import { cn } from '@/lib/utils';
import { Marquee } from './marquee';

// GitHub repositories data
const repositories = [
  {
    name: 'GuestureFlow',
    description:
      'A tool to control digital things using hand gestures — connects real-world motion to actions in a browser or app.',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    topics: ['javascript', 'hand-gesture', 'gesture-control', 'webcam'],
    color: '#f1e05a',
    url: 'https://github.com/MustafaPinjari/GuestureFlow',
  },
  {
    name: 'NextGenCV',
    description:
      'AI-powered resume builder with dynamic UI — uses automation to generate modern CV templates.',
    language: 'CSS',
    stars: 0,
    forks: 0,
    topics: ['css', 'html', 'javascript', 'resume-builder'],
    color: '#563d7c',
    url: 'https://github.com/MustafaPinjari/NextGenCV',
  },
  {
    name: 'Python-Projects',
    description:
      'A collection of various Python projects showing scripting, automation, and utility tools.',
    language: 'Python',
    stars: 0,
    forks: 0,
    topics: ['python', 'scripts', 'automation', 'learning'],
    color: '#3572A5',
    url: 'https://github.com/MustafaPinjari/Python-Projects',
  },
  {
    name: 'Portfolio-Site',
    description:
      'Personal developer portfolio showcasing projects and skills with modern web technologies.',
    language: 'TypeScript',
    stars: 2,
    forks: 1,
    topics: ['portfolio', 'nextjs', 'tailwindcss', 'responsive'],
    color: '#3178c6',
    url: 'https://github.com/MustafaPinjari/portfolio-site',
  },
  {
    name: 'React-Dashboard',
    description:
      'Modern dashboard template built with React and contemporary UI libraries for data visualization.',
    language: 'TypeScript',
    stars: 3,
    forks: 1,
    topics: ['react', 'dashboard', 'typescript', 'components'],
    color: '#3178c6',
    url: 'https://github.com/MustafaPinjari/React-Dashboard',
  },
  {
    name: 'JS-Utility-Toolkit',
    description:
      'Collection of helper functions and utilities for common JavaScript development tasks.',
    language: 'JavaScript',
    stars: 1,
    forks: 0,
    topics: ['javascript', 'utilities', 'helpers', 'devtools'],
    color: '#f1e05a',
    url: 'https://github.com/MustafaPinjari/JS-Utility-Toolkit',
  },
  {
    name: 'Web-Automation-Tools',
    description:
      'Automation scripts and tools for web development workflows and repetitive tasks.',
    language: 'Python',
    stars: 2,
    forks: 0,
    topics: ['python', 'automation', 'web-scraping', 'tools'],
    color: '#3572A5',
    url: 'https://github.com/MustafaPinjari/Web-Automation-Tools',
  },
  {
    name: 'Modern-UI-Components',
    description:
      'Reusable UI component library with modern design patterns and accessibility features.',
    language: 'TypeScript',
    stars: 4,
    forks: 2,
    topics: ['react', 'components', 'ui-library', 'accessibility'],
    color: '#3178c6',
    url: 'https://github.com/MustafaPinjari/Modern-UI-Components',
  },
];

// Create different rows with unique items
const firstRow = repositories.slice(0, 2);
const secondRow = repositories.slice(2, 4);
const thirdRow = repositories.slice(4, 6);
const fourthRow = repositories.slice(6, 8);

const RepoCard = ({
  name,
  description,
  language,
  stars,
  forks,
  topics,
  color,
  url,
}: {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  color: string;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full w-full transition-all duration-300 hover:scale-[1.02] block"
    >
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-sky-500 opacity-20 blur transition-all duration-300 group-hover:opacity-40" />
      <figure
        className={cn(
          'relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4 backdrop-blur-sm',
          // black theme styles
          'border-gray-800 bg-gray-900/90 shadow-lg hover:bg-gray-800/90',
          'text-white',
        )}
      >
        <div className="flex flex-col space-y-3">
          {/* Repository Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs font-medium text-gray-300">
                {language}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {stars}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {forks}
              </span>
            </div>
          </div>

          {/* Repository Name */}
          <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
            {name}
          </h3>

          {/* Repository Description */}
          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-1">
            {topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-300"
              >
                {topic}
              </span>
            ))}
            {topics.length > 3 && (
              <span className="text-xs text-gray-500">
                +{topics.length - 3}
              </span>
            )}
          </div>

          {/* GitHub Link Indicator */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-gray-400">View on GitHub</span>
            <svg
              className="h-3 w-3 text-gray-400 group-hover:text-blue-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </figure>
    </a>
  );
};

export function Marquee3D() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex items-center justify-center [perspective:1000px]">
        <div
          className="flex gap-8"
          style={{
            transform: 'rotateX(-15deg) rotateY(15deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* First Column */}
          <Marquee
            vertical
            className="h-[600px] w-80 [--duration:60s]"
            pauseOnHover
          >
            {firstRow.map((repo, i) => (
              <div
                key={`first-${i}`}
                className="mb-6 animate-float-in-out"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  transform: `translateZ(${Math.sin(i * 0.5) * 20}px)`,
                }}
              >
                <RepoCard {...repo} />
              </div>
            ))}
          </Marquee>

          {/* Second Column - Reverse direction */}
          <Marquee
            vertical
            reverse
            className="h-[600px] w-80 [--duration:70s]"
            pauseOnHover
          >
            {secondRow.map((repo, i) => (
              <div
                key={`second-${i}`}
                className="mb-6 animate-float-in-out"
                style={{
                  animationDelay: `${i * 0.7}s`,
                  transform: `translateZ(${Math.cos(i * 0.7) * 30}px)`,
                }}
              >
                <RepoCard {...repo} />
              </div>
            ))}
          </Marquee>

          {/* Third Column */}
          <Marquee
            vertical
            className="h-[600px] w-80 [--duration:80s]"
            pauseOnHover
          >
            {thirdRow.map((repo, i) => (
              <div
                key={`third-${i}`}
                className="mb-6 animate-float-in-out"
                style={{
                  animationDelay: `${i * 0.9}s`,
                  transform: `translateZ(${Math.sin(i * 0.9) * 25}px)`,
                }}
              >
                <RepoCard {...repo} />
              </div>
            ))}
          </Marquee>

          {/* Fourth Column - Reverse direction */}
          <Marquee
            vertical
            reverse
            className="h-[600px] w-80 [--duration:90s]"
            pauseOnHover
          >
            {fourthRow.map((repo, i) => (
              <div
                key={`fourth-${i}`}
                className="mb-6 animate-float-in-out"
                style={{
                  animationDelay: `${i * 1.1}s`,
                  transform: `translateZ(${Math.cos(i * 1.1) * 35}px)`,
                }}
              >
                <RepoCard {...repo} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Enhanced gradient overlays with depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
