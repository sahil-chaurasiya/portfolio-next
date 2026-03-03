'use client';
// SEO NOTE: Export this metadata from your /project/page.js (server component):
// export const metadata = {
//   title: 'Projects – Sahil Chaurasiya | Full-Stack Web Developer',
//   description: 'Explore full-stack projects by Sahil Chaurasiya including the SISTec Alumni Platform, Sheetal Academy Website, AI Ticket Booking System, and SEO-optimized portfolio.',
//   alternates: { canonical: 'https://portfolio-next-eight-rose.vercel.app/project' },
//   openGraph: {
//     title: 'Projects – Sahil Chaurasiya | Full-Stack Developer',
//     description: 'Full-stack projects built with Next.js, MERN stack, Django, Python, and more.',
//     url: 'https://portfolio-next-eight-rose.vercel.app/project',
//   },
// };
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CardSpotlight } from '../components/ui/card-spotlight';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    const fallback = setTimeout(() => {
      controls.start('visible');
    }, 1000);

    if (isInView) {
      controls.start('visible');
      clearTimeout(fallback);
    }

    return () => clearTimeout(fallback);
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <CardSpotlight className="w-full rounded-2xl h-auto min-h-[24rem] flex flex-col justify-between bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 overflow-hidden">
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-30">
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                ⭐ Featured
              </span>
            </div>
          )}

          <div className="relative z-20 px-6 py-6 flex-1 flex flex-col">
            {/* Date */}
            {project.date && (
              <p className="text-xs text-cyan-400 mb-2 font-mono">{project.date}</p>
            )}

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              {project.title}
            </h2>

            {/* Team Info */}
            {project.teamSize && (
              <p className="text-xs text-gray-400 mb-2">
                {project.mentor && `Mentor: ${project.mentor} • `}Team: {project.teamSize}
              </p>
            )}

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-4">
                <ul className="space-y-1 text-xs text-gray-400">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-600/80 to-violet-600/80 px-3 py-1 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-shadow"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-auto text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-medium group"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        </CardSpotlight>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Personal Developer Portfolio (SEO Optimized)',
      date: '06 Nov, 2025 – 20 Nov, 2025',
      description:
        'Designed and developed a personal developer portfolio using Next.js. Implemented technical SEO including meta tags, sitemap, robots.txt, and structured content. Optimized page performance and accessibility for better search ranking. Serves as primary client acquisition and credibility platform.',
      tech: ['Next.js', 'Technical SEO', 'Performance Optimization', 'Vercel', 'Responsive Web Design'],
      link: 'https://portfolio-next-eight-rose.vercel.app/',
      featured: true,
      teamSize: '1',
      highlights: [
        'Achieved first-page Google rankings for multiple developer-related keywords',
        'Top position for select search queries',
        'Sitemap, robots.txt, and structured meta tags',
        'Optimized performance and accessibility for better ranking',
      ],
    },
    {
      title: 'Sheetal Academy, Uran (Navi Mumbai) – Business Website & SEO Implementation',
      date: '28 Jul, 2025 – 03 Aug, 2025',
      description:
        'Developed and deployed a production website and admin dashboard using Next.js and MongoDB for a live coaching institute. Built secure authentication and dynamic content management for announcements, jobs, and events. Implemented form handling and lead capture workflows with automated responses.',
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT', 'EmailJS', 'SEO Optimization', 'Vercel'],
      link: 'https://sheetal-academy.vercel.app/',
      featured: true,
      teamSize: '1',
      highlights: [
        'Admin dashboard with JWT authentication and dynamic content management',
        'Form handling and lead capture with automated email responses',
        'Achieved first-page Google rankings for institute search queries including top position for specific keywords',
        'Hosted on Vercel with responsive UI and performance optimization for mobile users',
      ],
    },
    {
      title: 'SISTec Alumni Networking Platform – Real-Time Web Application',
      mentor: 'Prof. Nargish Gupta',
      teamSize: '4',
      description:
        'Led development of a full-stack networking platform for SISTec students, alumni, and admins with dedicated sections for posts, discussion forums, events, real-time messaging, and job opportunities. Enables seamless campus communication, alumni interaction, and event engagement.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'Deployment'],
      link: 'http://alumni.sistec.ac.in/',
      featured: true,
      highlights: [
        'Architected MongoDB schema for conversations and optimized message retrieval queries',
        'Implemented authentication, protected routes, and role-based dashboards (admin/user)',
        'Resolved real-time chat event conflicts and managed persistent user sessions',
        'Coordinated frontend–backend integration and deployed on official institute subdomain',
      ],
    },
    {
      title: 'AI-Based Museum Ticket Booking Automation System',
      mentor: 'Dr. Bhavna Gupta',
      teamSize: '6',
      description:
        'Built an intelligent chatbot that automated the entire ticket booking workflow. Integrated chat and booking flow, reducing multiple manual steps into a single automated pipeline. Implemented structured user input capture, automated pricing, and ticket generation.',
      tech: ['Python', 'Streamlit', 'MonsterAPI'],
      link: 'https://drive.google.com/drive/folders/1rKAP7_7-eeY-zJDn7uR2JqZKtF89MzVx?usp=drive_link',
      highlights: [
        'Single interface combining chat and booking flow',
        'Automated pricing calculation and ticket generation',
        'Structured user input capture pipeline',
        'Significantly reduced manual booking steps',
      ],
    },
    {
      title: 'Java Data Structures Desktop Application',
      teamSize: '1',
      description:
        'Designed and developed an interactive desktop application in Java with a GUI-based menu system for performing operations on core data structures (Array, Stack, Queue, Linked List, Tree, Graph). Implemented insertion, deletion, traversal, and search using OOP principles with dynamic visualization.',
      tech: ['Java', 'Java Swing', 'OOP', 'DSA'],
      link: '#',
      highlights: [
        'GUI-based dynamic visualization of data structure operations',
        'Error handling and input validation throughout',
        'Local file-based state persistence',
        'Built and executed entirely using Eclipse IDE',
      ],
    },
    {
      title: 'Menu-Driven Data Structures Library',
      mentor: 'Dr. Nargish Gupta',
      teamSize: '1',
      description:
        'Developed a C++ console-based application implementing core data structures (Array, Stack, Queue, Linked List, Tree, Graph) with a menu-driven interface. Each module supports insertion, deletion, traversal, and search operations. Focused on modular coding and dynamic memory management.',
      tech: ['C++', 'DSA'],
      link: 'https://onlinegdb.com/Gvhd1l31a',
      highlights: [
        'Modular coding structure across all data structure modules',
        'Dynamic memory management',
        'Complete CRUD operations per module',
        'Console-based interactive interface',
      ],
    },
  ];

  return (
    <main
      className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden"
      aria-label="Projects by Sahil Chaurasiya – Full-Stack Developer"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Top Glow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.3), transparent 70%)`,
          }}
        />
        
        {/* Bottom Glow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 100%, rgba(59, 130, 246, 0.2), transparent 70%)`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent relative"
  style={{ fontFamily: 'var(--font-pacifico), cursive', lineHeight: '1.2', paddingBottom: '0.29em', marginBottom: '0.5rem' }}
>
  {/* Hidden for SEO but not visible */}
  <span
    style={{
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      whiteSpace: 'nowrap',
      border: 0,
    }}
  >
    Projects – Sahil Chaurasiya | Full-Stack Web Developer | Full-Stack Projects including Alumni Platform, Sheetal Academy Website, AI Ticket Booking System, SEO Portfolio
  </span>

  {/* Visible gradient & emoji text */}
  ✨ What I&apos;ve Been Crafting
</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, automation, and intelligent systems
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {projects.length}
            </div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-gray-400">Featured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              {new Set(projects.flatMap(p => p.tech)).size}
            </div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/sahil-chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-white font-medium hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </main>
  );
}