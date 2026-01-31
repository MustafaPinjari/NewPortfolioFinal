import { WorkProps } from './work-right';

export function WorkLeft({ children, progress }: WorkProps) {
  // Animate based on the tile's visibility progress
  const translateY = progress > 0 ? 0 : 50;
  const opacity = Math.min(1, Math.max(0, progress * 2));

  return (
    <div
      className="flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl overflow-hidden w-full"
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="leading-10 text-white max-w-full px-4 text-center">
        {children}
      </div>
    </div>
  );
}
