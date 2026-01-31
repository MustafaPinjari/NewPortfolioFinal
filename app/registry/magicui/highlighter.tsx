'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HighlighterProps {
  children: ReactNode;
  action?: 'highlight' | 'underline';
  color?: string;
  className?: string;
}

export function Highlighter({
  children,
  action = 'highlight',
  color = 'rgba(59, 130, 246, 0.15)',
  className,
}: HighlighterProps) {
  return (
    <motion.span
      className={cn('relative inline-block', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {action === 'highlight' && (
        <>
          {/* Main highlight background */}
          <motion.span
            className="absolute inset-0 -z-10 rounded-md"
            style={{ backgroundColor: color }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          {/* Subtle glow effect for dark theme */}
          <motion.span
            className="absolute inset-0 -z-20 rounded-md blur-sm"
            style={{
              backgroundColor: color,
              opacity: 0.3,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </>
      )}
      {action === 'underline' && (
        <>
          {/* Main underline */}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          {/* Subtle glow for underline */}
          <motion.span
            className="absolute bottom-0 left-0 h-1 w-full rounded-full blur-sm"
            style={{
              backgroundColor: color,
              opacity: 0.4,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </>
      )}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
