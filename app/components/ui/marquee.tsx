'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const marqueeVariants = cva(
  'group flex w-full overflow-hidden [--gap:1rem] [--duration:20s]',
  {
    variants: {
      variant: {
        default: 'flex-row',
        vertical: 'flex-col h-[300px]',
      },
      reverse: {
        true: '',
        false: '',
      },
      pauseOnHover: {
        true: 'hover:[animation-play-state:paused]',
      },
    },
    defaultVariants: {
      variant: 'default',
      reverse: false,
      pauseOnHover: false,
    },
  },
);

export interface MarqueeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof marqueeVariants> {
  children: React.ReactNode;
  className?: string;
  repeat?: number;
  vertical?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      children,
      reverse = false,
      pauseOnHover = false,
      repeat = 4,
      vertical = false,
      speed = 'normal',
      ...props
    },
    ref,
  ) => {
    const speedMap = {
      slow: '30s',
      normal: '20s',
      fast: '10s',
    };

    const duration = speedMap[speed];

    return (
      <div
        ref={ref}
        className={cn(
          marqueeVariants({
            variant: vertical ? 'vertical' : 'default',
            reverse,
            pauseOnHover,
          }),
          className,
        )}
        style={
          {
            '--duration': duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <div
          className={cn(
            'flex shrink-0 justify-around min-w-full gap-4',
            vertical ? 'flex-col animate-marquee-vertical' : 'animate-marquee',
            reverse &&
              (vertical
                ? 'animate-marquee-vertical-reverse'
                : 'animate-marquee-reverse'),
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
          )}
          style={{
            animationDuration: duration,
          }}
        >
          {Array.from({ length: repeat }).map((_, i) => (
            <React.Fragment key={i}>{children}</React.Fragment>
          ))}
        </div>
        <div
          className={cn(
            'flex shrink-0 justify-around min-w-full gap-4',
            vertical ? 'flex-col animate-marquee-vertical' : 'animate-marquee',
            reverse &&
              (vertical
                ? 'animate-marquee-vertical-reverse'
                : 'animate-marquee-reverse'),
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
          )}
          style={{
            animationDuration: duration,
          }}
          aria-hidden="true"
        >
          {Array.from({ length: repeat }).map((_, i) => (
            <React.Fragment key={i}>{children}</React.Fragment>
          ))}
        </div>
      </div>
    );
  },
);

Marquee.displayName = 'Marquee';
