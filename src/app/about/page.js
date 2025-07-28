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
      className="mb-6"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 pt-32 pb-32 overflow-hidden">
      {/* Violet Storm Top Glow Only */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-10"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          🪄 Who&apos;s Crafting This?
        </motion.h1>

        <FadeInSection delay={0.1}>
          <p className="text-base sm:text-lg leading-relaxed">
            I&apos;m <strong>Sahil Chaurasiya</strong>, a B.Tech Computer Science student at SISTec GN, Bhopal. I&apos;m passionate about
            building clean, scalable, and user-focused web applications using technologies like <strong>JavaScript</strong>, <strong>React.js</strong>,
            <strong>Node.js</strong>, and <strong>MongoDB</strong>. With hands-on experience in full-stack development, I love working on
            projects that solve real-world problems and enhance collaboration.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-base sm:text-lg leading-relaxed">
            I&apos;ve built several projects including a full-stack <a href="http://alumni.sistec.ac.in" className="text-blue-400 underline">Alumni Portal</a>,
            a menu-driven C++ Data Structures library, and an AI-based Museum Ticket Booking Chatbot using Streamlit and Monster API.
            I&apos;m also familiar with databases like <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>, and tools like <strong>Socket.io</strong> and <strong>Git</strong>.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <p className="text-base sm:text-lg leading-relaxed">
            I&apos;m constantly exploring new technologies and enjoy solving challenges on platforms like <a href="https://www.codechef.com/users/sahil73" className="text-blue-400 underline">CodeChef</a> and <a href="https://www.hackerrank.com/profile/chaurasiyasahil1" className="text-blue-400 underline">HackerRank</a>. I hold certifications in
            <strong> Java</strong>, <strong>SQL</strong>, and <strong>Python</strong>, and have participated in the <strong>Smart India Hackathon</strong> and <strong>Samadhan 1.0</strong>. During my third semester, I was elected Class Representative, where I supported faculty coordination and helped streamline communication within the class.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <p className="text-base sm:text-lg leading-relaxed">
            Let&apos;s build something awesome together. 🚀
          </p>
        </FadeInSection>
      </div>
    </main>
  );
}
