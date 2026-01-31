'use client';

import { Marquee3D } from '@/components/ui/marquee-3d';

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-black dark:bg-black">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            My GitHub Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Explore my latest repositories and open-source contributions.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute -left-4 -top-4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative">
            <Marquee3D />
          </div>
        </div>
      </div>
    </section>
  );
}
