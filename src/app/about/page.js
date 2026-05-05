import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Sahil Chaurasiya – Full-Stack Developer at ToFly Media',
  description:
    'Sahil Chaurasiya is a Full-Stack Developer at ToFly Media, Bhopal. Previously interned at Shroti Telecom. Skilled in Next.js, React, Node.js, MongoDB, and Django.',
  alternates: {
    canonical: 'https://sahilchaurasiya.me/about',
  },
  openGraph: {
    title: 'About Sahil Chaurasiya – Full-Stack Developer',
    description:
      'Full-Stack Developer at ToFly Media, Bhopal. Building scalable MERN stack products end-to-end.',
    url: 'https://sahilchaurasiya.me/about',
    type: 'website',
  },
};

export default function Page() {
  return <AboutClient />;
}