import GithubContributions from '../about/github-contributions/github-contributions';
import Header from '../components/header';

export const metadata = {
  title: 'Stats - Mustafa Pinjari',
  description: 'View my development statistics, GitHub contributions, coding activity, and project metrics. Track my journey as a full-stack developer.',
  keywords: ['Mustafa Pinjari stats', 'GitHub contributions', 'coding statistics', 'developer metrics', 'programming activity', 'development progress'],
  openGraph: {
    title: 'Stats - Mustafa Pinjari',
    description: 'View my development statistics, GitHub contributions, and coding activity metrics.',
    url: 'https://mustafapinjari.live/stats',
    type: 'website',
    images: [
      {
        url: '/static/images/stats-og.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari - Development Statistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stats - Mustafa Pinjari',
    description: 'View my development statistics, GitHub contributions, and coding activity metrics.',
  },
  alternates: {
    canonical: 'https://mustafapinjari.live/stats',
  },
};

export default function StatsPage() {
  return (
    <div>
      <Header title="Stats" />
      <div className="space-y-2 md:space-y-5 mb-5">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some personal stats that I managed to gather over different
          APIs.
        </p>
      </div>

      <section className="space-y-3">
        <GithubContributions />
      </section>
    </div>
  );
}
