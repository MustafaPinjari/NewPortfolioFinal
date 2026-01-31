'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  loadTime: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    loadTime: 0,
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;

        setMetrics((prev) => ({ ...prev, fps }));
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    // Start FPS monitoring
    measureFPS();

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = Math.round(
        (performance as Performance & { memory: { usedJSHeapSize: number } })
          .memory.usedJSHeapSize / 1048576,
      );
      setMetrics((prev) => ({ ...prev, memory }));
    }

    // Measure load time
    const loadTime = Math.round(performance.now());
    setMetrics((prev) => ({ ...prev, loadTime }));

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
      <div>FPS: {metrics.fps}</div>
      <div>Memory: {metrics.memory}MB</div>
      <div>Load: {metrics.loadTime}ms</div>
    </div>
  );
}
