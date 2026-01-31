import path from 'path';
import { Fragment } from 'react';
import Header from '../components/header';
import { CustomMDX } from '../components/mdx';
import { readMDXFile } from '../thoughts/utils';
import UsesTitle from './uses-title';

const contentPath = path.join(process.cwd(), 'app', 'uses', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'Uses - Mustafa Pinjari',
  description: 'Discover the tools, software, hardware, and technologies I use daily as a full-stack developer. From development setup to productivity tools.',
  keywords: ['Mustafa Pinjari uses', 'developer tools', 'programming setup', 'development environment', 'tech stack', 'software recommendations'],
  openGraph: {
    title: 'Uses - Mustafa Pinjari',
    description: 'Discover the tools, software, hardware, and technologies I use daily as a full-stack developer.',
    url: 'https://mustafapinjari.live/uses',
    type: 'website',
    images: [
      {
        url: '/static/images/uses-og.png',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari - Tools & Setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uses - Mustafa Pinjari',
    description: 'Discover the tools, software, and technologies I use daily as a full-stack developer.',
  },
  alternates: {
    canonical: 'https://mustafapinjari.live/uses',
  },
};

export default function Page() {
  return (
    <Fragment>
      <Header title="Uses" />
      <UsesTitle />
      <CustomMDX source={content} />
    </Fragment>
  );
}
