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
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const socialLinks = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      url: "mailto:chaurasiyasahil18@gmail.com",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/sahil-chaurasiya",
      color: "from-gray-800 to-black",
    },
    // {
    //   icon: <FaInstagram className="w-5 h-5" />,
    //   label: "Instagram",
    //   url: "https://instagram.com/sahil_chaurasiya__",
    //   color: "from-pink-600 to-rose-600",
    // },
    {
      icon: <FaFileDownload className="w-5 h-5" />,
      label: "Resume",
      url: "/Sahil_Chaurasiya_Resume.pdf",
      color: "from-violet-600 to-purple-600",
      download: true,
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-neutral-950 text-white px-4 pt-40 pb-40 overflow-visible">
      {/* Keep your original BackgroundBeams */}
      <BackgroundBeams />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-10 pb-12"
        style={{ overflow: 'visible' }}
      >
        {/* Header - Matches your other pages */}
        <div className="mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            style={{ 
              fontFamily: 'var(--font-pacifico), cursive',
              lineHeight: '1.2',
              paddingBottom: '0.15em',
              marginBottom: '0.5rem'
            }}
          >
            📬 Let&apos;s Connect
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Social Links - Improved styling */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.url}
              target={social.download ? undefined : "_blank"}
              rel={social.download ? undefined : "noopener noreferrer"}
              download={social.download}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${social.color} rounded-full text-white font-medium hover:shadow-xl transition-all shadow-lg min-w-[120px] justify-center`}
            >
              {social.icon}
              <span>{social.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Contact Form - COMPLETELY TRANSPARENT */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left space-y-6"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send me a message
            </h3>
            <p className="text-gray-400">
              I&apos;ll get back to you as soon as possible
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hello! I'd like to discuss a project..."
              rows={5}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center py-3 px-4 rounded-xl ${
                status.includes('✅') 
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : status.includes('❌') || status.includes('⚠️')
                  ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                  : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
              }`}
            >
              {status}
            </motion.div>
          )}
        </form>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            Typically respond within 24 hours • Open to freelance opportunities • Let&apos;s build something amazing together! 🚀
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}