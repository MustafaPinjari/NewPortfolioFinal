'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useContext, useRef } from 'react';
import { ArrowDownIcon } from '../layouts/icons/arrow-down-icon';
import { ScrollContext } from '../providers/ScrollProvider';
import { InteractiveGridPatternDemo } from '../ui/interactive-grid-pattern-demo';

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Interactive Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPatternDemo />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1
              ref={ref}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Dale Larroder
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-600 dark:text-gray-400 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I build things for the web.
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A passionate developer creating innovative solutions and meaningful
            digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Read more about me</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
            >
              View my work
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
              >
                <span className="sr-only">{social}</span>
                <div className="w-6 h-6 bg-current rounded" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          transform: `translateY(${progress * 10}vh)`,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform z-10"
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
        >
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDownIcon size={20} />
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
    </section>
  );
}
