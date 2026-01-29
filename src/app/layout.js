// src/app/layout.js
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { Pacifico } from 'next/font/google'

// Load Pacifico font once globally
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

export const metadata = {
  title: 'Sahil Portfolio | Full-Stack Developer',
  description:
    'Explore Sahil Chaurasiya\'s personal portfolio built with Next.js. Showcasing projects, skills, and experience as a full-stack web developer.',
  keywords: [
    'Sahil Chaurasiya',
    'Portfolio',
    'Full-Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'JavaScript',
    'Frontend',
    'Backend',
  ],
  authors: [{ name: 'Sahil Chaurasiya' }],
  metadataBase: new URL('https://portfolio-next-eight-rose.vercel.app'),
  openGraph: {
    title: 'Sahil Portfolio | Full-Stack Developer',
    description:
      'Discover Sahil Chaurasiya\'s work, projects, and developer journey.',
    url: 'https://portfolio-next-eight-rose.vercel.app',
    siteName: 'Sahil Portfolio',
    images: [
      {
        url: 'https://portfolio-next-eight-rose.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sahil Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app',
  },
}

export default function RootLayout({ children }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sahil Chaurasiya',
    url: 'https://portfolio-next-eight-rose.vercel.app',
    sameAs: [
      'https://instagram.com/sahil_chaurasiya__',
      'https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/',
    ],
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Open Source',
    },
  }

  const safeSchema = JSON.stringify(schemaData).replace(/'/g, '&apos;')

  return (
    <html lang="en" className={pacifico.variable}>
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeSchema }}
        />
      </body>
    </html>
  )
}