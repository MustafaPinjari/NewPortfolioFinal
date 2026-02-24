import Analytics from 'app/components/analytics/analytics';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { mukta } from './fonts';
import './tailwind.css';
import LogRocketProvider from './components/logrocket-provider';
import { PerformanceMonitor } from './components/ui/performance-monitor';
import { SmoothCursor } from './components/ui/smooth-cursor';
import PersonSchema from './components/seo/PersonSchema';
import WebsiteSchema from './components/seo/WebsiteSchema';
import OrganizationSchema from './components/seo/OrganizationSchema';

export const metadata: Metadata = {
  title: {
    template: '%s | Mustafa Pinjari - Django, AI & Web Development Expert',
    default: 'Mustafa Pinjari | Django, AI & Web Development Expert',
  },
  description: 'Mustafa Pinjari - Expert in Django, AI, Web Development & Generative Tech. Co-founder @ Techentrance building innovative solutions with Python & React.',
  keywords: [
    'Mustafa Pinjari', 
    'Techentrance', 
    'Full Stack Developer', 
    'Web Developer', 
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Portfolio', 
    'Tech Entrepreneur',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Web Development',
    'Modern Web Technologies'
  ],
  authors: [{ name: 'Mustafa Pinjari', url: 'https://mustafapinjari.live' }],
  creator: 'Mustafa Pinjari',
  publisher: 'Mustafa Pinjari',
  metadataBase: new URL('https://mustafapinjari.live'),
  openGraph: {
    title: 'Mustafa Pinjari | Django, AI & Web Development Expert',
    description: 'Mustafa Pinjari - Expert in Django, AI, Web Development, and Generative Tech. Co-founder @ Techentrance building innovative solutions.',
    url: 'https://mustafapinjari.live',
    siteName: 'Mustafa Pinjari',
    images: [
      {
        url: '/static/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari | Django, AI & Web Development Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Pinjari | Django, AI & Web Development Expert',
    description: 'Mustafa Pinjari - Expert in Django, AI, Web Development, and Generative Tech. Building innovative solutions.',
    images: ['/static/images/og-image.png'],
    creator: '@mustafapinjari',
    site: '@mustafapinjari',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Mustafa Pinjari',
    startupImage: [
      {
        url: '/static/images/apple-startup-640x1136.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  alternates: {
    canonical: 'https://mustafapinjari.live',
    types: {
      'application/rss+xml': [
        { url: 'https://mustafapinjari.live/feed.xml', title: 'Mustafa Pinjari RSS Feed' }
      ],
    },
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={mukta.className}>
      <body
        className="bg-white text-black antialiased dark:bg-black dark:text-white selection:bg-primary-500 selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <LogRocketProvider />
        <PersonSchema />
        <WebsiteSchema />
        <OrganizationSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'light']}
        >
          <SmoothCursor />
          <LenisProvider>
            <ThemeSwitch />
            {children}
            <PerformanceMonitor />
          </LenisProvider>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
