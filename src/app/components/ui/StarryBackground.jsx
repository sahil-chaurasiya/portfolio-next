'use client';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { useCallback } from 'react';

export const StarryBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: '#000000' },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 100 },
          size: { value: 1.5 },
          color: { value: '#ffffff' },
          opacity: { value: 0.8 },
          move: { enable: true, speed: 0.3 },
        },
      }}
    />
  );
};
