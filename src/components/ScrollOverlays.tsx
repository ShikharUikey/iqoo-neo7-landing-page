'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollStory } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollOverlays() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollContainer = document.getElementById('scroll-experience');
    if (!scrollContainer) return;

    const triggers: ScrollTrigger[] = [];

    scrollStory.forEach((phase, index) => {
      const overlay = overlayRefs.current[index];
      if (!overlay) return;

      const { startPercent, endPercent } = phase;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-experience',
          start: `${startPercent * 100}% top`,
          end: `${endPercent * 100}% top`,
          scrub: true,
        },
      });

      // 0-30%: fade in
      tl.fromTo(
        overlay,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'none' }
      );

      // 30-70%: hold visible
      tl.to(overlay, { opacity: 1, y: 0, duration: 0.4, ease: 'none' });

      // 70-100%: fade out
      tl.to(overlay, {
        opacity: 0,
        y: -40,
        duration: 0.3,
        ease: 'none',
      });

      if (tl.scrollTrigger) {
        triggers.push(tl.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 left-0 z-10 flex h-screen w-full items-center justify-center pointer-events-none"
    >
      {scrollStory.map((phase, index) => (
        <div
          key={phase.id}
          ref={(el) => {
            overlayRefs.current[index] = el;
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ opacity: 0 }}
        >
          <div className="backdrop-blur-md bg-black/30 border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_24px_50px_rgba(0,0,0,0.5)] max-w-4xl mx-4 flex flex-col items-center justify-center">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl">
              {phase.headline}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {phase.subtext}
            </p>

            {/* CTA button on the last overlay */}
            {index === scrollStory.length - 1 && (
              <button
                className="mt-8 pointer-events-auto rounded-full px-8 py-3.5 text-xs font-semibold tracking-wide text-white uppercase transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #FF6A00, #FFD000)',
                }}
              >
                Experience iQOO Neo 7
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
