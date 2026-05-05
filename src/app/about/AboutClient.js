'use client';
// SEO NOTE: Export this metadata from your /about/page.js (server component):
// export const metadata = {
//   title: 'About Sahil Chaurasiya – Full-Stack Developer from Bhopal',
//   description: 'Sahil Chaurasiya is a Full-Stack Developer at ToFly Media. Building scalable MERN stack products, AI integrations, and real-world systems from Bhopal, India.',
//   alternates: { canonical: 'https://sahilchaurasiya.me/about' },
//   openGraph: {
//     title: 'About Sahil Chaurasiya – Full-Stack Developer',
//     description: 'Full-Stack Developer at ToFly Media. Next.js, React, Node.js, MongoDB.',
//     url: 'https://sahilchaurasiya.me/about',
//   },
// };

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  {
    role: 'Software Developer',
    company: 'ToFly Media',
    type: 'Full-time',
    period: 'Apr 2026 – Present',
    location: 'Bhopal, India · On-site',
    current: true,
    accentColor: '#7c3aed',
    description:
      'First software developer hire — responsible for the entire technical stack across client and internal projects.',
    bullets: [
      'Building scalable full-stack applications with the MERN stack from architecture to deployment',
      'Designing secure backend systems with authentication and role-based access control',
      'Building admin panels, internal tools, and client portals for business workflows',
      'Implementing third-party integrations including payments and real-time features',
      'Collaborating directly with stakeholders to translate requirements into production-ready systems',
    ],
    skills: ['Full-Stack Development', 'MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'REST APIs', 'Socket.io'],
  },
  {
    role: 'Junior Software Developer',
    company: 'Shroti Telecom Pvt. Ltd.',
    type: 'Internship',
    period: 'Sep 2025 – Mar 2026',
    location: 'Bhopal, India · On-site',
    current: false,
    accentColor: '#0ea5e9',
    description:
      'Built and maintained full-stack web applications across a 7-month internship in a production environment.',
    bullets: [
      'Developed full-stack apps with Python, Django, and modern frontend technologies',
      'Implemented backend logic, authentication, and role-based access control for production systems',
      'Integrated APIs, optimized database queries, and improved application performance',
      'Debugged and resolved runtime and logical issues across both frontend and backend code',
    ],
    skills: ['Django', 'Python', 'MySQL', 'REST APIs', 'FastAPI', 'Authentication'],
  },
];

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-2 bottom-0 w-px"
        style={{
          background: `linear-gradient(to bottom, ${exp.accentColor}60, transparent)`,
        }}
      />
      {/* Timeline dot */}
      <div
        className="absolute left-[-5px] top-[10px] w-[11px] h-[11px] rounded-full border-2 border-[#080808]"
        style={{ background: exp.accentColor }}
      >
        {exp.current && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: exp.accentColor }}
          />
        )}
      </div>

      <div
        className="group rounded-2xl border border-white/8 bg-[#0d0d0d] p-6 hover:border-white/14 transition-all duration-300"
        style={{
          boxShadow: `0 0 0 1px rgba(255,255,255,0.04)`,
        }}
      >
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-white">{exp.role}</h3>
              {exp.current && (
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: `${exp.accentColor}20`,
                    color: exp.accentColor,
                    border: `1px solid ${exp.accentColor}30`,
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <p className="text-sm font-medium" style={{ color: exp.accentColor }}>
              {exp.company}
              <span className="text-gray-600 font-normal ml-2">· {exp.type}</span>
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs text-gray-400 font-medium">{exp.period}</p>
            <p className="text-xs text-gray-600 mt-0.5">{exp.location}</p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

        <ul className="space-y-2 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.accentColor }} />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((s, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/8 font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-mono tracking-[0.22em] text-violet-400 uppercase mb-3">{children}</p>
  );
}

export default function About() {
  return (
    <main
      className="relative min-h-screen w-full bg-[#080808] text-white px-4 sm:px-6 lg:px-8 pt-28 pb-24 overflow-hidden"
      aria-label="About Sahil Chaurasiya – Full-Stack Developer"
    >
      {/* Hidden SEO heading */}
      <h1 className="sr-only">About Sahil Chaurasiya – Full-Stack Developer from Bhopal</h1>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.10), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <SectionLabel>✦ About</SectionLabel>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          >
            Building things that{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 60%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              actually ship.
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I&apos;m <strong className="text-white font-semibold">Sahil Chaurasiya</strong> — a full-stack developer
            from Bhopal, India. I build real products: client portals, admin dashboards, AI integrations, and everything
            in between. Currently the first software developer at ToFly Media, shipping production-grade systems end-to-end.
          </p>
        </motion.div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

          {/* Left — Story + Experience */}
          <div className="space-y-14">

            {/* Story */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <SectionLabel>✦ The story</SectionLabel>
              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  I started like most developers — building tiny projects nobody asked for, breaking things, and
                  occasionally fixing them. What stuck was the realisation that software is just workflow automation
                  with a UI. Once I saw everything that way, I couldn&apos;t stop building.
                </p>
                <p>
                  I specialise in the MERN stack and Next.js, but I&apos;m not religious about tools. I&apos;ve
                  shipped production systems in Django, built AI-powered admin panels with Groq, and written
                  geofencing logic for a GPS attendance app that replaced a paper sign-in sheet. Whatever the
                  problem needs.
                </p>
                <p>
                  Outside of work I compete on CodeChef, collect certifications I occasionally read, and think about
                  SEO way more than a normal person should.
                </p>
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <SectionLabel>✦ Experience</SectionLabel>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <TimelineItem key={exp.company} exp={exp} index={i} />
                ))}
              </div>
            </motion.section>

          </div>

          {/* Right — Quick Facts + Links */}
          <div className="space-y-6">

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-white/8 bg-[#0d0d0d] p-6"
            >
              <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">Quick facts</p>
              <ul className="space-y-3">
                {[
                  { label: 'Based in', value: 'Bhopal, India 🇮🇳' },
                  { label: 'Studying', value: 'B.Tech CS — SISTec GN' },
                  { label: 'Stack', value: 'MERN + Next.js' },
                  { label: 'Open to', value: 'Freelance & Collabs' },
                  { label: 'Award', value: 'Best Intern — Shroti Telecom' },
                  { label: 'Hackathons', value: 'Smart India Hackathon' },
                  { label: 'Competitive', value: 'CodeChef · HackerRank' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-gray-600 shrink-0">{item.label}</span>
                    <span className="text-gray-300 text-right font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Currently building */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6"
            >
              <p className="text-xs font-mono tracking-widest text-violet-400 uppercase mb-4">Currently building</p>
              <ul className="space-y-3">
                {[
                  { name: 'Flowdesk', desc: 'SaaS client portal for agencies', color: '#10b981' },
                  { name: 'PersonalOS', desc: 'Productivity & career OS', color: '#0ea5e9' },
                  { name: 'ToFly Media', desc: 'Full agency website & CMS', color: '#7c3aed' },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: item.color }} />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              {[
                {
                  href: 'https://github.com/sahil-chaurasiya',
                  label: 'GitHub',
                  sub: 'github.com/sahil-chaurasiya',
                  color: '#a78bfa',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/',
                  label: 'LinkedIn',
                  sub: 'Connect with me',
                  color: '#38bdf8',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: 'mailto:chaurasiyasahil18@gmail.com',
                  label: 'Email',
                  sub: 'chaurasiyasahil18@gmail.com',
                  color: '#10b981',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/8 bg-[#0d0d0d] hover:border-white/16 hover:bg-white/4 transition-all duration-200 group"
                >
                  <span style={{ color: link.color }} className="shrink-0">{link.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">{link.label}</p>
                    <p className="text-xs text-gray-600 truncate">{link.sub}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-12 border-t border-white/8 text-center"
        >
          <p
            className="text-lg sm:text-xl font-semibold mb-2"
            style={{
              backgroundImage: 'linear-gradient(135deg, #a78bfa, #38bdf8, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Got something to build? Let&apos;s talk.
          </p>
          <p className="text-gray-600 text-sm">I&apos;m open to freelance work and interesting collaborations.</p>
        </motion.div>

      </div>
    </main>
  );
}