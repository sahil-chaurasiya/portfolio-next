import ResumeClient from './ResumeClient';

export const metadata = {
  title: 'Resume – Sahil Chaurasiya | Full-Stack Developer',
  description:
    'View and download the resume of Sahil Chaurasiya – Full-Stack Developer with internship at Shroti Telecom, projects in Next.js, Django, Node.js, and MongoDB. B.Tech CSE, SISTec GN Bhopal.',
  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app/resume',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Resume – Sahil Chaurasiya | Full-Stack Developer',
    description:
      'Resume of Sahil Chaurasiya including internship experience, projects, certifications, and technical skills.',
    url: 'https://portfolio-next-eight-rose.vercel.app/resume',
    type: 'website',
  },
};

export default function Page() {
  return <ResumeClient />;
}