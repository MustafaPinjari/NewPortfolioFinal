import Header from '../components/header';
import PageContainer from '../components/layouts/page-container';
import { Thoughts } from '../components/thoughts';
import { getPosts } from './utils';

export const metadata = {
  title: 'Thoughts - Mustafa Pinjari',
  description: 'Read my thoughts on web development, technology trends, programming insights, and my journey as a full-stack developer and tech entrepreneur.',
  keywords: ['Mustafa Pinjari blog', 'web development thoughts', 'tech insights', 'programming blog', 'developer journey', 'technology trends'],
  openGraph: {
    title: 'Thoughts - Mustafa Pinjari',
    description: 'Read my thoughts on web development, technology trends, and programming insights.',
    url: 'https://mustafapinjari.live/thoughts',
    type: 'website',
    images: [
      {
        url: '/static/images/thoughts-og.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari - Thoughts & Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thoughts - Mustafa Pinjari',
    description: 'Read my thoughts on web development, technology trends, and programming insights.',
  },
  alternates: {
    canonical: 'https://mustafapinjari.live/thoughts',
  },
};

export default function ThoughtsPage() {
  const posts = getPosts();

  return (
    <PageContainer>
      <Header title="Thoughts" />
      <Thoughts posts={posts} />
    </PageContainer>
  );
}
