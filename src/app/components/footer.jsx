'use client';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-wide">Sahil Chaurasiya</h2>
          <p className="text-sm text-gray-400 mt-1">
            Full-Stack Developer | Building Web Experiences
          </p>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="text-sm text-gray-400 text-center">
          <p>
            Built with <span className="text-yellow-400 font-semibold">Next.js</span> &{" "}
            <span className="text-yellow-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/sahil-chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Github className="w-6 h-6 hover:text-yellow-400 transition" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin className="w-6 h-6 hover:text-yellow-400 transition" />
          </motion.a>
          <motion.a
            href="mailto:chaurasiyasahil18@gmail.com"
            whileHover={{ scale: 1.2 }}
          >
            <Mail className="w-6 h-6 hover:text-yellow-400 transition" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
