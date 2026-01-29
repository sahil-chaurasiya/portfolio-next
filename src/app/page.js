'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "./components/ui/Spotlight";
import { cn } from "./lib/utils";
// import { Pacifico } from "next/font/google";

// // ✅ Load Pacifico for name
// const pacifico = Pacifico({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

export default function Home() {
  return (
<main className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:30px_30px] sm:[background-size:40px_40px] select-none z-0",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Enhanced gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15)_0%,_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />

      {/* Dark corners overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.7)_100%)]" />

      {/* Animated gradient orbs */}
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
        className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl z-5"
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
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-5"
      />

      {/* Spotlight */}
      <Spotlight className="top-0 left-0 md:top-10 md:left-60 z-20" fill="white" />

      {/* Main content */}
      <div className="relative z-30 mx-auto w-full max-w-5xl text-center">
        {/* Heading with animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          
          👋 Hi, I&apos;m{" "}
          <span 
            className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0"
            style={{
              fontFamily: 'var(--font-pacifico), cursive',
              lineHeight: '1.2',
              display: 'inline-block',
              paddingBottom: '0.3em',
              marginBottom: '-0.2em'
            }}
          >
            Sahil Chaurasiya
          </span>
        </motion.h1>

        {/* Intro with animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg font-normal text-neutral-300 px-2"
        >
          I&apos;m a <strong className="text-white">Full-Stack Web Developer</strong> passionate about
          building clean, functional, and scalable web applications. This portfolio
          highlights my skills in <strong className="text-white">frontend</strong> and{" "}
          <strong className="text-white">backend development</strong> using technologies like{" "}
          <strong className="text-cyan-400">Next.js, React, Node.js, Express, Django, PostgreSQL, MySQL and MongoDB</strong>.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl sm:max-w-2xl text-xs sm:text-sm md:text-base text-neutral-400 px-2"
        >
          Explore my projects, resume, and developer journey — crafted with a focus
          on performance, SEO best practices, and modern UI/UX design.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-4 sm:gap-6 mt-8 flex-wrap"
        >
          <div className="px-4 py-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-full backdrop-blur-sm">
            <div className="text-lg sm:text-xl font-bold text-violet-400">5+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <div className="text-lg sm:text-xl font-bold text-cyan-400">18+</div>
            <div className="text-xs text-gray-400">Technologies</div>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full backdrop-blur-sm">
            <div className="text-lg sm:text-xl font-bold text-green-400">7.12</div>
            <div className="text-xs text-gray-400">CGPA</div>
          </div>
        </motion.div>

        {/* Buttons with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Link href="/project">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold cursor-pointer text-sm sm:text-base min-w-[160px] shadow-lg hover:from-violet-500 hover:to-cyan-500 transition-all"
            >
              View My Work
            </motion.button>
          </Link>
          <Link href="/resume">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/60 transition cursor-pointer text-sm sm:text-base min-w-[160px] backdrop-blur-sm"
            >
              View Resume
            </motion.button>
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-10 flex justify-center gap-5"
        >
          <motion.a
            href="https://github.com/sahil-chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <motion.a
            href="mailto:chaurasiyasahil18@gmail.com"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
            aria-label="Email Contact"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
          <motion.a
            href="tel:+918176078586"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
            aria-label="Phone Contact"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}