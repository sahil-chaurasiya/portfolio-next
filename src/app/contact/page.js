'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BackgroundBeams } from '@/app/components/ui/background-beams';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileDownload,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    const fallback = setTimeout(() => {
      controls.start({ opacity: 1, y: 0 });
    }, 1000);
    controls.start({ opacity: 1, y: 0 });
    return () => clearTimeout(fallback);
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (error) {
      setStatus('⚠️ Error sending message.');
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-neutral-950 text-white px-4 pt-40 pb-40 overflow-visible">
      <BackgroundBeams />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl w-full mx-auto text-center space-y-10 pb-12"
        style={{ overflow: 'visible' }} // Ensures glyphs like 'g' render fully
      >
        <h1
          className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
          style={{
            fontFamily: "'Pacifico', cursive",
            overflow: 'visible', // Force visible overflow
            paddingBottom: '0.5rem', // Adds spacing for descenders
          }}
        >
          📡 Ping Me
        </h1>

        <p className="text-lg text-neutral-400">
          Feel free to reach out via email or connect with me on social platforms.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sahil@example.com"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition cursor-pointer"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/sahil-chaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-black transition cursor-pointer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://instagram.com/sahil_chaurasiya__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition cursor-pointer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="/SahilChaurasiya_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer"
          >
            <FaFileDownload /> Resume
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-transparent text-white border border-white/20 p-6 rounded-xl shadow-xl max-w-xl mx-auto text-left space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/60 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/60 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your message..."
              rows={4}
              required
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/60 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Send Message
          </button>
          {status && (
            <p className="text-sm text-center text-white mt-2">{status}</p>
          )}
        </form>
      </motion.div>
    </main>
  );
}
