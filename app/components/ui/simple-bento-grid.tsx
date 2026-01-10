'use client';

import { cn } from '@/lib/utils';

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

// Simple Bento Card Component
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
        'group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 p-4',
        'hover:shadow-lg hover:border-gray-700 transition-all duration-300',
        'backdrop-blur-sm',
        className,
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center mb-3">
          <Icon className="h-5 w-5 text-blue-400 mr-2" />
          <h3 className="text-sm font-semibold text-white">{name}</h3>
        </div>
        <div className="flex-1 mb-3">
          <p className="text-xs text-gray-300 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors self-start">
          {cta} →
        </button>
      </div>
      <div className="absolute inset-0 opacity-60">{background}</div>
    </div>
  );
}

// Main Bento Grid
export function LinuxBentoGrid() {
  const features = [
    {
      Icon: TerminalIcon,
      name: 'Development Environment',
      description:
        'Python, Django, JavaScript, Node.js setup using apt, pip, nvm. Virtual environments, environment variables, and dependency isolation. Git, SSH keys, GitHub workflows entirely from terminal.',
      cta: 'View Setup',
      className: 'col-span-2 row-span-2',
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 w-full h-full overflow-hidden">
            <div className="mb-2 text-blue-400">mustafa@ubuntu:~/projects</div>
            <div className="space-y-1">
              <div>
                <span className="text-gray-500">{'>'}</span> neofetch
              </div>
              <div className="text-yellow-400">
                OS: Ubuntu 22.04.3 LTS x86_64
              </div>
              <div className="text-yellow-400">Host: Developer Workstation</div>
              <div className="text-yellow-400">Kernel: 6.2.0-39-generic</div>
              <div className="text-yellow-400">Shell: zsh 5.8.1</div>
              <div className="text-yellow-400">Terminal: gnome-terminal</div>
              <div>
                <span className="text-gray-500">{'>'}</span>
              </div>
              <div>
                <span className="text-gray-500">{'>'}</span> # Virtual
                environment activated
              </div>
              <div>
                <span className="text-gray-500">{'>'}</span> Installing
                opencv-python
              </div>
              <div>
                <span className="text-gray-500">{'>'}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: Share2Icon,
      name: 'System & Terminal Customization',
      description:
        'Custom shell (Zsh/Bash) with aliases, functions, and productivity scripts. Power-user terminal workflow for faster development. Linux file permissions, process management, and networking basics.',
      cta: 'Explore Config',
      className: 'col-span-1 row-span-1',
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-green-400 w-full">
            <div className="text-blue-400 mb-1">
              Custom shell (Zsh/Bash) with aliases, functions, and productivity
              scripts
            </div>
            <div className="space-y-1 text-[10px]">
              <div>• Power-user terminal workflow for faster development</div>
              <div>
                • Linux file permissions, process management, and networking
                basics
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: FileTextIcon,
      name: 'DevOps & Automation',
      description:
        'Docker and container-based development on Ubuntu. Nginx setup for local servers and reverse proxy testing. CI/CD experimentation using GitHub Actions on Linux runners.',
      cta: 'View Tools',
      className: 'col-span-1 row-span-1',
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-green-400 w-full">
            <div className="text-blue-400 mb-1">DevOps & Automation</div>
            <div className="space-y-1 text-[10px]">
              <div>• Docker and container-based development on Ubuntu</div>
              <div>
                • Nginx setup for local servers and reverse proxy testing
              </div>
              <div>
                • CI/CD experimentation using GitHub Actions on Linux runners
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: BellIcon,
      name: 'Performance & Stability',
      description:
        'Preference for Ubuntu due to its reliability, security, and performance. Efficient use of system resources for long development sessions. Comfortable debugging OS-level and application-level issues.',
      cta: 'View Metrics',
      className: 'col-span-3 row-span-1',
      background: (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-green-400 w-full">
            <div className="text-blue-400 mb-1">Performance & Stability</div>
            <div className="grid grid-cols-3 gap-4 text-[10px]">
              <div>
                • Preference for Ubuntu due to its reliability, security, and
                performance
              </div>
              <div>
                • Efficient use of system resources for long development
                sessions
              </div>
              <div>
                • Comfortable debugging OS-level and application-level issues
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
      {/* Row 1: Terminal (2x2) + System Customization (1x1) */}
      <div className="col-span-2 row-span-2">
        <BentoCard {...features[0]} />
      </div>
      <div className="col-span-1 row-span-1">
        <BentoCard {...features[1]} />
      </div>

      {/* Row 2: DevOps (1x1) - positioned in second row, third column */}
      <div className="col-span-1 row-span-1">
        <BentoCard {...features[2]} />
      </div>

      {/* Row 3: Performance & Stability (3x1) - spans full width below */}
      <div className="col-span-3 row-span-1">
        <BentoCard {...features[3]} />
      </div>
    </div>
  );
}
