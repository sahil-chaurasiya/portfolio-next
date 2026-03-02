'use client';
// SEO NOTE: Export this metadata from your /resume/page.js (server component):
// export const metadata = {
//   title: 'Resume – Sahil Chaurasiya | Full-Stack Developer',
//   description: 'View and download the resume of Sahil Chaurasiya – Full-Stack Developer with internship at Shroti Telecom, projects in Next.js, Django, Node.js, and MongoDB. CGPA 7.12, SISTec GN Bhopal.',
//   alternates: { canonical: 'https://portfolio-next-eight-rose.vercel.app/resume' },
//   openGraph: {
//     title: 'Resume – Sahil Chaurasiya | Full-Stack Developer',
//     description: 'Resume of Sahil Chaurasiya: internship, projects, certifications, and technical skills.',
//     url: 'https://portfolio-next-eight-rose.vercel.app/resume',
//   },
// };

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaTrophy,
  FaCertificate,
  FaGlobe,
  FaUser,
} from 'react-icons/fa';

export default function ResumePage() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <main
      className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden"
      aria-label="Resume of Sahil Chaurasiya – Full-Stack Developer"
    >
      {/* Enhanced Background Effects - Same as other pages */}
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

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
        {/* Header with Back Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
              style={{ 
                fontFamily: 'var(--font-pacifico), cursive',
                lineHeight: '1.2',
                paddingBottom: '0.29em',
                marginBottom: '0.5rem'
              }}
            >
              📄 My Resume
            </h1>
            <p className="text-gray-400 text-lg">
              Full-Stack Developer • Automation Enthusiast • Problem Solver
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-0"
          >
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/60 transition cursor-pointer backdrop-blur-sm"
              >
                ← Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Main Resume Card */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Contact */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur opacity-75"></div>
                  <Image
                    src="/me.png"
                    alt="Sahil Chaurasiya"
                    width={128}
                    height={128}
                    className="relative rounded-full border-4 border-white/20"
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-white text-center mb-2">
                  Sahil Chaurasiya
                </h2>
                <p className="text-gray-400 text-center mb-4">
                  B.Tech. Computer Science & Engineering
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <FaMapMarkerAlt className="text-violet-400" />
                    <span className="text-gray-300">Bhopal, MP</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaGraduationCap className="text-cyan-400" />
                    <span className="text-gray-300">CGPA: 7.12</span>
                  </div>
                </div>

                {/* Download Button */}
                <motion.a
                  href="/Sahil_Chaurasiya_Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <FaDownload />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaEnvelope className="text-cyan-400" />
                  Contact Info
                </h3>
                
                <div className="space-y-4">
                  <a href="mailto:chaurasiyasahil18@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaEnvelope className="text-rose-500" />
                    <span>chaurasiyasahil18@gmail.com</span>
                  </a>
                  <a href="tel:+918176078586" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaPhone className="text-emerald-500" />
                    <span>+91 81760 78586</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com/sahil-chaurasiya"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="mailto:chaurasiyasahil18@gmail.com"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="tel:+918176078586"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                    >
                      <FaPhone className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Expertise */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaTools className="text-violet-400" />
                  Key Expertise
                </h3>
                
                <div className="space-y-3">
                  {[
                    'Full-Stack Development',
                    'Process Automation',
                    'Database Management',
                    'Real-time Systems',
                    'REST APIs',
                    'Role-Based Access Control',
                    'SEO Optimization',
                    'Web Applications'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Brief Summary */}
            <Section title="Brief Summary" icon="🧠">
              <p className="text-gray-300 text-lg leading-relaxed">
                Full-stack developer experienced in building and deploying <strong className="text-white">production-ready web applications</strong> using <strong className="text-white">Node.js</strong>, <strong className="text-white">Django</strong>, and <strong className="text-white">Next.js</strong>. 
                Developed a live campus networking platform with real-time messaging, role-based access control, and optimized database queries. 
                Skilled in <strong className="text-white">automation workflows</strong>, <strong className="text-white">chatbots</strong>, <strong className="text-white">backend development</strong>, <strong className="text-white">APIs</strong>, and <strong className="text-white">data handling</strong>.
                Comfortable debugging APIs, working with existing codebases, and shipping features in collaborative environments.
              </p>
            </Section>

            {/* Internship */}
            <Section title="Internship" icon="💼">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shrink-0">
                      <FaBriefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="text-xl font-bold text-white">Junior Software Developer</h3>
                        <span className="text-xs text-gray-500 font-mono">22 Aug, 2025 – 22 Jan, 2026</span>
                      </div>
                      <p className="text-cyan-400 font-medium mb-3">Shroti Telecom Pvt. Ltd.</p>
                      <ul className="space-y-2 text-gray-300 text-sm leading-relaxed list-none">
                        {[
                          'Developed and maintained REST APIs using Django and FastAPI for internal and client-facing applications.',
                          'Implemented authentication, authorization, and role-based access control for secure data handling.',
                          'Debugged API responses and fixed integration issues affecting frontend workflows.',
                          'Optimized database queries and improved response consistency.',
                          'Worked on feature updates and bug fixes in an existing production codebase.',
                        ].map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Education */}
            <Section title="Education" icon="🎓">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    school: 'Sagar Institute of Science & Technology (SISTec GN)',
                    degree: 'B.Tech. - Computer Science & Engineering',
                    year: '2022 – 2026',
                    grade: 'CGPA: 7.12 / 10'
                  },
                  {
                    school: 'Shri Durga Ji Public School, Azamgarh',
                    degree: '12th | CBSE',
                    year: '2022',
                    grade: 'Percentage: 67.60 / 100'
                  },
                  {
                    school: 'Shri Durga Ji Public School, Azamgarh',
                    degree: '10th | CBSE',
                    year: '2020',
                    grade: 'Percentage: 79.20 / 100'
                  }
                ].map((edu, idx) => (
                  <EduCard key={idx} {...edu} />
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Projects" icon="🚀">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section title="Technical Skills" icon="🛠️">
              <div className="space-y-6">
                {[
                  { category: 'Languages', skills: ['JavaScript', 'Python', 'C++', 'Core Java', 'SQL'] },
                  { category: 'Frontend', skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
                  { category: 'Backend', skills: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs', 'Socket.io'] },
                  { category: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MySQL'] },
                  { category: 'Tools & Others', skills: ['Git', 'GitHub', 'Linux', 'JWT', 'Postman', 'Vercel', 'Streamlit'] },
                  { category: 'Core CS', skills: ['DSA', 'DBMS', 'OOP'] },
                ].map((skillCat, idx) => (
                  <SkillCategory key={idx} {...skillCat} />
                ))}
              </div>
            </Section>

            {/* Achievements & Certifications */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Achievements */}
              <Section title="Awards & Achievements" icon="🏆">
                <div className="space-y-4">
                  {[
                    'Best Intern Award – Shroti Telecom Pvt. Ltd. (2026)',
                    'First Position in Number Games Season 4 • SISTec College',
                    'Gold Badge for Problem Solving • CodeChef',
                    'Five Star Badges in Java & Python • HackerRank',
                    'Five Star Badges in Java, C++ & Python • HackerEarth',
                    'Smart India Hackathon • Participant',
                    'Selected as Class Representative',
                  ].map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-2xl">🏅</div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Certifications */}
              <Section title="Certifications" icon="📜">
                <div className="space-y-4">
                  {[
                    'Java Skill Test Certification • HackerRank',
                    'SQL (Basic) • HackerRank',
                    'Java (Basic) • HackerRank',
                    'The Joy of Computing using Python • NPTEL',
                    'Tools of Trade: Linux and SQL • Google (Coursera)',
                    'Climate Change and Human Rights • Amnesty International',
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="text-2xl">📄</div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Online Profiles */}
            <Section title="Online Profiles" icon="🌐">
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'GitHub', url: 'https://github.com/sahil-chaurasiya', color: 'from-gray-800 to-black' },
                  { name: 'Portfolio', url: 'https://portfolio-next-eight-rose.vercel.app/', color: 'from-violet-600 to-purple-600' },
                  { name: 'CodeChef', url: 'https://www.codechef.com/users/sahil73', color: 'from-orange-600 to-red-600' },
                  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/chaurasiyasahil1', color: 'from-green-600 to-emerald-600' },
                  { name: 'HackerEarth', url: 'https://www.hackerearth.com/@chaurasiyasahil18/', color: 'from-blue-600 to-cyan-600' },
                ].map((profile, idx) => (
                  <motion.a
                    key={idx}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`px-5 py-2.5 bg-gradient-to-r ${profile.color} rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all text-sm`}
                  >
                    {profile.name} →
                  </motion.a>
                ))}
              </div>
            </Section>

            {/* Personal Details */}
            <Section title="Personal Details" icon="👤">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Date of Birth', value: '01 July, 2004' },
                  { label: 'Gender', value: 'Male' },
                  { label: 'Languages', value: 'English & Hindi' },
                  { label: 'Current Address', value: 'SISTec GN, Gandhinagar, Bhopal, MP – 462036' },
                  { label: 'Permanent Address', value: 'Tahbarpur, Azamgarh, UP – 276208' },
                  { label: 'Email', value: 'chaurasiyasahil18@gmail.com', link: 'mailto:chaurasiyasahil18@gmail.com' },
                  { label: 'Phone', value: '+91-8176078586', link: 'tel:+918176078586' },
                ].map((detail, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-slate-900/30 to-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{detail.label}</p>
                    {detail.link ? (
                      <a href={detail.link} className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{detail.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}

// ------------------ Reusable Components ------------------

const Section = ({ title, children, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      <div>{children}</div>
    </motion.div>
  );
};

const EduCard = ({ school, degree, year, grade }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-all"
  >
    <h3 className="font-bold text-white mb-2">{school}</h3>
    <p className="text-gray-400 text-sm mb-1">{degree}</p>
    <p className="text-xs text-gray-500 mb-2">{year}</p>
    <p className="text-sm font-medium text-cyan-400">{grade}</p>
  </motion.div>
);

const ProjectCard = ({ title, tech, desc, link, date, mentor, teamSize }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
  >
    {date && <p className="text-xs text-cyan-400 mb-2 font-mono">{date}</p>}
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    {(mentor || teamSize) && (
      <p className="text-xs text-gray-500 mb-2">
        {mentor && `Mentor: ${mentor}`}{mentor && teamSize && ' • '}{teamSize && `Team: ${teamSize}`}
      </p>
    )}
    <p className="text-xs text-gray-400 mb-3 font-mono">{tech}</p>
    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{desc}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
        rel="noopener noreferrer"
      >
        <span>View Project</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    )}
  </motion.div>
);

const SkillCategory = ({ category, skills }) => (
  <div className="bg-gradient-to-br from-slate-900/30 to-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-5">
    <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 hover:border-violet-400/50 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const projects = [
  {
    title: 'Personal Developer Portfolio (SEO Optimized)',
    date: '06 Nov, 2025 – 20 Nov, 2025',
    tech: 'Next.js, Technical SEO, Performance Optimization, Deployment, Responsive Web Design',
    desc: 'Designed and developed a personal developer portfolio using Next.js. Implemented technical SEO including meta tags, sitemap, robots.txt and structured content. Optimized page performance and accessibility for better search ranking. Achieved first-page Google rankings for multiple developer-related keywords, including top position for select search queries. Serves as primary client acquisition and credibility platform.',
    link: 'https://portfolio-next-eight-rose.vercel.app/',
    teamSize: '1',
  },
  {
    title: 'Sheetal Academy, Uran (Navi Mumbai) – Business Website & SEO Implementation',
    date: '28 Jul, 2025 – 03 Aug, 2025',
    tech: 'Next.js, Tailwind CSS, MongoDB, JWT Authentication, EmailJS, Responsive Web Design, SEO Optimization, Deployment, Performance Optimization',
    desc: 'Developed and deployed a production website and admin dashboard using Next.js and MongoDB for a live coaching institute. Built secure authentication and dynamic content management for announcements, jobs and events. Implemented form handling and lead capture workflows with automated responses. Optimized technical SEO and site structure, achieving first-page Google rankings for relevant institute search queries including top position for specific keywords. Hosted on Vercel with responsive UI and performance optimization for mobile users.',
    link: 'https://sheetal-academy.vercel.app/',
    teamSize: '1',
  },
  {
    title: 'SISTec Alumni Networking Platform – Real-Time Web Application',
    mentor: 'Prof. Nargish Gupta',
    teamSize: '4',
    tech: 'MongoDB, Express.js, React.js, Node.js, Socket.io, Deployment',
    desc: 'Led development of a full-stack networking platform for students and alumni with real-time messaging using Socket.io. Architected MongoDB schema for conversations and optimized message retrieval queries. Implemented authentication, protected routes and role-based dashboards (admin/user). Resolved real-time chat event conflicts and managed persistent user sessions. Coordinated frontend–backend integration and guided feature implementation across the team. Deployed on institute subdomain with active users for posts, messaging, and event interaction.',
    link: 'http://alumni.sistec.ac.in/',
  },
  {
    title: 'AI-Based Museum Ticket Booking Automation System',
    mentor: 'Dr. Bhavna Gupta',
    teamSize: '6',
    tech: 'Python, Streamlit, MonsterAPI',
    desc: 'Built an intelligent chatbot that automated the entire ticket booking workflow. Integrated chat and booking flow, reducing multiple manual steps into a single automated pipeline. Implemented structured user input capture, automated pricing, and ticket generation.',
    link: 'https://drive.google.com/drive/folders/1rKAP7_7-eeY-zJDn7uR2JqZKtF89MzVx?usp=drive_link',
  },
  {
    title: 'Java Data Structures Desktop Application',
    teamSize: '1',
    tech: 'Java, Java Swing, OOP, DSA',
    desc: 'Interactive desktop application with a GUI-based menu system for performing operations on core data structures (Array, Stack, Queue, Linked List, Tree, Graph). Includes dynamic visualization, error handling, input validation, and local file-based state persistence. Built in Eclipse.',
  },
  {
    title: 'Menu-Driven Data Structures Library',
    mentor: 'Dr. Nargish Gupta',
    teamSize: '1',
    tech: 'C++, DSA',
    desc: 'Console-based C++ application implementing core data structures (Array, Stack, Queue, Linked List, Tree, Graph) with a menu-driven interface. Each module supports insertion, deletion, traversal, and search. Focused on modular coding and dynamic memory management.',
    link: 'https://onlinegdb.com/Gvhd1l31a',
  },
];