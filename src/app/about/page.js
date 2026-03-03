import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Sahil Chaurasiya – Full-Stack Developer from Bhopal',
  description:
    'Sahil Chaurasiya is a Full-Stack Developer from Bhopal, India. Internship at Shroti Telecom. Skilled in Next.js, Django, FastAPI, Node.js, and MongoDB.',
  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app/about',
  },
  openGraph: {
    title: 'About Sahil Chaurasiya – Full-Stack Developer',
    description:
      'Full-Stack Developer from Bhopal, India specializing in Next.js, Django, React, Node.js.',
    url: 'https://portfolio-next-eight-rose.vercel.app/about',
    type: 'website',
  },
};

export default function Page() {
  return <AboutClient />;
}