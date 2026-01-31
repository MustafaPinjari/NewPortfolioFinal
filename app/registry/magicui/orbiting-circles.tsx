'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';

interface OrbitingCirclesProps {
  children: ReactNode;
  className?: string;
  iconSize?: number;
  radius?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  speed?: number;
  showOrbit?: boolean;
}

export function OrbitingCircles({
  children,
  className,
  iconSize = 50,
  radius = 150,
  duration = 20,
  delay = 0,
  reverse = false,
  speed = 1,
  showOrbit = true,
}: OrbitingCirclesProps) {
  const [mounted, setMounted] = useState(false);
  const actualDuration = duration / speed;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn('absolute', className)}
        style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
      >
        {/* Static placeholder during SSR */}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        className,
      )}
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
    >
      {/* Orbit path */}
      {showOrbit && (
        <div
          className="absolute border border-gray-700/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        />
      )}

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          duration: actualDuration,
          repeat: Infinity,
          ease: 'linear',
          delay,
        }}
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => {
            const angle = (360 / children.length) * index;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  left: `${x + radius - iconSize / 2}px`,
                  top: `${y + radius - iconSize / 2}px`,
                }}
                animate={{
                  rotate: reverse ? 360 : -360,
                }}
                transition={{
                  duration: actualDuration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay,
                }}
                whileHover={{ scale: 1.2 }}
              >
                {child}
              </motion.div>
            );
          })
        ) : (
          <motion.div
            className="absolute flex items-center justify-center"
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              left: `${radius - iconSize / 2}px`,
              top: `${radius - iconSize / 2}px`,
            }}
            animate={{
              rotate: reverse ? 360 : -360,
            }}
            transition={{
              duration: actualDuration,
              repeat: Infinity,
              ease: 'linear',
              delay,
            }}
            whileHover={{ scale: 1.2 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
