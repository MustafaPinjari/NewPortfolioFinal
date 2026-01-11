import { ReactNode } from 'react';

export interface WorkProps {
  children: ReactNode;
  progress: number;
}

export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center overflow-hidden"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="w-full max-w-full px-2 sm:px-4 pt-10 md:px-6 lg:pt-0 lg:max-w-4xl xl:max-w-5xl">
        {children}
      </div>
    </div>
  );
}
