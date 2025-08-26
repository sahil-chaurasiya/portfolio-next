'use client';
import React from "react";
import Link from "next/link";
import { Spotlight } from "./components/ui/Spotlight";
import { cn } from "./lib/utils";
import { Pacifico } from "next/font/google";

// ✅ Load Pacifico for name
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:30px_30px] sm:[background-size:40px_40px] select-none z-0",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Dark corners overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.7)_100%)]" />

      {/* Spotlight */}
      <Spotlight className="top-0 left-0 md:top-10 md:left-60 z-20" fill="white" />

      {/* Main content */}
      <div className="relative z-30 mx-auto w-full max-w-5xl text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          👋 Hi, I&apos;m{" "}
          <span className={`${pacifico.className} text-white block sm:inline`}>
            Sahil Chaurasiya
          </span>
        </h1>

        {/* Intro */}
        <p className="mx-auto mt-4 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg font-normal text-neutral-300 px-2">
          I&apos;m a <strong>Full-Stack Web Developer</strong> passionate about
          building clean, functional, and scalable web applications. This portfolio
          highlights my skills in <strong>frontend</strong> and{" "}
          <strong>backend development</strong> using technologies like{" "}
          <strong>Next.js, React, Node.js, Express, and MongoDB</strong>.
        </p>

        <p className="mx-auto mt-3 max-w-xl sm:max-w-2xl text-xs sm:text-sm md:text-base text-neutral-400 px-2">
          Explore my projects, resume, and developer journey — crafted with a focus
          on performance, SEO best practices, and modern UI/UX design.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/project">
            <button className="px-6 py-2 rounded-md bg-white text-black font-semibold cursor-pointer text-sm sm:text-base min-w-[150px]">
              View My Work
            </button>
          </Link>
          <Link href="/resume">
            <button className="px-6 py-2 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition cursor-pointer text-sm sm:text-base min-w-[150px]">
              View Resume
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
