'use client';

import { cloneElement, ReactElement, useContext } from 'react';
import { TileContext } from './TileContext';

interface TileProps {
  page: number;
  children: ReactElement<{
    progress: number;
    opacity: number;
  }>;
}

export const Tile = ({ page, children }: TileProps) => {
  const { currentPage, numOfPages } = useContext(TileContext);

  // Calculate progress for this tile
  const progress = Math.max(0, Math.min(1, currentPage - page + 1));

  // Calculate opacity - show tile when currentPage is close to this page
  let opacity = 0;

  // Show tile when we're within 0.5 pages of it
  const distance = Math.abs(currentPage - page);

  if (distance <= 0.5) {
    opacity = 1;
  } else if (distance <= 1) {
    // Fade out as we move away
    opacity = 1 - (distance - 0.5) * 2;
  }

  // Ensure first tile is visible at the start
  if (page === 0 && currentPage <= 0.5) {
    opacity = 1;
  }

  // Ensure last tile is visible at the end
  if (page === numOfPages - 1 && currentPage >= numOfPages - 1.5) {
    opacity = 1;
  }

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        opacity: Math.max(0, Math.min(1, opacity)),
        pointerEvents: opacity > 0.1 ? 'auto' : 'none',
        transition: 'opacity 0.4s ease-in-out',
      }}
    >
      {cloneElement(children, {
        progress,
        opacity,
      })}
    </div>
  );
};
