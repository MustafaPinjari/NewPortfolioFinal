'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Simple SVG Icons
const FileTextIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const BellIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const Share2Icon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
    />
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// Simple Marquee Component
function SimpleMarquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex overflow-hidden', className)}>
      <div className="flex animate-marquee whitespace-nowrap">{children}</div>
      <div
        className="flex animate-marquee whitespace-nowrap"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

// Simple Animated List
function SimpleAnimatedList({ className }: { className?: string }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'System Update',
      desc: 'Ubuntu 22.04.3 available',
      time: '2m ago',
      icon: '🔄',
    },
    {
      id: 2,
      title: 'Docker Started',
      desc: 'gestureflow_web container',
      time: '5m ago',
      icon: '🐳',
    },
    {
      id: 3,
      title: 'Git Push',
      desc: 'Pushed to origin/main',
      time: '8m ago',
      icon: '📤',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => {
        const newNotifications = [...prev];
        newNotifications.unshift({
          id: Date.now(),
          title: 'Build Complete',
          desc: 'npm run build finished',
          time: 'Just now',
          icon: '✅',
        });
        return newNotifications.slice(0, 4);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('space-y-2 p-4', className)}>
      {notifications.map((notif, index) => (
        <motion.div
          key={notif.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
        >
          <span className="text-lg">{notif.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {notif.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {notif.desc}
            </p>
          </div>
          <span className="text-xs text-gray-400">{notif.time}</span>
        </motion.div>
      ))}
    </div>
  );
}

// Simple Integration Demo
function SimpleIntegrationDemo({ className }: { className?: string }) {
  const tools = [
    { name: 'Docker', icon: '🐳', color: 'bg-blue-500' },
    { name: 'Git', icon: '📦', color: 'bg-red-500' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'Python', icon: '🐍', color: 'bg-yellow-500' },
  ];

  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <div className="relative">
        {/* Central Ubuntu Logo */}
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 relative">
          🐧
        </div>

        {/* Surrounding Tools */}
        {tools.map((tool, index) => {
          const angle = index * 90 * (Math.PI / 180);
          const radius = 60;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tool.name}
              className={cn(
                'absolute w-12 h-12 rounded-full flex items-center justify-center text-white',
                tool.color,
              )}
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <span className="text-lg">{tool.icon}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Bento Card Component
function BentoCard({
  name,
  description,
  Icon,
  className,
  background,
  cta,
}: {
  name: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
  background: React.ReactNode;
  cta: string;
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6',
        'hover:shadow-lg transition-all duration-300',
        className,
      )}
    >
      <div className="relative z-10">
        <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          {cta} →
        </button>
      </div>
      <div className="absolute inset-0 opacity-50">{background}</div>
    </div>
  );
}

// Main Bento Grid
export function LinuxBentoGrid() {
  const linuxFiles = [
    { name: 'gestureflow.py', desc: 'Hand gesture recognition with OpenCV' },
    { name: 'requirements.txt', desc: 'Python dependencies for the project' },
    { name: 'docker-compose.yml', desc: 'Container orchestration setup' },
    { name: 'nginx.conf', desc: 'Web server configuration' },
    { name: 'deploy.sh', desc: 'Automated deployment script' },
  ];

  const features = [
    {
      Icon: FileTextIcon,
      name: 'Project Files',
      description:
        'Organized development files with proper Linux permissions and structure.',
      cta: 'View Files',
      className: 'col-span-1 row-span-1',
      background: (
        <SimpleMarquee className="absolute top-10 left-0 right-0">
          <div className="flex space-x-4">
            {linuxFiles.map((file, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 min-w-[200px]"
              >
                <div className="font-medium text-sm">{file.name}</div>
                <div className="text-xs text-gray-500">{file.desc}</div>
              </div>
            ))}
          </div>
        </SimpleMarquee>
      ),
    },
    {
      Icon: BellIcon,
      name: 'System Notifications',
      description:
        'Real-time Ubuntu system notifications and development updates.',
      cta: 'View Activity',
      className: 'col-span-2 row-span-1',
      background: <SimpleAnimatedList className="absolute inset-0" />,
    },
    {
      Icon: Share2Icon,
      name: 'Development Stack',
      description:
        'Integrated Ubuntu development environment with Docker, Git, and more.',
      cta: 'Explore Tools',
      className: 'col-span-2 row-span-1',
      background: <SimpleIntegrationDemo className="absolute inset-0" />,
    },
    {
      Icon: TerminalIcon,
      name: 'Terminal Workflow',
      description:
        'Daily command-line operations and automation scripts on Ubuntu.',
      cta: 'View Commands',
      className: 'col-span-1 row-span-1',
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 w-full">
            <div>$ sudo apt update</div>
            <div>$ docker-compose up -d</div>
            <div>$ python manage.py runserver</div>
            <div className="text-gray-500"># Ubuntu ready 🚀</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 auto-rows-[300px]">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </div>
  );
}
