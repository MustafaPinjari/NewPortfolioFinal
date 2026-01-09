'use client';

import { Marquee3D } from '@/components/ui/marquee-3d';

export default function Marquee3DPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-gray-950 p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
          3D Marquee Component
        </h1>
        <div className="w-full">
          <Marquee3D />
        </div>
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">
            This is a 3D marquee component built with Next.js and Tailwind CSS.
          </p>
          <p>Hover over the cards to pause the animation.</p>
        </div>
      </div>
    </div>
  );
}
