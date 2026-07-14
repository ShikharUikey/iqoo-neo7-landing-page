'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { number: '4', unit: 'nm', label: 'Process' },
  { number: '8', unit: '', label: 'CPU Cores' },
  { number: '3.1', unit: 'GHz', label: 'Peak Clock' },
  { number: '163', unit: 'K', label: 'AnTuTu Score' },
];

const FEATURES = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'The Dimensity 8200 delivers flagship-level performance with blazing fast app launches and seamless multitasking capabilities.',
  },
  {
    icon: '🎮',
    title: 'Gaming Beast',
    desc: 'Dedicated gaming mode with frame rate optimization, touch sampling boost, and intelligent resource allocation for peak gaming.',
  },
  {
    icon: '🔋',
    title: 'Power Efficient',
    desc: '4nm process technology ensures maximum performance per watt, extending battery life without compromising speed.',
  },
];

export default function PerformanceSection() {
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
      id="performance"
      ref={sectionRef}
      className="py-32 md:py-48 px-6 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Flagship Performance
        </h2>
        <p className="text-lg text-white/50 mt-4 max-w-2xl leading-relaxed">
          Powered by the 4nm MediaTek Dimensity 8200 processor
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 text-center transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.1] ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
          >
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFD000] bg-clip-text text-transparent">
                {stat.number}
              </span>
              {stat.unit && (
                <span className="text-xl text-white/40">{stat.unit}</span>
              )}
            </div>
            <p className="text-sm text-white/50 mt-3 uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {FEATURES.map((feat, i) => (
          <div
            key={feat.title}
            className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 transition-all duration-700 hover:bg-white/[0.06] hover:-translate-y-1 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? `${600 + i * 100}ms` : '0ms' }}
          >
            <span className="text-3xl">{feat.icon}</span>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">
              {feat.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
