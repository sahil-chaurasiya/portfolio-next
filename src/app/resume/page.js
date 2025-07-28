'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { FloatingDock } from '../components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
} from '@tabler/icons-react';

export default function ResumePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d1117] via-[#121c2a] to-[#0d1117] text-white px-6 pt-6 pb-12 md:px-20 lg:px-32 font-sans overflow-x-hidden">
      <div className="relative z-10">
        <div className="flex justify-end mb-6">
          <Link href="/">
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition shadow-md cursor-pointer">
              ← Back to Home
            </button>
          </Link>
        </div>

        <section className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/me.png"
              alt="Sahil Chaurasiya"
              width={140}
              height={140}
              className="rounded-full mx-auto border-4 border-[#58a6ff] shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-white">
              Sahil Chaurasiya
            </h1>
            <p className="text-md mt-2 text-gray-400">Full Stack Developer | Java | React | Node</p>
            <div className="mt-4">
              <button className="mt-3 px-4 py-1 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition text-sm">
                Download Resume
              </button>
            </div>
          </motion.div>
        </section>

        <div className="flex justify-start md:justify-center mb-20">
          <FloatingDock
            items={[
              { title: 'GitHub', icon: <IconBrandGithub />, href: 'https://github.com/sahil-chaurasiya' },
              { title: 'LinkedIn', icon: <IconBrandLinkedin />, href: 'https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/' },
              { title: 'Email', icon: <IconMail />, href: 'mailto:chaurasiyasahil18@gmail.com' },
              { title: 'Call', icon: <IconPhoneCall />, href: 'tel:+918176078586' },
            ]}
          />
        </div>

        <DecorDivider />
        <Section title="Summary" icon="🧠">
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate full stack developer with expertise in Java, C++, React, Node.js, and databases.
            I love building scalable systems and solving real-world problems with clean code.
          </p>
        </Section>

        <DecorDivider />
        <Section title="Education" icon="🎓">
          <div className="grid md:grid-cols-2 gap-6">
            <EduCard isMobile={isMobile} school="SISTec GN" degree="B.Tech CSE" year="2022–2026" grade="CGPA: 6.96" />
            <EduCard isMobile={isMobile} school="Shri Durga Ji Public School" degree="12th CBSE" year="2022" grade="67.60%" />
            <EduCard isMobile={isMobile} school="Shri Durga Ji Public School" degree="10th CBSE" year="2020" grade="79.20%" />
          </div>
        </Section>

        <DecorDivider />
        <Section title="Projects" icon="🚀">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </Section>

        <DecorDivider />
        <Section title="Skills" icon="🛠️">
          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            {[
              'Java', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript',
              'React.js', 'Next.js', 'Node.js', 'Express.js',
              'MongoDB', 'MySQL', 'PostgreSQL',
              'Tailwind CSS',
              'Git', 'GitHub', 'Linux', 'Socket.io', 'Streamlit',
              'REST APIs', 'Render',
              'Postman', 'Computer Networking'
            ].map((skill, i) => (
              <SkillCard key={i} skill={skill} isMobile={isMobile} />
            ))}
          </div>
        </Section>

        <DecorDivider />
        <Section title="Certifications" icon="📜">
          <ul className="list-disc ml-6 space-y-1 text-gray-300 leading-relaxed">
            <li>Java Skill Test – HackerRank</li>
            <li>5⭐ Java & Python – HackerRank</li>
            <li>5⭐ Java, C++, Python – HackerEarth</li>
            <li>Gold Badge – CodeChef</li>
            <li>The Joy of Computing (Python) – NPTEL</li>
            <li>Linux & SQL – Coursera (Google)</li>
          </ul>
        </Section>

        <DecorDivider />
        <Section title="Assessments" icon="📊">
          <ul className="list-disc ml-6 space-y-1 text-gray-300 leading-relaxed">
            <li>Java (Basic) – HackerRank: OOP, Loops, Debugging</li>
            <li>SQL (Basic) – HackerRank: Joins, Subqueries, Aggregates</li>
            <li>Linux & SQL – Coursera: Shell, Scripting, CLI Tools</li>
          </ul>
        </Section>

        <DecorDivider />
        <Section title="Awards & Achievements" icon="🏆">
          <ul className="list-disc ml-6 space-y-1 text-gray-300 leading-relaxed">
            <li>1st Position in Number Games Season 4</li>
            <li>Gold Badge for Problem Solving – CodeChef</li>
            <li>Smart India Hackathon – Participant</li>
          </ul>
        </Section>

        <DecorDivider />
        <Section title="Extra Curricular" icon="🎯">
          <ul className="list-disc ml-6 space-y-1 text-gray-300 leading-relaxed">
            <li>Class Representative – SISTec GN</li>
            <li>Certification in Climate Change – Amnesty International</li>
          </ul>
        </Section>

        <DecorDivider />
        <Section title="Interests & Hobbies" icon="🎨">
          <ul className="list-disc ml-6 space-y-1 text-gray-300 leading-relaxed">
            <li>UI/UX Design & Wireframing</li>
            <li>Open Source Contributions</li>
            <li>Listening to Classic Rock (The Beatles 🎵)</li>
            <li>Watching Sci-Fi & Fantasy (House of the Dragon 🐉)</li>
            <li>Blog Writing & Technical Documentation</li>
          </ul>
        </Section>

        <DecorDivider />
        <Section title="Online Profiles" icon="🌐">
          <div className="flex flex-wrap gap-6 text-md text-blue-400 underline decoration-dotted">
            <a href="https://github.com/sahil-chaurasiya">GitHub</a>
            <a href="https://www.codechef.com/users/sahil73">CodeChef</a>
            <a href="https://www.hackerrank.com/profile/chaurasiyasahil1">HackerRank</a>
            <a href="https://www.hackerearth.com/@chaurasiyasahil18/">HackerEarth</a>
          </div>
        </Section>
      </div>
    </div>
  );
}

// ------------------ Reusable Components ------------------

const EduCard = ({ school, degree, year, grade, isMobile }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (isMobile) setActive(!active);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={!isMobile ? { scale: 1.03, rotateX: 5, rotateY: -5 } : {}}
      animate={active ? { scale: 1.03, rotateX: 5, rotateY: -5 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className="cursor-pointer bg-[#1b1f27] p-5 rounded-lg border border-gray-700 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-blue-500/20"
    >
      <h3 className="font-semibold text-white text-lg">{school}</h3>
      <p className="text-gray-400 text-sm">{degree} ({year})</p>
      <p className="text-sm text-gray-300">{grade}</p>
    </motion.div>
  );
};

const ProjectCard = ({ title, tech, desc, link }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (isMobile) setActive(!active);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={!isMobile ? { scale: 1.03, rotateX: 5, rotateY: -5 } : {}}
      animate={active ? { scale: 1.03, rotateX: 5, rotateY: -5 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      style={{ perspective: 1000 }}
      className="cursor-pointer bg-[#161b22]/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-blue-500/20 transition-all"
    >
      <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
      <p className="text-xs text-gray-400 mb-2">{tech}</p>
      <p className="text-gray-300 mb-3">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-400 hover:underline text-sm"
          rel="noopener noreferrer"
        >
          🔗 {link}
        </a>
      )}
    </motion.div>
  );
};

const SkillCard = ({ skill, isMobile }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (isMobile) setActive(!active);
  };

  return (
    <motion.span
      onClick={handleClick}
      whileHover={!isMobile ? { scale: 1.08, rotateX: 5, rotateY: -5 } : {}}
      animate={active ? { scale: 1.08, rotateX: 5, rotateY: -5 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className="cursor-pointer bg-gradient-to-br from-[#1c1f26] to-[#2a2f3d] text-gray-200 px-4 py-2 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),_0_4px_8px_rgba(0,0,0,0.5)] border border-gray-700 transition duration-200 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_8px_16px_rgba(88,166,255,0.3)]"
    >
      {skill}
    </motion.span>
  );
};

const Section = ({ title, children, icon }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-2 text-[#58a6ff] border-l-4 border-[#58a6ff] pl-4">
      <span>{icon}</span> {title}
    </h2>
    <div>{children}</div>
  </motion.section>
);

const DecorDivider = () => (
  <div className="w-full h-1 mb-10 mt-10 bg-gradient-to-r from-[#0d1117] via-[#58a6ff] to-[#0d1117] rounded-full opacity-70" />
);

const projects = [
  {
    title: 'SISTec Alumni Portal',
    tech: 'MongoDB, Express.js, React.js, Node.js, Socket.io',
    desc: 'Full-stack portal for students, alumni, and admins with chat, events, and job posts.',
    link: 'http://alumni.sistec.ac.in/',
  },
  {
    title: 'Menu-Driven DSA Library',
    tech: 'C++, Data Structures',
    desc: 'Console-based app implementing key data structures with a menu interface.',
    link: 'https://onlinegdb.com/Gvhd1l31a',
  },
  {
    title: 'AI Museum Ticket Booking',
    tech: 'Streamlit, MonsterAPI',
    desc: 'Chatbot interface for booking museum tickets, integrated with AI.',
    link: 'https://drive.google.com/drive/folders/1rKAP7_7-eeY-zJDn7uR2JqZKtF89MzVx',
  },
  {
    title: 'Restaurant Website',
    tech: 'HTML, CSS',
    desc: 'A simple responsive website to showcase restaurant offerings.',
  },
];
