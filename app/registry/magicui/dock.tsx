'use client';

import React, { useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'motion/react';

import { cn } from '@/lib/utils';

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: 'top' | 'middle' | 'bottom';
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const MOBILE_MAGNIFICATION = 45;
const MOBILE_DISTANCE = 100;

const dockVariants = cva(
  'mx-auto w-max mt-8 h-[58px] sm:h-[66px] lg:h-[74px] p-2 sm:p-3 flex gap-1 sm:gap-2 lg:gap-3 rounded-xl sm:rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md',
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      direction = 'bottom',
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Check if the child is a DockIcon component
          if (
            child.type === DockIcon ||
            (child.type as React.ComponentType)?.displayName === 'DockIcon'
          ) {
            return React.cloneElement(
              child as React.ReactElement<DockIconProps>,
              {
                mouseX: mouseX,
                magnification: magnification,
                distance: distance,
              },
            );
          }
          // For other components, don't pass the dock-specific props
          return child;
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          'items-start': direction === 'top',
          'items-center': direction === 'middle',
          'items-end': direction === 'bottom',
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = 'Dock';

export interface DockIconProps {
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
  'data-testid'?: string;
}

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  style,
  id,
  'data-testid': dataTestId,
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const fallbackMouseX = useMotionValue(Infinity);

  // Use smaller magnification and distance on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveMagnification = isMobile
    ? MOBILE_MAGNIFICATION
    : magnification;
  const effectiveDistance = isMobile ? MOBILE_DISTANCE : distance;

  const distanceCalc = useTransform(mouseX ?? fallbackMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-effectiveDistance, 0, effectiveDistance],
    [
      isMobile ? 40 : 50,
      effectiveMagnification + (isMobile ? 10 : 20),
      isMobile ? 40 : 50,
    ],
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, ...style }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
        className,
      )}
      id={id}
      data-testid={dataTestId}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon, dockVariants };
