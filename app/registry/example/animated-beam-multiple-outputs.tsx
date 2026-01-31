'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedBeamMultipleOutputDemoProps {
  className?: string;
}

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: AnimatedBeamMultipleOutputDemoProps) {
  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full items-center justify-center overflow-hidden',
        className,
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Central Ubuntu Logo */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
          <span className="text-2xl font-bold">🐧</span>
        </div>

        {/* Integration Nodes */}
        {[
          {
            name: 'Docker',
            icon: '🐳',
            position: 'top-left',
            color: 'bg-blue-500',
          },
          {
            name: 'Git',
            icon: '📦',
            position: 'top-right',
            color: 'bg-red-500',
          },
          {
            name: 'Node.js',
            icon: '🟢',
            position: 'bottom-left',
            color: 'bg-green-500',
          },
          {
            name: 'Python',
            icon: '🐍',
            position: 'bottom-right',
            color: 'bg-yellow-500',
          },
          {
            name: 'Nginx',
            icon: '⚡',
            position: 'left',
            color: 'bg-purple-500',
          },
          {
            name: 'VS Code',
            icon: '💻',
            position: 'right',
            color: 'bg-blue-600',
          },
        ].map((integration, index) => {
          const positions = {
            'top-left': 'top-4 left-4',
            'top-right': 'top-4 right-4',
            'bottom-left': 'bottom-4 left-4',
            'bottom-right': 'bottom-4 right-4',
            left: 'left-4 top-1/2 -translate-y-1/2',
            right: 'right-4 top-1/2 -translate-y-1/2',
          };

          return (
            <div
              key={integration.name}
              className={cn(
                'absolute',
                positions[integration.position as keyof typeof positions],
              )}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg',
                  integration.color,
                )}
              >
                <span className="text-lg">{integration.icon}</span>
              </motion.div>

              {/* Animated Beam */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.3 + 0.5,
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute inset-0"
              >
                <svg className="absolute inset-0 h-full w-full">
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="50%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient
              id="beam-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Lines connecting center to each integration */}
          {[
            { x1: '50%', y1: '50%', x2: '20%', y2: '20%' },
            { x1: '50%', y1: '50%', x2: '80%', y2: '20%' },
            { x1: '50%', y1: '50%', x2: '20%', y2: '80%' },
            { x1: '50%', y1: '50%', x2: '80%', y2: '80%' },
            { x1: '50%', y1: '50%', x2: '10%', y2: '50%' },
            { x1: '50%', y1: '50%', x2: '90%', y2: '50%' },
          ].map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#beam-gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                delay: index * 0.2 + 1,
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
