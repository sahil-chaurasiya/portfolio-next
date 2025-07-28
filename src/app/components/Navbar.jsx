'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/project' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white bg-black px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Sahil's Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-yellow-400 transition ${
                pathname === link.path ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu size={28} className="text-yellow-400" />
        </button>
      </div>

      {/* Center Pop Modal Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Pop Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div className="relative w-[90%] max-w-md px-10 py-12 rounded-2xl text-center shadow-2xl border border-white/10 bg-gradient-to-br from-[#111] via-[#1a1a2e] to-[#0f2027]">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-yellow-400 hover:rotate-90 transition"
                >
                  <X size={28} />
                </button>

                {/* Nav Links with Stagger */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                  className="flex flex-col gap-6 text-2xl mt-4"
                >
                  {links.map((link) => (
                    <motion.div
                      key={link.path}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`hover:text-yellow-400 transition ${
                          pathname === link.path ? 'text-yellow-400 font-semibold' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
