'use client';

import { cn } from '@/lib/utils';
import { InteractiveGridPattern } from '@/app/registry/magicui/interactive-grid-pattern';

export function InteractiveGridPatternDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
        )}
      />
    </div>
  );
}
