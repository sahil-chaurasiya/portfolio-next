'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spotlight } from "./components/ui/Spotlight";
import { CanvasRevealEffect } from "./components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "./lib/utils";

export default function Home() {
  return (
    <>
      <main className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
        {/* Grid background */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        {/* Dark corners overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.7)_100%)]" />

        {/* Spotlight */}
        <Spotlight className="top-0 left-0 md:top-10 md:left-60 z-20" fill="white" />

        {/* Main content */}
        <div className="relative z-30 mx-auto w-full max-w-7xl p-4">
          <h1 className="text-center text-4xl font-bold text-white md:text-7xl">
            👋 Hi, I'm Sahil
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            Welcome to my personal portfolio! I'm a full stack developer who loves building clean and functional web apps.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/project">
              <button className="px-6 py-2 rounded-md bg-white text-black font-semibold cursor-pointer">
                View My Work
              </button>
            </Link>
            <Link href="/resume">
              <button className="px-6 py-2 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition cursor-pointer">
                View Resume
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* 🎨 CanvasRevealEffect Section */}
      <div className="py-20 flex flex-col md:flex-row flex-wrap items-center justify-center bg-white dark:bg-black w-full gap-6 md:gap-4 mx-auto px-6 sm:px-8">
        <Card title="Eat">
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        <Card title="Sleep">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Code">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Repeat">
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-purple-700"
            colors={[[192, 132, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, children }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setHovered(false);
  };

  const handleClick = () => {
    if (isMobile) setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-[22rem] sm:h-[26rem] md:h-[30rem] max-w-xs sm:max-w-sm transition-all"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-5 w-5 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Canvas Reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon / Text Transition */}
      <div className="relative z-20">
        <div
          className={`text-center transition duration-200 w-full mx-auto flex items-center justify-center ${
            hovered ? "-translate-y-4 opacity-0" : "opacity-100 translate-y-0"
          }`}
        >
          <AceternityIcon />
        </div>
        <h2
          className={`text-xl mt-4 font-bold relative z-10 transition duration-200 ${
            hovered
              ? "opacity-100 -translate-y-2 text-white"
              : "opacity-0 text-black"
          } dark:text-white`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
