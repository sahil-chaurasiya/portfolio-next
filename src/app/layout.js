// src/app/layout.js
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

export const metadata = {
  title: {
    default: 'Sahil Chaurasiya | Full-Stack Developer – Next.js, Django, React',
    template: '%s | Sahil Chaurasiya',
  },
  description:
    'Sahil Chaurasiya is a Full-Stack Web Developer from Bhopal, India specializing in Next.js, React, Node.js, Django, and MongoDB. Explore projects, resume, and developer journey.',
  keywords: [
    'Sahil Chaurasiya',
    'Full-Stack Developer',
    'Web Developer Bhopal',
    'Next.js Developer India',
    'MERN Stack Developer',
    'Django Developer',
    'React Developer India',
    'Node.js Developer',
    'Portfolio Website',
    'Software Developer Intern',
    'SISTec Developer',
    'FastAPI Developer',
    'MongoDB Developer',
    'JavaScript Developer India',
  ],
  authors: [{ name: 'Sahil Chaurasiya', url: 'https://portfolio-next-eight-rose.vercel.app' }],
  creator: 'Sahil Chaurasiya',
  publisher: 'Sahil Chaurasiya',
  metadataBase: new URL('https://portfolio-next-eight-rose.vercel.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Sahil Chaurasiya | Full-Stack Developer – Next.js, Django, React',
    description:
      'Sahil Chaurasiya is a Full-Stack Web Developer from Bhopal, India. Explore projects built with Next.js, Django, Node.js, and MongoDB.',
    url: 'https://portfolio-next-eight-rose.vercel.app',
    siteName: 'Sahil Chaurasiya Portfolio',
    images: [
      {
        url: 'https://portfolio-next-eight-rose.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sahil Chaurasiya – Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Chaurasiya | Full-Stack Developer',
    description:
      'Full-Stack Developer from Bhopal, India. Next.js, Django, React, Node.js, MongoDB.',
    images: ['https://portfolio-next-eight-rose.vercel.app/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.ico' },
    ],
  },

  alternates: {
    canonical: 'https://portfolio-next-eight-rose.vercel.app',
  },
}

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      // PERSON
      {
        "@type": "Person",
        "@id": "https://portfolio-next-eight-rose.vercel.app/#person",
        "name": "Sahil Chaurasiya",
        "url": "https://portfolio-next-eight-rose.vercel.app",
        "image": "https://portfolio-next-eight-rose.vercel.app/me.png",
        "jobTitle": "Full-Stack Developer",
        "description": "Full-Stack Web Developer from Bhopal, India specializing in Next.js, React, Node.js, Django, FastAPI, and MongoDB.",
        "email": "chaurasiyasahil18@gmail.com",
        "telephone": "+91-8176078586",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhopal",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Sagar Institute of Science and Technology (SISTec GN)",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhopal",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
          }
        },
        "knowsAbout": [
          "JavaScript", "Python", "C++", "React.js", "Next.js",
          "Node.js", "Express.js", "Django", "FastAPI", "MongoDB",
          "PostgreSQL", "MySQL", "Socket.io", "REST APIs",
          "JWT Authentication", "SEO Optimization", "Tailwind CSS",
          "Full-Stack Development", "Backend Development", "DSA"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Java Skill Test Certification",
            "credentialCategory": "certification",
            "recognizedBy": { "@type": "Organization", "name": "HackerRank" }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "SQL (Basic)",
            "credentialCategory": "certification",
            "recognizedBy": { "@type": "Organization", "name": "HackerRank" }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Tools of Trade: Linux and SQL",
            "credentialCategory": "certification",
            "recognizedBy": { "@type": "Organization", "name": "Google / Coursera" }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "The Joy of Computing using Python",
            "credentialCategory": "certification",
            "recognizedBy": { "@type": "Organization", "name": "NPTEL" }
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/",
          "https://github.com/sahil-chaurasiya",
          "https://www.codechef.com/users/sahil73",
          "https://www.hackerrank.com/profile/chaurasiyasahil1",
          "https://www.hackerearth.com/@chaurasiyasahil18/"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open Source"
        }
      },

      // WEBSITE
      {
        "@type": "WebSite",
        "@id": "https://portfolio-next-eight-rose.vercel.app/#website",
        "url": "https://portfolio-next-eight-rose.vercel.app",
        "name": "Sahil Chaurasiya – Full-Stack Developer Portfolio",
        "description": "Personal portfolio of Sahil Chaurasiya, Full-Stack Developer from Bhopal, India.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://portfolio-next-eight-rose.vercel.app/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://portfolio-next-eight-rose.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },

      // PAGES
      {
        "@type": "WebPage",
        "name": "Home – Sahil Chaurasiya | Full-Stack Developer",
        "url": "https://portfolio-next-eight-rose.vercel.app/",
        "description": "Welcome to the portfolio of Sahil Chaurasiya – Full-Stack Developer specializing in Next.js, Django, and React.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://portfolio-next-eight-rose.vercel.app/#website" }
      },
      {
        "@type": "WebPage",
        "name": "About Sahil Chaurasiya – Full-Stack Developer from Bhopal",
        "url": "https://portfolio-next-eight-rose.vercel.app/about",
        "description": "Learn about Sahil Chaurasiya's background, internship experience at Shroti Telecom, and expertise in full-stack development.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://portfolio-next-eight-rose.vercel.app/#website" }
      },
      {
        "@type": "WebPage",
        "name": "Projects – Sahil Chaurasiya | Full-Stack Web Developer",
        "url": "https://portfolio-next-eight-rose.vercel.app/project",
        "description": "Explore projects built by Sahil Chaurasiya including the SISTec Alumni Platform, Sheetal Academy Website, and AI Ticket Booking System.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://portfolio-next-eight-rose.vercel.app/#website" }
      },
      {
        "@type": "WebPage",
        "name": "Skills – Sahil Chaurasiya | Technologies & Stack",
        "url": "https://portfolio-next-eight-rose.vercel.app/skills",
        "description": "Technical skills of Sahil Chaurasiya including JavaScript, Python, React, Next.js, Django, FastAPI, Node.js, and more.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://portfolio-next-eight-rose.vercel.app/#website" }
      },
      {
        "@type": "WebPage",
        "name": "Resume – Sahil Chaurasiya | Full-Stack Developer",
        "url": "https://portfolio-next-eight-rose.vercel.app/resume",
        "description": "View and download the resume of Sahil Chaurasiya – Full-Stack Developer with experience in Django, Next.js, Node.js, and MongoDB.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://portfolio-next-eight-rose.vercel.app/#website" }
      },
      {
        "@type": "WebPage",
        "name": "Contact – Sahil Chaurasiya",
        "url": "https://portfolio-next-eight-rose.vercel.app/contact",
        "description": "Get in touch with Sahil Chaurasiya for freelance work, collaborations, or job opportunities.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://portfolio-next-eight-rose.vercel.app/#website" }
      },

      // RESUME DOCUMENT
      {
        "@type": "DigitalDocument",
        "@id": "https://portfolio-next-eight-rose.vercel.app/#resume",
        "name": "Sahil Chaurasiya Resume – Full-Stack Developer",
        "url": "https://portfolio-next-eight-rose.vercel.app/resume",
        "description": "Resume of Sahil Chaurasiya detailing internship at Shroti Telecom, projects, certifications, and technical skills.",
        "encodingFormat": "text/html",
        "author": {
          "@id": "https://portfolio-next-eight-rose.vercel.app/#person"
        }
      },

      // INTERNSHIP / WORK EXPERIENCE
      {
        "@type": "OrganizationRole",
        "roleName": "Junior Software Developer",
        "startDate": "2025-08-22",
        "endDate": "2026-01-22",
        "worksFor": {
          "@type": "Organization",
          "name": "Shroti Telecom Pvt. Ltd.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "member": {
          "@id": "https://portfolio-next-eight-rose.vercel.app/#person"
        }
      },

      // PROJECTS
      {
        "@type": "SoftwareApplication",
        "name": "SISTec Alumni Networking Platform",
        "url": "http://alumni.sistec.ac.in/",
        "applicationCategory": "WebApplication",
        "description": "Full-stack real-time alumni networking platform for SISTec students and alumni with messaging, forums, events, and job listings. Built with MERN stack and Socket.io.",
        "author": { "@id": "https://portfolio-next-eight-rose.vercel.app/#person" },
        "programmingLanguage": ["JavaScript", "React", "Node.js", "MongoDB", "Socket.io"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Sheetal Academy – Business Website & SEO Implementation",
        "url": "https://sheetal-academy.vercel.app/",
        "applicationCategory": "WebApplication",
        "description": "Production website and admin dashboard for Sheetal Academy (Uran, Navi Mumbai) built with Next.js and MongoDB. Features JWT auth, SEO optimization, and first-page Google rankings.",
        "author": { "@id": "https://portfolio-next-eight-rose.vercel.app/#person" },
        "programmingLanguage": ["JavaScript", "Next.js", "MongoDB", "Tailwind CSS"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Personal Developer Portfolio (SEO Optimized)",
        "url": "https://portfolio-next-eight-rose.vercel.app/",
        "applicationCategory": "WebApplication",
        "description": "SEO-optimized personal developer portfolio built with Next.js. Achieved first-page Google rankings for developer-related keywords.",
        "author": { "@id": "https://portfolio-next-eight-rose.vercel.app/#person" },
        "programmingLanguage": ["JavaScript", "Next.js", "Tailwind CSS"]
      }
    ]
  }

  const safeSchema = JSON.stringify(schemaData).replace(/</g, '\\u003c')

  return (
    <html lang="en" className={pacifico.variable}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Explicit favicon tags — overrides Vercel's default on hosted deployment */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeSchema }}
        />

      </body>
    </html>
  )
}