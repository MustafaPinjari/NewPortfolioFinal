/* eslint-disable @next/next/no-img-element */
'use client';

import { cn } from '@/lib/utils';
import { Marquee } from './marquee';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));
const thirdRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const fourthRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-48',
        // light styles
        'border-gray-200 bg-white shadow-sm hover:bg-gray-50',
        // dark styles
        'dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
      <div className="relative flex h-full w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review, i) => (
              <div key={`first-${i}`} className="h-64 px-2">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review, i) => (
              <div key={`second-${i}`} className="h-64 px-2">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {thirdRow.map((review, i) => (
              <div key={`third-${i}`} className="h-64 px-2">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {fourthRow.map((review, i) => (
              <div key={`fourth-${i}`} className="h-64 px-2">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent dark:from-gray-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent dark:from-gray-950" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent dark:from-gray-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent dark:from-gray-950" />
      </div>
    </div>
  );
}
