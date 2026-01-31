'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: 'System Update',
    description: 'Ubuntu 22.04.3 LTS available',
    time: '15m ago',
    icon: '🔄',
    color: '#00D2FF',
  },
  {
    name: 'Docker Container',
    description: 'gestureflow_web started successfully',
    time: '10m ago',
    icon: '🐳',
    color: '#0099FF',
  },
  {
    name: 'Git Push',
    description: 'Pushed to origin/main',
    time: '5m ago',
    icon: '📤',
    color: '#FFB800',
  },
  {
    name: 'Terminal',
    description: 'Python virtual environment activated',
    time: '2m ago',
    icon: '🐍',
    color: '#FF3D71',
  },
  {
    name: 'Build Complete',
    description: 'npm run build finished',
    time: '1m ago',
    icon: '✅',
    color: '#1BC47D',
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

interface AnimatedListDemoProps {
  className?: string;
}

export default function AnimatedListDemo({ className }: AnimatedListDemoProps) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItems = [...prev];
        if (newItems.length >= 5) {
          newItems.shift();
        }
        const randomNotification =
          notifications[Math.floor(Math.random() * notifications.length)];
        newItems.push({
          ...randomNotification,
          time: 'Just now',
        });
        return newItems;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full flex-col p-6 overflow-hidden',
        className,
      )}
    >
      <AnimatePresence>
        {items.map((item, idx) => (
          <motion.div
            key={`${item.name}-${idx}`}
            initial={{ opacity: 0, height: 0, y: -50 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto flex w-full max-w-[400px] cursor-pointer items-center space-x-4 rounded-md border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-lg">
              {item.icon}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              {item.time}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
