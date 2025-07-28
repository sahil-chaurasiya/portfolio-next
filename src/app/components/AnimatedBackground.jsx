'use client';
import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="w-full h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.2)_1px,_transparent_0)] [background-size:40px_40px] animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-30 blur-3xl top-10 left-10 animate-ping" />
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-2xl bottom-20 right-20 animate-pulse" />
      </div>
    </div>
  );
}
