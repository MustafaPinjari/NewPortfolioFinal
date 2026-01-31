'use client';

import Image from 'next/image';
import { WorkTile } from './workTiles';

interface WorkCardProps {
  work: WorkTile;
  index: number;
  currentIndex: number;
}

export function WorkCard({ work, index, currentIndex }: WorkCardProps) {
  const isActive = index === currentIndex;

  return (
    <div className="w-full min-h-[600px] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-8 w-full">
        {/* Content Side */}
        <div className="lg:col-span-5 space-y-6">
          {/* Project Category */}
          <div className="inline-flex items-center space-x-3">
            <div className="w-12 h-px bg-muted-foreground" />
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
              {work.description}
            </span>
          </div>

          {/* Project Title */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-none">
              {work.title}
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              A comprehensive digital solution featuring modern design
              principles, seamless user experience, and cutting-edge technology
              implementation.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Framer Motion',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted border border-border rounded-full text-sm text-foreground hover:bg-accent transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="group px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all duration-300 flex items-center space-x-2">
              <span>View Project</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <button className="px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-foreground hover:bg-accent transition-all duration-300">
              Live Demo
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-7">
          <div className="relative">
            {/* Main project showcase */}
            <div className="relative group">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Device mockup */}
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser header */}
                <div className="flex items-center justify-between px-6 py-4 bg-muted border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 mx-6">
                    <div className="bg-background border border-border rounded-lg px-4 py-2 text-muted-foreground text-sm">
                      https://{work.title.toLowerCase().replace(/\s+/g, '')}.com
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-muted rounded" />
                </div>

                {/* Project screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={work.image.src}
                    alt={work.title}
                    width={work.image.width}
                    height={work.image.height}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    priority={isActive}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border">
                <div className="text-foreground text-sm font-medium">
                  Live Project
                </div>
                <div className="text-muted-foreground text-xs">
                  Click to explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
