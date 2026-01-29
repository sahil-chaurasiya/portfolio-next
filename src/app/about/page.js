'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    const fallback = setTimeout(() => {
      controls.start({ opacity: 1, y: 0 });
    }, 1000);

    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      clearTimeout(fallback);
    }

    return () => clearTimeout(fallback);
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="mb-8"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-32 overflow-hidden">
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

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
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
            x: [0, -80, 0],
            y: [0, 80, 0],
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
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Pacifico', cursive" , lineHeight: '1.2',
                display: 'inline-block',
                paddingBottom: '0.3em',
                marginBottom: '-0.2em'}}
            
          >
            🪄 Who&apos;s Crafting This?
          </h1>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <p className="text-gray-400 text-lg px-6 py-2 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border border-violet-500/20 rounded-full backdrop-blur-sm"
              style={{
                display: 'inline-block',
                marginTop: '1.2em'}}
            >
              Full-Stack Developer • Automation Enthusiast • Problem Solver
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content - Narrative Style */}
        <div className="space-y-6">
          <FadeInSection delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="absolute top-4 left-4 text-4xl opacity-20">👋</div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                  I&apos;m <strong className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent font-bold">Sahil Chaurasiya</strong>, a B.Tech Computer Science student at SISTec GN, Bhopal, passionate about building
                  scalable, automation-driven, and user-focused software systems. I specialize in full-stack development using
                  <strong className="text-white"> JavaScript</strong>, <strong className="text-white">React.js</strong>, <strong className="text-white">Next.js</strong>, <strong className="text-white">Node.js</strong>, <strong className="text-white">Django</strong>,
                  and <strong className="text-white">MongoDB</strong>, with strong foundations in backend architecture, APIs, and data handling.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="absolute top-4 left-4 text-4xl opacity-20">💼</div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                  Currently, I&apos;m working as a <strong className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-bold">Software Developer Intern at Shroti Telecom</strong>, where I primarily work with
                  <strong className="text-white"> Django</strong> to build and maintain backend systems, APIs, and data-driven workflows. This experience has helped
                  me understand production-level backend development, real-world data handling, and scalable system design.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="absolute top-4 left-4 text-4xl opacity-20">🚀</div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                  I enjoy identifying manual or inefficient workflows and converting them into intelligent automated solutions using
                  modern web technologies and Python-based backend systems. My focus is on building software that improves productivity,
                  reduces repetitive work, and delivers clean, reliable user experiences.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="absolute top-4 left-4 text-4xl opacity-20">🎯</div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                  I&apos;ve built and deployed multiple real-world projects including a full-stack
                  <a href="http://alumni.sistec.ac.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 transition-all ml-1">Alumni Networking Platform</a>,
                  the production-ready
                  <a href="https://sheetal-academy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 transition-all mx-1">Sheetal Academy Website</a>
                  built using Next.js with admin dashboard, JWT authentication, MongoDB Atlas integration, and SEO optimization,
                  and an AI-powered Museum Ticket Booking Automation system.
                  I also work with databases like <strong className="text-white">PostgreSQL</strong>, <strong className="text-white">MySQL</strong>, and tools such as
                  <strong className="text-white"> Socket.io</strong>, <strong className="text-white">Git</strong>, and <strong className="text-white">Linux</strong>.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="absolute top-4 left-4 text-4xl opacity-20">🏆</div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                  I actively solve problems on competitive platforms like
                  <a href="https://www.codechef.com/users/sahil73" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 transition-all mx-1">CodeChef</a> and
                  <a href="https://www.hackerrank.com/profile/chaurasiyasahil1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 transition-all mx-1">HackerRank</a>,
                  hold certifications in Java, SQL, and Python, and have participated in national-level hackathons including
                  <strong className="text-white"> Smart India Hackathon</strong>.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.6}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm border border-violet-500/30 rounded-2xl">
                <div className="absolute top-4 left-4 text-4xl opacity-20">✨</div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-200 mb-4">
                  I&apos;m currently focused on building scalable software products and intelligent platforms that solve real-world
                  collaboration, automation, and networking challenges.
                </p>
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent text-center">
                  Let&apos;s build something meaningful together. 🚀
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Contact Links */}
          <FadeInSection delay={0.7}>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="https://github.com/sahil-chaurasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/80 to-violet-700/80 hover:from-violet-500 hover:to-violet-600 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-violet-400/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500 hover:to-blue-500 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-cyan-400/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:chaurasiyasahil18@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/80 to-violet-600/80 hover:from-blue-500 hover:to-violet-500 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-blue-400/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </main>
  );
}