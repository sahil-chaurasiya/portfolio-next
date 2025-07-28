'use client';
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

function ProjectCard({ project }) {
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
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <CardSpotlight className="w-full rounded-2xl h-auto min-h-[20rem] md:min-h-[22rem] flex flex-col justify-between bg-transparent backdrop-blur-sm border border-white/10">
          <div className="relative z-20 px-6 py-6">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-sm sm:text-base text-neutral-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-600 px-2 py-1 rounded-full text-white"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-300 underline text-sm"
            >
              View Project
            </a>
          </div>
        </CardSpotlight>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'SISTec Alumni Portal',
      description:
        'A full-stack social platform for SISTec students, alumni, and admins with real-time chat, events, and job postings.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
      link: 'http://alumni.sistec.ac.in/',
    },
    {
      title: 'Data Structures Library',
      description:
        'A menu-driven C++ console app implementing core DS like Stack, Queue, Tree, and Graph with dynamic memory.',
      tech: ['C++', 'DSA'],
      link: 'https://onlinegdb.com/Gvhd1l31a',
    },
    {
      title: 'AI Museum Chatbot',
      description:
        'Built using Streamlit and MonsterAPI, this bot integrates ticket booking and interaction in a single interface.',
      tech: ['Python', 'Streamlit', 'MonsterAPI'],
      link: 'https://drive.google.com/drive/folders/1rKAP7_7-eeY-zJDn7uR2JqZKtF89MzVx?usp=drive_link',
    },
    {
      title: 'Restaurant Website',
      description:
        'A dynamic and responsive website to showcase restaurant menu, services, and ambiance.',
      tech: ['HTML', 'CSS'],
      link: 'https://drive.google.com/file/d/13GRuXJTJn5r4yzZYdXrzwFgzFDqkXcHA/view?t=41',
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
      {/* Violet Storm Top Glow Only */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-10"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          ✨ What I've Been Crafting
        </motion.h1>


        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
