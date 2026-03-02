'use client';
// SEO NOTE: Export this metadata from your /contact/page.js (server component):
// export const metadata = {
//   title: 'Contact Sahil Chaurasiya – Full-Stack Developer',
//   description: 'Get in touch with Sahil Chaurasiya, Full-Stack Developer from Bhopal, India. Open to freelance projects, collaborations, and job opportunities in Next.js, Django, and React.',
//   alternates: { canonical: 'https://portfolio-next-eight-rose.vercel.app/contact' },
//   openGraph: {
//     title: 'Contact Sahil Chaurasiya – Full-Stack Developer',
//     description: 'Reach out to Sahil Chaurasiya for freelance work, collaborations, or job opportunities.',
//     url: 'https://portfolio-next-eight-rose.vercel.app/contact',
//   },
// };

import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BackgroundBeams } from '@/app/components/ui/background-beams';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from 'react-icons/fa';

// Lightweight pure-JS confetti — no external dependency needed
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#7c3aed', '#06b6d4', '#3b82f6', '#a78bfa', '#67e8f9', '#fff'];
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * 200,
    r: 4 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 4,
    vy: 2 + Math.random() * 4,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  let frame;
  let elapsed = 0;
  const duration = 2800;

  function draw(ts) {
    if (!elapsed) elapsed = ts;
    const progress = ts - elapsed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // gravity
      p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - progress / duration);
      if (p.shape === 'rect') {
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    if (progress < duration) {
      frame = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(frame);
      canvas.remove();
    }
  }

  frame = requestAnimationFrame(draw);
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // status: '' | 'success' | 'error'
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

    // Client-side validation
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus('validation');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('invalidemail');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        launchConfetti();
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaEnvelope className="w-5 h-5" aria-hidden="true" />,
      label: 'Email',
      url: 'mailto:chaurasiyasahil18@gmail.com',
      color: 'from-rose-500 to-pink-500',
      ariaLabel: 'Send email to Sahil Chaurasiya',
      title: 'Email – chaurasiyasahil18@gmail.com',
    },
    {
      icon: <FaLinkedin className="w-5 h-5" aria-hidden="true" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/',
      color: 'from-blue-600 to-blue-700',
      ariaLabel: 'Sahil Chaurasiya on LinkedIn',
      title: 'LinkedIn – Sahil Chaurasiya',
    },
    {
      icon: <FaGithub className="w-5 h-5" aria-hidden="true" />,
      label: 'GitHub',
      url: 'https://github.com/sahil-chaurasiya',
      color: 'from-gray-800 to-black',
      ariaLabel: 'Sahil Chaurasiya on GitHub',
      title: 'GitHub – sahil-chaurasiya',
    },
    {
      icon: <FaFileDownload className="w-5 h-5" aria-hidden="true" />,
      label: 'Resume',
      url: '/Sahil_Chaurasiya_Resume.pdf',
      color: 'from-violet-600 to-purple-600',
      download: true,
      ariaLabel: "Download Sahil Chaurasiya's Resume PDF",
      title: 'Download Resume – Sahil Chaurasiya',
    },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sahil Chaurasiya',
    url: 'https://portfolio-next-eight-rose.vercel.app/contact',
    description:
      'Contact page for Sahil Chaurasiya, Full-Stack Developer from Bhopal, India. Available for freelance, collaborations, and job opportunities.',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://portfolio-next-eight-rose.vercel.app/#person',
      name: 'Sahil Chaurasiya',
      email: 'chaurasiyasahil18@gmail.com',
      telephone: '+91-8176078586',
      jobTitle: 'Full-Stack Developer',
      url: 'https://portfolio-next-eight-rose.vercel.app',
      sameAs: [
        'https://www.linkedin.com/in/sahil-chaurasiya-4a2505248/',
        'https://github.com/sahil-chaurasiya',
      ],
    },
  };

  return (
    <main
      className="relative min-h-screen w-full bg-neutral-950 text-white px-4 pt-40 pb-40 overflow-visible"
      aria-label="Contact Sahil Chaurasiya – Full-Stack Developer"
    >
      {/* ContactPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* Background */}
      <BackgroundBeams aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-10 pb-12"
        style={{ overflow: 'visible' }}
      >
        {/* Header */}
        <header className="mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            style={{
              fontFamily: 'var(--font-pacifico), cursive',
              lineHeight: '1.2',
              paddingBottom: '0.15em',
              marginBottom: '0.5rem',
            }}
          >
            📬 Let&apos;s Connect
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, a freelance opportunity, or just want to chat?
            Reach out to{' '}
            <strong className="text-white">Sahil Chaurasiya</strong> — Full-Stack
            Developer from Bhopal, India.
          </p>
        </header>

        {/* Social / Contact Links */}
        <nav
          aria-label="Sahil Chaurasiya contact and social links"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.url}
              target={social.download ? undefined : '_blank'}
              rel={social.download ? undefined : 'noopener noreferrer'}
              download={social.download}
              aria-label={social.ariaLabel}
              title={social.title}
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
        </nav>

        {/* Contact Form */}
        <section
          aria-labelledby="contact-form-heading"
          className="max-w-xl mx-auto text-left space-y-6"
        >
          <div className="mb-6">
            <h2
              id="contact-form-heading"
              className="text-2xl font-bold text-white mb-2"
            >
              Send me a message
            </h2>
            <p className="text-gray-400">
              I&apos;ll get back to you as soon as possible — typically within 24
              hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
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
                aria-label="Send message to Sahil Chaurasiya"
                className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                      aria-hidden="true"
                    ></div>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  '✅ Message Sent!'
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {/* Only show status box for success/error — never while sending */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className="text-center py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                >
                  🎉 Message sent successfully! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="assertive"
                  className="text-center py-3 px-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400"
                >
                  ❌ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
              {status === 'validation' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="assertive"
                  className="text-center py-3 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400"
                >
                  ⚠️ Please fill in all fields before sending.
                </motion.div>
              )}
              {status === 'invalidemail' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="assertive"
                  className="text-center py-3 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400"
                >
                  ⚠️ Please enter a valid email address.
                </motion.div>
              )}
            </div>
          </form>
        </section>

        {/* Footer Note */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            Typically respond within 24 hours &bull; Open to freelance
            opportunities &bull; Let&apos;s build something amazing together! 🚀
          </p>
          <address className="not-italic mt-3 text-xs text-gray-600">
            <a
              href="mailto:chaurasiyasahil18@gmail.com"
              className="hover:text-gray-400 transition-colors"
              aria-label="Email Sahil Chaurasiya"
            >
              chaurasiyasahil18@gmail.com
            </a>
            {' · '}
            <a
              href="tel:+918176078586"
              className="hover:text-gray-400 transition-colors"
              aria-label="Call Sahil Chaurasiya"
            >
              +91-8176078586
            </a>
            {' · '}Bhopal, Madhya Pradesh, India
          </address>
        </motion.footer>
      </motion.div>
    </main>
  );
}