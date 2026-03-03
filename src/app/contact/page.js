import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Sahil Chaurasiya – Full-Stack Developer',
  description:
    'Get in touch with Sahil Chaurasiya, Full-Stack Developer from Bhopal, India. Open to freelance projects, collaborations, and job opportunities in Next.js, Django, and React.',
  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Sahil Chaurasiya – Full-Stack Developer',
    description:
      'Reach out to Sahil Chaurasiya for freelance work, collaborations, or job opportunities.',
    url: 'https://portfolio-next-eight-rose.vercel.app/contact',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ContactClient />;
}