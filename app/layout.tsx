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

export const metadata: Metadata = {
  title: {
    template: '%s | Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
    default: 'Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
  },
  description: 'Mustafa Pinjari - Co-founder @ Techentrance | Full Stack Developer | Tech Enthusiast | Building innovative web solutions',
  keywords: ['Mustafa Pinjari', 'Techentrance', 'Full Stack Developer', 'Web Developer', 'Portfolio', 'Tech Entrepreneur'],
  metadataBase: new URL('https://mustafapinjari.live'),
  openGraph: {
    title: 'Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
    description: 'Co-founder @ Techentrance | Building innovative web solutions and sharing knowledge in the tech community',
    url: 'https://mustafapinjari.live',
    siteName: 'Mustafa Pinjari',
    images: [
      {
        url: '/static/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
    description: 'Co-founder @ Techentrance | Building innovative web solutions',
    images: ['/static/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Mustafa Pinjari',
  },
  alternates: {
    canonical: 'https://mustafapinjari.live',
    types: {
      'application/rss+xml': 'https://mustafapinjari.live/feed.xml',
    },
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
