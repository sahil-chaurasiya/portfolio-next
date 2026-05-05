'use client';
// SEO NOTE: Export this metadata from your /project/page.js (server component):
// export const metadata = { ... }

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const mainProjects = [
  {
    id: 'tofly',
    title: 'ToFly Media',
    subtitle: 'Digital Marketing Agency Website',
    date: 'Apr 2026',
    status: 'complete',
    description:
      'Full-stack business website & CMS for a digital marketing agency. Blog management, service pages, case studies, and lead capture workflows integrated with an admin dashboard.',
    tech: ['ReactJS', 'NodeJS', 'Express.js', 'Tailwind CSS', 'JWT'],
    link: 'https://toflymediaa.com/',
    featured: true,
    accentColor: '#7c3aed',
    number: '01',
  },
  {
    id: 'personalos',
    title: 'PersonalOS',
    subtitle: 'Life & Career Operating System',
    date: 'Mar – Apr 2026',
    status: 'complete',
    description:
      'Premium productivity platform: Habit Intelligence, Job Application CRM, Daily Journal, and Activity Timeline. 90-day heatmap, Kanban pipeline, server-side caching.',
    tech: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Groq AI'],
    link: 'https://sahilos.vercel.app/',
    github: 'https://github.com/sahil-chaurasiya/sahilos.git',
    featured: true,
    accentColor: '#0ea5e9',
    number: '02',
  },
  {
    id: 'flowdesk',
    title: 'Flowdesk',
    subtitle: 'SaaS Client Portal — ToFly Media',
    date: '2026',
    status: 'ongoing',
    description:
      'Full-stack SaaS-style client portal for performance marketing agencies. Clients track campaigns, view reports, chat in real-time, and submit requests. RBAC with Admin, Manager, Team Member, and Client roles.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Zustand', 'JWT'],
    link: 'https://flowdesk-drab.vercel.app/',
    featured: true,
    accentColor: '#10b981',
    number: '03',
  },
  {
    id: 'attendance',
    title: 'Office Attendance PWA',
    subtitle: 'GPS-Based Attendance Tracking',
    date: 'Apr 2026',
    status: 'complete',
    description:
      'Progressive Web App replacing manual check-ins with GPS-based attendance. Haversine geofencing, automated late detection, cron-job auto-checkout, admin dashboards with CSV export.',
    tech: ['ReactJS', 'NodeJS', 'Express.JS', 'PWA', 'JWT', 'Recharts'],
    link: 'https://attendance.toflymediaa.com/',
    featured: true,
    accentColor: '#f59e0b',
    number: '04',
  },
  {
    id: 'arrk',
    title: 'Arrk Studio',
    subtitle: 'Architecture Firm Website',
    date: '2025',
    status: 'ongoing',
    description:
      'Production-ready MERN stack website for an architectural design firm. Dynamic portfolio, Cloudinary image management, and a full admin panel for content control.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Framer Motion'],
    link: '#',
    featured: false,
    accentColor: '#8b5cf6',
    number: '05',
  },
  {
    id: 'ritu',
    title: 'Ritu Ghai Couture',
    subtitle: 'Dynamic Full-Stack E-Commerce',
    date: '2025',
    status: 'ongoing',
    description:
      'Fully dynamic e-commerce app powered by Node.js & MongoDB. REST API-driven product management, JWT admin panel, and session-based cart.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'Vanilla JS'],
    link: '#',
    featured: false,
    accentColor: '#f97316',
    number: '06',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    subtitle: 'SEO-Optimized Personal Site',
    date: 'Nov 2025',
    status: 'complete',
    description:
      'Personal developer portfolio with first-page Google rankings for multiple developer-related keywords. Sitemap, robots.txt, structured meta tags, and full performance optimization.',
    tech: ['Next.js', 'Technical SEO', 'Performance Optimization', 'Vercel'],
    link: 'https://sahilchaurasiya.me/',
    featured: true,
    accentColor: '#06b6d4',
    number: '07',
  },
  {
    id: 'sheetal',
    title: 'Sheetal Academy',
    subtitle: 'Business Website & SEO',
    date: 'Jul – Aug 2025',
    status: 'complete',
    description:
      'Production website and admin dashboard for a live coaching institute. JWT authentication, dynamic content management, lead capture with automated email responses, and first-page Google rankings.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT', 'EmailJS', 'SEO Optimization', 'Vercel'],
    link: 'https://sheetal-academy.vercel.app/',
    featured: true,
    accentColor: '#84cc16',
    number: '08',
  },
  {
    id: 'sistec',
    title: 'SISTec Alumni Platform',
    subtitle: 'Real-Time Networking Web App',
    date: '2024',
    status: 'complete',
    mentor: 'Prof. Nargish Gupta',
    teamSize: '4',
    description:
      'Full-stack networking platform for SISTec students, alumni, and admins. Real-time messaging, discussion forums, events, job listings. Deployed on the official institute subdomain.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
    link: 'https://alumni.sistec.ac.in/',
    featured: true,
    accentColor: '#a78bfa',
    number: '09',
  },
];

const experimentsProjects = [
  {
    id: 'academy',
    title: 'Academy Assistant',
    subtitle: 'AI-Powered Admin Panel',
    date: 'Feb 2026',
    status: 'complete',
    description:
      'Full-stack AI administration platform for spoken English academies. Context-aware AI assistant retrieves student notes, ratings, and learning progress across the entire academy.',
    tech: ['Next.js', 'NodeJS', 'Express.js', 'MongoDB', 'Groq AI', 'Tailwind CSS', 'JWT'],
    link: 'https://academy-assistant.vercel.app/',
    accentColor: '#e11d48',
    emoji: '🤖',
  },
  {
    id: 'museum',
    title: 'AI Museum Ticket Bot',
    subtitle: 'Booking Automation System',
    date: '2024',
    status: 'complete',
    mentor: 'Dr. Bhavna Gupta',
    teamSize: '6',
    description:
      'Intelligent chatbot automating the entire ticket booking workflow. Automated pricing, ticket generation, and structured user input capture.',
    tech: ['Python', 'Streamlit', 'MonsterAPI'],
    link: 'https://drive.google.com/drive/folders/1rKAP7_7-eeY-zJDn7uR2JqZKtF89MzVx?usp=drive_link',
    accentColor: '#fb923c',
    emoji: '🎟️',
  },
  {
    id: 'excuse',
    title: 'Excuse Generator Pro Max',
    subtitle: 'AI-Powered Excuse Engine',
    date: '2025',
    status: 'complete',
    description:
      "AI-powered excuse generator for when the truth just won't cut it. 4 tones (Professional, Emotional, Dramatic Bollywood, Absolute Nonsense), a Lie Confidence Slider, Believability Meter, and Roast Mode.",
    tech: ['Next.js', 'Tailwind CSS', 'Groq AI', 'Llama 3'],
    link: '#',
    accentColor: '#f43f5e',
    emoji: '🎭',
  },
];

function StatusBadge({ status }) {
  if (status === 'ongoing') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        In Progress
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
      Complete
    </span>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl border border-white/8 bg-[#0d0d0d] overflow-hidden cursor-default"
      style={{
        boxShadow: hovered
          ? `0 0 0 1px ${project.accentColor}50, 0 20px 60px ${project.accentColor}15`
          : '0 0 0 1px rgba(255,255,255,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
      />
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${project.accentColor}12, transparent 70%)`,
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold opacity-40" style={{ color: project.accentColor }}>
                {project.number}
              </span>
              {project.featured && (
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: `${project.accentColor}20`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}30`,
                  }}
                >
                  Featured
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-white leading-tight">{project.title}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{project.subtitle}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
          <span>{project.date}</span>
          {project.teamSize && <><span>·</span><span>Team of {project.teamSize}</span></>}
          {project.mentor && <><span>·</span><span className="truncate">Mentor: {project.mentor}</span></>}
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/8 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.link && project.link !== '#' ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link w-fit"
              style={{ color: project.accentColor }}
            >
              <span>View Project</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : (
            <span className="text-xs text-gray-600 italic">Private / In Progress</span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ExperimentCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl border border-white/8 bg-[#0d0d0d] overflow-hidden"
      style={{
        boxShadow: hovered
          ? `0 0 0 1px ${project.accentColor}50, 0 20px 60px ${project.accentColor}18`
          : '0 0 0 1px rgba(255,255,255,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
      />
      <div className="p-6 flex flex-col sm:flex-row gap-5">
        <div className="text-4xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
          {project.emoji}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="text-base font-bold text-white">{project.title}</h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-sm text-gray-500 mb-1">{project.subtitle}</p>
          <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
            <span>{project.date}</span>
            {project.teamSize && <><span>·</span><span>Team of {project.teamSize}</span></>}
            {project.mentor && <><span>·</span><span>Mentor: {project.mentor}</span></>}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/8"
              >
                {t}
              </span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
              style={{ color: project.accentColor }}
            >
              <span>View Project</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {

  return (
    <main
      className="relative min-h-screen w-full bg-[#080808] text-white px-4 sm:px-6 lg:px-8 pt-28 pb-20 overflow-hidden"
      aria-label="Projects by Sahil Chaurasiya – Full-Stack Developer"
    >
      {/* Static CSS-only background — zero JS, zero Canvas, zero lag */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.10), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.25em] text-violet-400 uppercase mb-3">✦ Portfolio</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          >
            Things I&apos;ve{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Full-stack products, AI integrations, and real-world systems — from concept to production.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-8 mb-14 pb-14 border-b border-white/8"
        >
          {[
            { value: mainProjects.length, label: 'Projects' },
            { value: mainProjects.filter((p) => p.featured).length, label: 'Featured' },
            { value: '14+', label: 'Technologies' },
            { value: mainProjects.filter((p) => p.status === 'ongoing').length, label: 'Ongoing' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span
                className="text-3xl font-black tabular-nums"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {mainProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Experiments & Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/4">
              <span className="text-base">🧪</span>
              <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Experiments</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <p className="text-sm text-gray-600 text-center mb-8">
            Side builds, AI explorations, and things made for learning — or absolutely no legitimate reason.
          </p>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {experimentsProjects.map((p, i) => (
              <ExperimentCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20 pt-10 border-t border-white/8"
        >
          <p className="text-gray-500 text-sm mb-5">More experiments and open-source work on GitHub</p>
          <a
            href="https://github.com/sahil-chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>View on GitHub</span>
          </a>
        </motion.div>

      </div>
    </main>
  );
}