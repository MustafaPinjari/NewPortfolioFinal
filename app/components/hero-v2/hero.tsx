'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { InteractiveGridPatternDemo } from '../ui/interactive-grid-pattern-demo';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import { XIcon } from '../layouts/icons/x-icon';
import { MorphingText } from '../ui/morphing-text';
import { Highlighter } from '../../registry/magicui/highlighter';

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Interactive Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPatternDemo />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-12">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Mustafa Pinjari
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <MorphingText
                texts={[
                  'I build things for the web.',
                  'I create digital experiences.',
                  'I solve complex problems.',
                  'I turn ideas into reality.',
                ]}
                duration={2500}
              />
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I&apos;m{' '}
            <Highlighter action="underline" color="#3B82F6">
              Mustafa Pinjari
            </Highlighter>{' '}
            — a passionate technologist and co-founder at{' '}
            <Highlighter action="highlight" color="rgba(59, 130, 246, 0.15)">
              <a
                href="https://techentrance.com"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Techentrance
              </a>
            </Highlighter>
            . I love building{' '}
            <Highlighter action="highlight" color="rgba(34, 197, 94, 0.15)">
              innovative solutions
            </Highlighter>{' '}
            and creating meaningful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xl font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center justify-center px-10 py-4 text-xl font-semibold text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              About Me
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center space-x-8 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
              Connect with me:
            </span>
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/in/mustafapinjari/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
              >
                <LinkedinIcon className="h-8 w-8" />
              </Link>
              <Link
                href="https://github.com/MustafaPinjari"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 transform hover:scale-125"
              >
                <GithubIcon className="h-8 w-8" />
              </Link>
              <Link
                href="https://x.com/PINJARIMUSTAFA_"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter"
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors duration-300 transform hover:scale-125"
              >
                <XIcon className="h-8 w-8" />
              </Link>
              <Link
                href="mailto:mustafapinjari344@gmail.com"
                aria-label="email"
                rel="noreferrer"
                className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300 transform hover:scale-125"
              >
                <AtSignIcon className="h-8 w-8" />
              </Link>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { href: '/projects', label: 'Projects' },
              { href: '/thoughts', label: 'Thoughts' },
              { href: '/uses', label: 'Uses' },
              { href: '/stats', label: 'Stats' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg font-medium relative group px-2 py-1"
              >
                /{link.label.toLowerCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          role="presentation"
          className="flex cursor-pointer flex-col items-center justify-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
          onClick={() => {
            const intro = document.querySelector('#intro');
            intro?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span className="text-sm font-medium">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </main>
  );
}
