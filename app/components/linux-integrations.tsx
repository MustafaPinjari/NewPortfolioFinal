'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const integrations = [
  { name: 'Docker', icon: '🐳', color: 'bg-blue-500' },
  { name: 'Git', icon: '📦', color: 'bg-orange-500' },
  { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
  { name: 'Python', icon: '🐍', color: 'bg-yellow-500' },
  { name: 'Nginx', icon: '🌐', color: 'bg-green-600' },
  { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-600' },
];

export function LinuxIntegrations({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn('flex items-center justify-center p-8', className)}>
        <div className="relative">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 relative">
            🐧
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <div className="relative">
        {/* Central Ubuntu Logo */}
        <motion.div
          className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          🐧
        </motion.div>

        {/* Surrounding Tools */}
        {integrations.map((tool, index) => {
          const angle = index * 60 * (Math.PI / 180);
          const radius = 80;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tool.name}
              className={cn(
                'absolute w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg',
                tool.color,
              )}
              style={{
                left: `calc(50% + ${x.toFixed(2)}px - 28px)`,
                top: `calc(50% + ${y.toFixed(2)}px - 28px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xl">{tool.icon}</span>
            </motion.div>
          );
        })}

        {/* Connection Lines */}
        {integrations.map((_, index) => {
          const angle = index * 60 * (Math.PI / 180);
          const radius = 80;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={`line-${index}`}
              className="absolute w-px bg-gradient-to-r from-orange-500 to-transparent"
              style={{
                left: `calc(50% + ${(x / 2).toFixed(2)}px)`,
                top: `calc(50% + ${(y / 2).toFixed(2)}px)`,
                width: `${(radius / 2).toFixed(2)}px`,
                height: '2px',
                transformOrigin: '0 50%',
                transform: `rotate(${(index * 60).toFixed(2)}deg)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
            />
          );
        })}
      </div>
    </div>
  );
}
