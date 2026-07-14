'use client';

import { useEffect, useRef, useState } from 'react';

const COOLING_STATS = [
  { number: '4096', label: 'mm² Coverage' },
  { number: '-12°', label: 'Temperature Drop' },
  { number: '∞', label: 'Sustained Performance' },
];

export default function CoolingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cooling"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Cool Under Pressure
        </h2>
        <p className="text-lg text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
          Advanced vapor chamber cooling for sustained peak performance
        </p>
      </div>

      {/* Central Visual */}
      <div
        className={`relative w-full max-w-2xl mx-auto mt-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="w-full aspect-video rounded-3xl bg-gradient-to-br from-[#FF6A00]/10 to-[#2E7DFF]/10 border border-white/[0.08] relative overflow-hidden">
          {/* VC COOLING Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold text-white/10 select-none tracking-widest">
              VC COOLING
            </span>
          </div>

          {/* Animated Pulse Glow */}
          <div className="absolute inset-0 rounded-3xl animate-cooling-pulse pointer-events-none" />

          {/* Animated gradient sweep */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,106,0,0.15), rgba(46,125,255,0.15), transparent)',
              animation: 'coolingSweep 4s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
        {COOLING_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? `${600 + i * 100}ms` : '0ms',
            }}
          >
            <p className="text-3xl font-bold text-white">{stat.number}</p>
            <p className="text-sm text-white/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Inline styles for custom animations */}
      <style jsx>{`
        @keyframes coolingSweep {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        .animate-cooling-pulse {
          animation: coolingPulse 3s ease-in-out infinite;
        }
        @keyframes coolingPulse {
          0%,
          100% {
            box-shadow: inset 0 0 30px rgba(255, 106, 0, 0.05),
              inset 0 0 60px rgba(46, 125, 255, 0.03);
          }
          50% {
            box-shadow: inset 0 0 50px rgba(255, 106, 0, 0.1),
              inset 0 0 80px rgba(46, 125, 255, 0.08);
          }
        }
      `}</style>
    </section>
  );
}
