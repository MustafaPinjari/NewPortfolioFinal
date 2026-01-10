'use client';

import { motion } from 'motion/react';
import { LinuxTerminalDemo } from './ui/linux-terminal-demo';
import { LinuxBentoGrid } from './linux-bento-grid';

export default function LinuxSkills() {
  const skills = [
    {
      category: 'Development Environment',
      items: [
        'Python, Django, JavaScript, Node.js setup using apt, pip, nvm',
        'Virtual environments, environment variables, and dependency isolation',
        'Git, SSH keys, GitHub workflows entirely from terminal',
      ],
    },
    {
      category: 'System & Terminal Customization',
      items: [
        'Custom shell (Zsh/Bash) with aliases, functions, and productivity scripts',
        'Power-user terminal workflow for faster development',
        'Linux file permissions, process management, and networking basics',
      ],
    },
    {
      category: 'DevOps & Automation',
      items: [
        'Docker and container-based development on Ubuntu',
        'Nginx setup for local servers and reverse proxy testing',
        'CI/CD experimentation using GitHub Actions on Linux runners',
      ],
    },
    {
      category: 'Performance & Stability',
      items: [
        'Preference for Ubuntu due to its reliability, security, and performance',
        'Efficient use of system resources for long development sessions',
        'Comfortable debugging OS-level and application-level issues',
      ],
    },
  ];

  const benefits = [
    'Work closer to production-like environments',
    'Understand how software behaves at the system level',
    'Build solutions that are scalable, automated, and deployment-ready',
    'Learn DevOps and backend concepts naturally alongside development',
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Linux-First Developer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a Linux-first developer who primarily works on Ubuntu as my
            daily operating system. I use Ubuntu not just as an OS, but as a
            development platform to build, test, automate, and deploy real-world
            applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LinuxTerminalDemo />
          </motion.div>

          {/* Skills Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">🐧</span>
                Ubuntu Development Expertise
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill.category}
                    </h4>
                    <ul className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-300 text-sm leading-relaxed flex items-start"
                        >
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bento Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              🛠️ Development Environment
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Interactive showcase of my Ubuntu-based development workflow and
              tools
            </p>
          </div>
          <LinuxBentoGrid />
        </motion.div>

        {/* Why Ubuntu Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">💡 Why Ubuntu?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="text-gray-300 text-sm font-medium leading-relaxed">
                  {benefit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal Commands Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Daily Terminal Commands
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              'sudo apt update && sudo apt upgrade',
              'docker-compose up -d',
              'git push origin main',
              'python3 -m venv venv',
              'npm run build && npm start',
              'systemctl status nginx',
            ].map((command, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded px-4 py-2 font-mono text-sm text-green-400 border border-gray-700"
              >
                <span className="text-gray-500">$ </span>
                {command}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
