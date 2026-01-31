'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        'relative w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden',
        className,
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-sm font-mono">
          mustafa@ubuntu:~/projects
        </div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-gray-100 bg-gray-900 min-h-[300px]">
        {children}
      </div>
    </div>
  );
}

interface TypingAnimationProps {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypingAnimation({
  children,
  className,
  delay = 0,
  speed = 50,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < children.length) {
          setDisplayedText(children.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsComplete(true);
        }
      },
      delay + currentIndex * speed,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, children, delay, speed]);

  return (
    <div className={cn('flex items-center', className)}>
      <span>{displayedText}</span>
      {!isComplete && <span className="ml-1 animate-pulse">|</span>}
    </div>
  );
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSpan({
  children,
  className,
  delay = 1000,
}: AnimatedSpanProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div className={cn('animate-in fade-in duration-300', className)}>
      {children}
    </div>
  );
}
