'use client';

import { ReactNode, useContext, useRef, useMemo } from 'react';
import { ScrollContext } from '../providers/ScrollProvider';
import { TileContext } from './TileContext';

interface WrapperProps {
  children: ReactNode;
  numOfPages: number;
}

export default function TileWrapper({ children, numOfPages }: WrapperProps) {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const currentPage = useMemo(() => {
    const { current: elContainer } = refContainer;

    if (!elContainer) return 0;

    const { offsetTop, clientHeight } = elContainer;
    const screenH = window.innerHeight;

    // Start of the sticky section
    const sectionStart = offsetTop;
    // End of the sticky section (when it should stop being sticky)
    const sectionEnd = offsetTop + clientHeight - screenH;

    // If we haven't reached the section yet
    if (scrollY < sectionStart) return 0;

    // If we've scrolled past the section
    if (scrollY > sectionEnd) return numOfPages - 1;

    // We're in the sticky section - calculate progress
    const scrollInSection = scrollY - sectionStart;
    const totalSectionScroll = sectionEnd - sectionStart;
    const progress = scrollInSection / totalSectionScroll;

    return Math.max(0, Math.min(numOfPages - 1, progress * (numOfPages - 1)));
  }, [scrollY, numOfPages]);

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        className="relative"
        ref={refContainer}
        style={{
          // Make the container tall enough to create the sticky effect
          // Each tile gets roughly 120vh of scroll space
          height: `${numOfPages * 120}vh`,
        }}
      >
        <div className="sticky top-0 h-screen bg-black dark:bg-white overflow-hidden">
          {children}
        </div>
      </div>
    </TileContext.Provider>
  );
}
