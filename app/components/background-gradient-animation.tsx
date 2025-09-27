'use client';

import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export const BackgroundGradientAnimation = ({
  firstColor = '242, 0, 137',
  secondColor = '209, 0, 209',
  thirdColor = '161, 0, 242',
  fourthColor = '45, 0, 247',
  fifthColor = '242, 0, 137',
  pointerColor = '209, 0, 209',
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  // Use refs to store animation values instead of state
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  const { theme } = useTheme();

  // Set up gradient background colors based on theme
  const gradientBackgroundStart = theme === 'dark' ? '#000000' : '#ffffff';
  const gradientBackgroundEnd = theme === 'dark' ? '#000000' : '#ffffff';

  // Set up CSS variables
  useEffect(() => {
    document.body.style.setProperty(
      '--gradient-background-start',
      gradientBackgroundStart,
    );
    document.body.style.setProperty(
      '--gradient-background-end',
      gradientBackgroundEnd,
    );
    document.body.style.setProperty('--first-color', firstColor);
    document.body.style.setProperty('--second-color', secondColor);
    document.body.style.setProperty('--third-color', thirdColor);
    document.body.style.setProperty('--fourth-color', fourthColor);
    document.body.style.setProperty('--fifth-color', fifthColor);
    document.body.style.setProperty('--pointer-color', pointerColor);
    document.body.style.setProperty('--size', size);
    document.body.style.setProperty('--blending-value', blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Set up Safari detection
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Set up animation loop
  useEffect(() => {
    if (!interactive) return;

    function animateMovement() {
      if (!interactiveRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateMovement);
        return;
      }

      // Calculate new position with easing
      curXRef.current =
        curXRef.current + (tgXRef.current - curXRef.current) / 20;
      curYRef.current =
        curYRef.current + (tgYRef.current - curYRef.current) / 20;

      // Apply transform directly to DOM element
      interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animateMovement);

    // Clean up animation loop on unmount
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  // Handle mouse movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;

    const rect = interactiveRef.current.getBoundingClientRect();
    // Update target position directly in ref (no state update)
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  return (
    <div
      className={classNames(
        'fixed top-0 left-0 w-full h-full overflow-hidden -z-10',
        className,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={classNames('relative h-full w-full', containerClassName)}>
        <div className="absolute inset-0">
          <div
            className={classNames(
              'absolute inset-0',
              isSafari ? 'blur-2xl' : 'blur-[100px]',
            )}
            style={{
              background:
                'radial-gradient(at 71% 77%, var(--first-color) 0px, transparent 50%)',
              backgroundBlendMode: 'screen',
              filter: 'blur(100px)',
              transform: 'translate3d(0, 0, 0)',
              zIndex: -10,
            }}
          />
          <div
            className={classNames(
              'absolute inset-0',
              isSafari ? 'blur-2xl' : 'blur-[100px]',
            )}
            style={{
              background:
                'radial-gradient(at 21% 30%, var(--second-color) 0px, transparent 50%)',
              backgroundBlendMode: 'screen',
              transform: 'translate3d(0, 0, 0)',
              zIndex: -10,
            }}
          />
          <div
            className={classNames(
              'absolute inset-0',
              isSafari ? 'blur-2xl' : 'blur-[100px]',
            )}
            style={{
              background:
                'radial-gradient(at 51% 80%, var(--third-color) 0px, transparent 50%)',
              backgroundBlendMode: 'screen',
              transform: 'translate3d(0, 0, 0)',
              zIndex: -10,
            }}
          />
          <div
            className={classNames(
              'absolute inset-0',
              isSafari ? 'blur-2xl' : 'blur-[100px]',
            )}
            style={{
              background:
                'radial-gradient(at 95% 74%, var(--fourth-color) 0px, transparent 50%)',
              backgroundBlendMode: 'screen',
              transform: 'translate3d(0, 0, 0)',
              zIndex: -10,
            }}
          />
          <div
            className={classNames(
              'absolute inset-0',
              isSafari ? 'blur-2xl' : 'blur-[100px]',
            )}
            style={{
              background:
                'radial-gradient(at 25% 20%, var(--fifth-color) 0px, transparent 50%)',
              backgroundBlendMode: 'screen',
              transform: 'translate3d(0, 0, 0)',
              zIndex: -10,
            }}
          />
          {interactive && (
            <div
              ref={interactiveRef}
              onMouseMove={handleMouseMove}
              className="absolute h-20 w-20 rounded-full opacity-70"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0%, rgba(var(--pointer-color), 0) 70%)`,
                zIndex: -10,
              }}
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
