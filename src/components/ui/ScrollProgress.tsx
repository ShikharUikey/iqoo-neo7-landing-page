'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | undefined;

    async function initScrollTrigger() {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: '#scroll-experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
          onToggle: (self) => {
            setIsActive(self.isActive);
          },
        });
      });
    }

    initScrollTrigger();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Vertical track */}
      <div className="relative w-[2px] h-32 bg-white/10 rounded-full overflow-hidden">
        {/* Fill bar */}
        <div
          className="absolute bottom-0 w-full bg-gradient-to-t from-[#FF6A00] to-[#FFD000] rounded-full transition-[height] duration-100 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Progress dot */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF6A00] transition-all duration-100 ease-out"
        style={{
          bottom: `${progress * 100}%`,
          boxShadow: '0 0 8px rgba(255, 106, 0, 0.6), 0 0 20px rgba(255, 106, 0, 0.3)',
        }}
      />
    </div>
  );
}
