'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface InteractiveGridPatternProps {
  className?: string;
  gridSize?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

export function InteractiveGridPattern({
  className,
  gridSize = 50,
  numSquares = 20,
  maxOpacity = 0.3,
  duration = 3,
  ...props
}: InteractiveGridPatternProps) {
  const [squares, setSquares] = useState<
    Array<{ id: number; x: number; y: number; opacity: number }>
  >([]);

  const generateSquares = () => {
    const newSquares = [];
    for (let i = 0; i < numSquares; i++) {
      newSquares.push({
        id: Math.random(),
        x: Math.floor(Math.random() * 40) * gridSize,
        y: Math.floor(Math.random() * 25) * gridSize,
        opacity: Math.random() * maxOpacity,
      });
    }
    return newSquares;
  };

  useEffect(() => {
    // Initial squares
    setSquares(generateSquares());

    // Update squares periodically
    const interval = setInterval(() => {
      setSquares(generateSquares());
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [numSquares, maxOpacity, duration, gridSize, generateSquares]);

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      {...props}
    >
      {/* Static Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Animated Squares */}
      {squares.map((square) => (
        <div
          key={square.id}
          className="absolute animate-pulse transition-opacity duration-1000"
          style={{
            left: square.x,
            top: square.y,
            width: gridSize - 2,
            height: gridSize - 2,
            backgroundColor: 'currentColor',
            opacity: square.opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
