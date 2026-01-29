'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: "HTML", img: "/skills/HTML.png", category: "frontend", level: "Expert" },
  { name: "CSS", img: "/skills/CSS.png", category: "frontend", level: "Expert" },
  { name: "JavaScript", img: "/skills/JavaScript.png", category: "frontend", level: "Expert" },
  { name: "React", img: "/skills/React.png", category: "frontend", level: "Advanced" },
  { name: "Next.js", img: "/skills/next.jpeg", category: "frontend", level: "Advanced" },
  { name: "Node.js", img: "/skills/node.png", category: "backend", level: "Advanced" },
  { name: "Express", img: "/skills/express.png", category: "backend", level: "Advanced" },
  { name: "MongoDB", img: "/skills/mongo.png", category: "database", level: "Intermediate" },
  { name: "Tailwind CSS", img: "/skills/tailwind.png", category: "frontend", level: "Expert" },
  { name: "Git", img: "/skills/git.png", category: "tools", level: "Advanced" },
  { name: "GitHub", img: "/skills/github.png", category: "tools", level: "Advanced" },
  { name: "MySQL", img: "/skills/mysql.png", category: "database", level: "Intermediate" },
  { name: "PostgreSQL", img: "/skills/psql.jpeg", category: "database", level: "Intermediate" },
  { name: "Java", img: "/skills/java.png", category: "language", level: "Intermediate" },
  { name: "Python", img: "/skills/python.png", category: "language", level: "Intermediate" },
  { name: "C++", img: "/skills/c++.png", category: "language", level: "Intermediate" },
  { name: "Socket.io", img: "/skills/socket.png", category: "backend", level: "Intermediate" },
  { name: "Streamlit", img: "/skills/streamlit.png", category: "tools", level: "Beginner" },
];

const skillCategories = [
  { name: "Frontend", color: "from-violet-500 to-cyan-500", count: 5 },
  { name: "Backend", color: "from-cyan-500 to-blue-500", count: 3 },
  { name: "Database", color: "from-blue-500 to-violet-500", count: 3 },
  { name: "Languages", color: "from-emerald-500 to-cyan-500", count: 3 },
  { name: "Tools", color: "from-amber-500 to-orange-500", count: 4 },
];

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.05,
          ease: 'easeOut',
        },
      });
    }
  }, [isInView, controls, index]);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-gradient-to-r from-emerald-500 to-green-500';
      case 'Advanced': return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      case 'Intermediate': return 'bg-gradient-to-r from-violet-500 to-purple-500';
      case 'Beginner': return 'bg-gradient-to-r from-amber-500 to-orange-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-700';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
      <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center h-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)]">
        <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black border border-white/10 p-4 group-hover:border-white/20 transition-all duration-300">
          <Image
            src={skill.img}
            alt={skill.name}
            width={48}
            height={48}
            className="object-contain max-w-full max-h-full filter group-hover:brightness-110 transition-all duration-300"
          />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {skill.name}
        </h3>
        
        <div className={`${getLevelColor(skill.level)} px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md transition-all duration-300 group-hover:scale-105`}>
          {skill.level}
        </div>
        
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <main className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
      {/* Enhanced Background Effects - Same as your other pages */}
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
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
        {/* Header Section - Matches your Projects page style */}
        <motion.div
          ref={headingRef}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            style={{ 
              fontFamily: 'var(--font-pacifico), cursive',
              lineHeight: '1.2',
              paddingBottom: '0.15em',
              marginBottom: '0.5rem'
            }}
          >
            🔧 Tech Arsenal
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies & tools I use to craft modern, scalable, and efficient web applications
          </p>
        </motion.div>

        {/* Skill Categories Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, idx) => (
            <div 
              key={category.name}
              className="px-4 py-2 bg-gradient-to-r from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/30 transition-all"
            >
              <div className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </div>
              <div className="text-xs text-gray-400 text-center mt-1">{category.count} skills</div>
            </div>
          ))}
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          <div className="text-center px-6 py-4 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {skills.length}
            </div>
            <div className="text-sm text-gray-400 mt-2">Total Skills</div>
          </div>
          <div className="text-center px-6 py-4 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {skills.filter(s => s.level === 'Expert' || s.level === 'Advanced').length}
            </div>
            <div className="text-sm text-gray-400 mt-2">Advanced+</div>
          </div>
          <div className="text-center px-6 py-4 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              {skillCategories.length}
            </div>
            <div className="text-sm text-gray-400 mt-2">Categories</div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"></div>
            <span className="text-xs text-gray-400">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <span className="text-xs text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></div>
            <span className="text-xs text-gray-400">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <span className="text-xs text-gray-400">Beginner</span>
          </div>
        </motion.div>

        {/* Footer CTA */}
        {/* Footer CTA - Fixed for mobile */}
{/* Footer CTA - Always side by side */}
<motion.div
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1 }}
  viewport={{ once: true }}
  className="text-center mt-16"
>
  <p className="text-gray-400 mb-6">Want to see these skills in action?</p>
  <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
    <a
      href="/project"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-white font-medium hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-xl min-w-[160px]"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      <span className="whitespace-nowrap">View Projects</span>
    </a>
    <a
      href="/resume"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-black border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all backdrop-blur-sm min-w-[160px]"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="whitespace-nowrap">View Resume</span>
    </a>
  </div>
</motion.div>

      </div>
    </main>
  );
}