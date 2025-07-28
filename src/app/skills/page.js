'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: "HTML", img: "/skills/HTML.png" },
  { name: "CSS", img: "/skills/CSS.png" },
  { name: "JavaScript", img: "/skills/JavaScript.png" },
  { name: "React", img: "/skills/React.png" },
  { name: "Next.js", img: "/skills/next.jpeg" },
  { name: "Node.js", img: "/skills/node.png" },
  { name: "Express", img: "/skills/express.png" },
  { name: "MongoDB", img: "/skills/mongo.png" },
  { name: "Tailwind CSS", img: "/skills/tailwind.png" },
  { name: "Git", img: "/skills/git.png" },
  { name: "GitHub", img: "/skills/github.png" },
  { name: "MySQL", img: "/skills/mysql.png" },
  { name: "PostgreSQL", img: "/skills/psql.jpeg" },
  { name: "Java", img: "/skills/java.png" },
  { name: "Python", img: "/skills/python.png" },
  { name: "C++", img: "/skills/c++.png" },
  { name: "Socket.io", img: "/skills/socket.png" },
  { name: "Streamlit", img: "/skills/streamlit.png" },
];

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        rotateY: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: 'easeOut',
        },
      });
    }
  }, [isInView, controls]);

  const handleClick = () => {
    if (window.innerWidth < 640) {
      setClicked(true);
      setTimeout(() => setClicked(false), 400);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateY: 15 }}
      animate={controls}
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.05,
        transition: { type: 'spring', stiffness: 200, damping: 10 },
      }}
      style={
        clicked
          ? {
              transform: 'rotateX(5deg) rotateY(-5deg) scale(1.05)',
              transition: 'transform 0.3s ease',
            }
          : {}
      }
      onClick={handleClick}
      className="group bg-[#0d1117] text-white p-4 rounded-2xl shadow-lg border border-[#2e2e2e] transition-transform duration-300 hover:shadow-[0_0_10px_#00FFFF,0_0_20px_#FF00FF]"
    >
      <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
        <Image
          src={skill.img}
          alt={skill.name}
          width={64}
          height={64}
          className="object-contain max-w-full max-h-full"
        />
      </div>
      <p className="text-sm font-semibold text-center">{skill.name}</p>
    </motion.div>
  );
}

export default function Skills() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const headingControls = useAnimation();

  useEffect(() => {
    const fallback = setTimeout(() => {
      headingControls.start({ opacity: 1, y: 0 });
    }, 1000); // trigger after 1 second if inView fails

    if (isHeadingInView) {
      headingControls.start({ opacity: 1, y: 0 });
      clearTimeout(fallback);
    }

    return () => clearTimeout(fallback);
  }, [isHeadingInView, headingControls]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 pt-32 pb-32">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          ref={headingRef}
          initial={{ y: -30, opacity: 0 }}
          animate={headingControls}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-10 text-white"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          <span className="text-white">🚀 Tech Arsenal</span>
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
