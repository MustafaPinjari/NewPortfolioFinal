'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, useCallback } from 'react';

interface InteractiveGridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

export function InteractiveGridPattern({
  className,
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: InteractiveGridPatternProps) {
  const [squares, setSquares] = useState<
    Array<{ id: number; pos: [number, number] }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPos = (): [number, number] => {
    return [Math.floor(Math.random() * 40), Math.floor(Math.random() * 40)];
  };

  const generateSquares = useCallback((count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }, []);

  useEffect(() => {
    if (numSquares === 0) return;

    setSquares(generateSquares(numSquares));

    const interval = setInterval(() => {
      setSquares(generateSquares(numSquares));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [numSquares, duration, generateSquares]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      {...props}
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="grid-pattern"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray={strokeDasharray}
              className="opacity-20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {squares.map(({ id, pos: [x, y] }) => (
          <rect
            key={`${id}-${x}-${y}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
            className="animate-pulse"
            style={{
              opacity: Math.random() * maxOpacity,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${duration}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
