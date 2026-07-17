'use client';

import { useEffect, useState } from 'react';
import ParticleField from './ui/ParticleField';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Particle Field Background */}
      <ParticleField />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(255,106,0,0.05),transparent_70%)] pointer-events-none" />

      {/* Center Content */}
      <div className="text-center z-10 relative px-6">
        {/* Tagline */}
        <p
          className={`text-sm tracking-[0.3em] uppercase text-white/40 mb-6 transition-all duration-1000 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          iQOO NEO 7
        </p>

        {/* Headline */}
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white transition-all duration-1000 delay-200 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Power Beyond
          <br />
          Limits.
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-white/50 max-w-xl mx-auto mt-8 leading-relaxed transition-all duration-1000 delay-500 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          Flagship performance engineered for gamers, creators, and everyday
          power users.
        </p>

        {/* CTA Button */}
        <div
          className={`mt-10 transition-all duration-1000 delay-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className="bg-gradient-to-r from-[#FF6A00] to-[#FFD000] text-white px-10 py-4 rounded-full text-base font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all inline-block cursor-pointer select-none"
            onClick={() => {
              const el = document.getElementById('performance');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Performance ↓
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-5 border-r-2 border-b-2 border-white/30 rotate-45" />
      </div>
    </section>
  );
}
