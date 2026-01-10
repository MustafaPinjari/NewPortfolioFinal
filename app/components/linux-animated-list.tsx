'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: string;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'System Update',
    description: 'Ubuntu 22.04.3 LTS available',
    time: '2m ago',
    icon: '🔄',
  },
  {
    id: 2,
    title: 'Docker Container',
    description: 'gestureflow_web started successfully',
    time: '5m ago',
    icon: '🐳',
  },
  {
    id: 3,
    title: 'Git Push',
    description: 'Pushed to origin/main',
    time: '8m ago',
    icon: '📤',
  },
];

export function LinuxAnimatedList({ className }: { className?: string }) {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => {
        const newNotifications = [...prev];
        const newNotification: Notification = {
          id: Date.now(),
          title: 'Build Complete',
          description: 'npm run build finished successfully',
          time: 'Just now',
          icon: '✅',
        };
        newNotifications.unshift(newNotification);
        return newNotifications.slice(0, 4);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('space-y-2 p-4', className)}>
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800"
        >
          <span className="text-lg">{notification.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">
              {notification.title}
            </p>
            <p className="text-xs text-gray-400">{notification.description}</p>
          </div>
          <span className="text-xs text-gray-500">{notification.time}</span>
        </motion.div>
      ))}
    </div>
  );
}
