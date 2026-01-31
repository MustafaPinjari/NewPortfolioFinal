import path from 'path';
import { Fragment } from 'react';
import Footer from '../components/layouts/footer';
import Header from '../components/layouts/header';
import { CustomMDX } from '../components/mdx';
import { readMDXFile } from '../thoughts/utils';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
  description: 'Learn more about Mustafa Pinjari, a passionate Full Stack Developer and Co-founder at Techentrance. Explore my journey, skills, and contributions to the tech community.',
  openGraph: {
    title: 'About Mustafa Pinjari - Full Stack Developer & Tech Entrepreneur',
    description: 'Learn about my journey, skills, and experience as a Full Stack Developer and Co-founder at Techentrance.',
    url: 'https://mustafapinjari.live/about',
    type: 'profile',
    profile: {
      firstName: 'Mustafa',
      lastName: 'Pinjari',
      username: 'mustafapinjari',
      gender: 'male',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mustafa Pinjari - Full Stack Developer',
    description: 'Learn about my journey, skills, and experience as a Full Stack Developer and Co-founder at Techentrance.',
  },
  alternates: {
    canonical: 'https://mustafapinjari.live/about',
  },
};

export default function Page() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://mustafapinjari.live' },
    { name: 'About', url: 'https://mustafapinjari.live/about' },
  ];

  return (
    <Fragment>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />
      <Occupation />
      <CustomMDX source={content} />
      <GithubContributions />
      <Footer />
    </Fragment>
  );
}
