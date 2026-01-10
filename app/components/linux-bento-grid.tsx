'use client';

import { FileTextIcon } from '@radix-ui/react-icons';
import { BellIcon, Share2Icon, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LinuxAnimatedList } from './linux-animated-list';
import { LinuxIntegrations } from './linux-integrations';
import { BentoCard, BentoGrid } from '@/app/registry/magicui/bento-grid';
import { Marquee } from '@/app/registry/magicui/marquee';

const linuxFiles = [
  {
    name: 'gestureflow.py',
    body: 'Hand gesture recognition system built with OpenCV and MediaPipe for real-time interaction.',
  },
  {
    name: 'docker-compose.yml',
    body: 'Container orchestration setup for development environment with PostgreSQL and Redis.',
  },
  {
    name: 'requirements.txt',
    body: 'Python dependencies including Django, OpenCV, NumPy, and machine learning libraries.',
  },
  {
    name: 'nginx.conf',
    body: 'Web server configuration with SSL, reverse proxy, and static file serving setup.',
  },
  {
    name: 'deploy.sh',
    body: 'Automated deployment script with environment setup, database migrations, and service restart.',
  },
  {
    name: '.bashrc',
    body: 'Custom shell configuration with aliases, functions, and development environment variables.',
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: 'Development Files',
    description:
      'Organized project structure with proper Linux permissions and configuration files.',
    href: '#',
    cta: 'View Files',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {linuxFiles.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-800 bg-gray-900/50 hover:bg-gray-900/70',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-gray-400">
              {f.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: 'System Notifications',
    description:
      'Real-time Ubuntu system notifications and development process updates.',
    href: '#',
    cta: 'View Activity',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <LinuxAnimatedList className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Development Stack',
    description:
      'Integrated Ubuntu development environment with Docker, Git, and modern tools.',
    href: '#',
    cta: 'Explore Tools',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <LinuxIntegrations className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: Terminal,
    name: 'Terminal Workflow',
    description:
      'Daily command-line operations and automation scripts optimized for productivity.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'View Commands',
    background: (
      <div className="absolute top-10 right-0 left-0">
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 mx-4 border border-gray-800">
          <div className="mb-2 text-blue-400">mustafa@ubuntu:~/projects</div>
          <div className="space-y-1 text-xs">
            <div>
              <span className="text-gray-500">$</span> sudo apt update && sudo
              apt upgrade
            </div>
            <div>
              <span className="text-gray-500">$</span> docker-compose up -d
            </div>
            <div>
              <span className="text-gray-500">$</span> python manage.py
              runserver
            </div>
            <div>
              <span className="text-gray-500">$</span> git push origin main
            </div>
            <div className="text-yellow-400"># Ubuntu development ready 🚀</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function LinuxBentoGrid() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
