import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const marqueeVariants = cva(
  'group flex overflow-hidden [--gap:1rem] [--duration:40s] [gap:var(--gap)]',
  {
    variants: {
      variant: {
        default: 'flex-row',
        vertical: 'flex-col h-[300px]',
      },
      reverse: {
        true: '[--direction:reverse]',
        false: '[--direction:normal]',
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

interface MarqueeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof marqueeVariants> {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  repeat?: number;
  vertical?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  repeat = 4,
  vertical = false,
  reverse = false,
  pauseOnHover = false,
  ...props
}: MarqueeProps) {
  const childrenArray = React.Children.toArray(children);
  const marqueeChildren = [...Array(repeat)].flatMap((_, i) =>
    React.Children.map(childrenArray, (child, j) =>
      React.cloneElement(child as React.ReactElement, {
        key: `${i}-${j}`,
      }),
    ),
  );

  return (
    <div
      className={cn(
        marqueeVariants({
          variant: vertical ? 'vertical' : 'default',
          reverse,
          pauseOnHover,
          className,
        }),
      )}
      {...props}
    >
      <div
        className={cn(
          'flex min-w-fit flex-shrink-0 flex-row items-center justify-around [animation:marquee-var(--direction,normal)_var(--duration,20s)_infinite_linear] group-hover:[animation-play-state:paused] [&>*]:flex-shrink-0',
          vertical
            ? 'animate-[marquee-vertical_var(--duration,20s)_linear_infinite]'
            : 'animate-[marquee-horizontal_var(--duration,20s)_linear_infinite]',
        )}
      >
        {marqueeChildren}
      </div>
      <div
        className={cn(
          'flex min-w-fit flex-shrink-0 flex-row items-center justify-around [animation:marquee-var(--direction,normal)_var(--duration,20s)_infinite_linear] group-hover:[animation-play-state:paused] [&>*]:flex-shrink-0',
          vertical
            ? 'animate-[marquee-vertical_var(--duration,20s)_linear_infinite]'
            : 'animate-[marquee-horizontal_var(--duration,20s)_linear_infinite]',
        )}
        aria-hidden
      >
        {marqueeChildren}
      </div>
    </div>
  );
}
