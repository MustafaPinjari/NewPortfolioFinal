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

export const metadata: Metadata = {
  title: {
    template: '%s | Mustafa Pinjari',
    default: 'Mustafa Pinjari',
  },
  description: 'Co-founder @ Techentrance | Building for the web',
  metadataBase: new URL('https://mustafapinjari.vercel.app'),
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Mustafa Pinjari',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={mukta.className}>
      <body
        className="bg-white text-black antialiased dark:bg-black dark:text-white selection:bg-primary-500 selection:text-white"
        suppressHydrationWarning
      >
        <LogRocketProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'light']}
        >
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
