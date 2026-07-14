'use client';

import { useEffect, useRef, useState } from 'react';

const SPECS = [
  { label: 'Refresh Rate', value: '120Hz' },
  { label: 'Display Size', value: '6.78" AMOLED' },
  { label: 'Resolution', value: '2400×1080 FHD+' },
  { label: 'HDR Support', value: 'HDR10+' },
  { label: 'Peak Brightness', value: '1300 nits' },
];

const CHIPS = ['HDR10+', 'Always-On Display', 'In-Display Fingerprint'];

export default function DisplaySection() {
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
      id="display"
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
          Every Frame Matters
        </h2>
        <p className="text-lg text-white/50 mt-4 max-w-2xl leading-relaxed">
          Experience visual brilliance on the 120Hz AMOLED display
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">
        {/* Left: Specs List */}
        <div>
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className={`border-b border-white/[0.06] py-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-6'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms',
              }}
            >
              <p className="text-white/50 text-sm uppercase tracking-widest">
                {spec.label}
              </p>
              <p className="text-white text-2xl font-semibold mt-1">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Visual Element */}
        <div
          className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative select-none">
            <span className="text-[12rem] md:text-[14rem] font-bold text-white/[0.03] leading-none block">
              120
            </span>
            <span className="text-4xl text-[#FF6A00] font-bold absolute bottom-4 right-4">
              Hz
            </span>
          </div>
        </div>
      </div>

      {/* Feature Chips */}
      <div
        className={`flex flex-wrap gap-4 mt-16 justify-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {CHIPS.map((chip) => (
          <span
            key={chip}
            className="px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-white/70"
          >
            {chip}
          </span>
        ))}
      </div>
    </section>
  );
}
