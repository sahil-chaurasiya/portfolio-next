// src/app/skills/page.js

import SkillsClient from './SkillsClient';

export const metadata = {
  title: 'Skills – Sahil Chaurasiya | Full-Stack Developer',
  description:
    'Technical skills of Sahil Chaurasiya including Next.js, React, Node.js, MongoDB, JavaScript, Python, and full-stack web development technologies.',
  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app/skills',
  },
  openGraph: {
    title: 'Skills – Sahil Chaurasiya | Full-Stack Developer',
    description:
      'Explore technologies and tools used by Sahil Chaurasiya to build scalable full-stack applications.',
    url: 'https://portfolio-next-eight-rose.vercel.app/skills',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SkillsClient />;
}