import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Projects – Sahil Chaurasiya | Full-Stack Web Developer',
  description:
    'Explore full-stack projects by Sahil Chaurasiya including the SISTec Alumni Platform, Sheetal Academy Website, AI Ticket Booking System, and SEO-optimized portfolio.',
  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app/project',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Projects – Sahil Chaurasiya | Full-Stack Developer',
    description:
      'Full-stack projects built with Next.js, MERN stack, Django, Python, and more.',
    url: 'https://portfolio-next-eight-rose.vercel.app/project',
    type: 'website',
  },
};

export default function Page() {
  return <ProjectsClient />;
}