'use client';

import { useState, useEffect, useRef } from 'react';
import { workTiles } from './workTiles';
import { WorkCard } from './work-card';

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const mouseStartX = useRef<number>(0);
  const mouseEndX = useRef<number>(0);

  // Navigation functions
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % workTiles.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + workTiles.length) % workTiles.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers with improved sensitivity
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 30; // Reduced threshold for better sensitivity
    const isRightSwipe = distance < -30;

    if (isLeftSwipe && currentIndex < workTiles.length - 1) {
      goToNext();
    } else if (isRightSwipe && currentIndex > 0) {
      goToPrevious();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
    setTimeout(() => setIsPaused(false), 500); // Reduced pause time
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    mouseEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!mouseStartX.current || !mouseEndX.current) return;

    const distance = mouseStartX.current - mouseEndX.current;
    const isLeftDrag = distance > 30;
    const isRightDrag = distance < -30;

    if (isLeftDrag && currentIndex < workTiles.length - 1) {
      goToNext();
    } else if (isRightDrag && currentIndex > 0) {
      goToPrevious();
    }

    mouseStartX.current = 0;
    mouseEndX.current = 0;
    setTimeout(() => setIsPaused(false), 500);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isTransitioning && !isPaused) {
        goToNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, isPaused]);

  return (
    <section
      className="relative bg-background py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="max-w-10xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            My Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Swipe or click to explore my projects
          </p>
        </div>
      </div>

      {/* Projects Container - Fixed slider implementation */}
      <div className="max-w-7xl mx-auto px-2">
        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-out ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Project Cards - Each card takes full width */}
            {workTiles.map((work, index) => (
              <div
                key={work.title}
                className="w-full flex-shrink-0"
                style={{ minWidth: '100%' }}
              >
                <WorkCard
                  work={work}
                  index={index}
                  currentIndex={currentIndex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0 || isTransitioning}
            className={`p-3 rounded-full border-2 transition-all duration-300 ${
              currentIndex === 0
                ? 'border-muted text-muted cursor-not-allowed opacity-50'
                : 'border-border text-foreground hover:border-foreground hover:bg-accent'
            }`}
            title="Previous project"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === workTiles.length - 1 || isTransitioning}
            className={`p-3 rounded-full border-2 transition-all duration-300 ${
              currentIndex === workTiles.length - 1
                ? 'border-muted text-muted cursor-not-allowed opacity-50'
                : 'border-border text-foreground hover:border-foreground hover:bg-accent'
            }`}
            title="Next project"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-muted/20 rounded-full h-1">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / workTiles.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          {workTiles.map((work, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`group relative transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full'
                  : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/60 rounded-full'
              }`}
              title={work.title}
            />
          ))}
        </div>

        {/* Project Info */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
            <span>
              {currentIndex + 1} of {workTiles.length}
            </span>
            <span>•</span>
            <span className={isPaused ? 'text-yellow-500' : 'text-green-500'}>
              {isPaused ? 'Paused' : 'Auto-playing'}
            </span>
          </div>

          <div className="text-foreground font-semibold text-lg">
            {workTiles[currentIndex]?.title}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6 text-xs text-muted-foreground/60">
          <p>Drag, swipe, click dots, or use arrow keys to navigate</p>
        </div>
      </div>
    </section>
  );
}
