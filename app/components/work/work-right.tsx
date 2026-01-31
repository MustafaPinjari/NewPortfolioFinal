import { ReactNode } from 'react';

export interface WorkProps {
  children: ReactNode;
  progress: number;
}

export function WorkRight({ children, progress }: WorkProps) {
  // Animate based on the tile's visibility progress
  const translateY = progress > 0 ? 0 : 30;
  const opacity = Math.min(1, Math.max(0, progress * 2));

  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center overflow-hidden w-full"
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[45vw] px-2 sm:px-4 pt-10 md:px-6 lg:pt-0">
        {children}
      </div>
    </div>
  );
}
