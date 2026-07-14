'use client';

import { useEffect, useRef, useState } from 'react';

const TIMELINE = [
  { time: '8 min', pct: '50%' },
  { time: '18 min', pct: '80%' },
  { time: '25 min', pct: '100%' },
];

export default function BatterySection() {
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
      id="battery"
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
          All-Day Power
        </h2>
        <p className="text-lg text-white/50 mt-4 max-w-2xl leading-relaxed">
          Massive 5000mAh battery with 120W FlashCharge
        </p>
      </div>

      {/* Two Feature Blocks */}
      <div className="grid md:grid-cols-2 gap-12 mt-20">
        {/* Battery Block */}
        <div
          className={`bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.1] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <div className="flex items-baseline gap-2">
            <span className="text-7xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFD000] bg-clip-text text-transparent">
              5000
            </span>
            <span className="text-2xl text-white/40">mAh</span>
          </div>
          <h3 className="text-lg text-white mt-4 font-semibold">
            Massive Battery
          </h3>
          <p className="text-sm text-white/50 mt-3 leading-relaxed">
            Power through your entire day and beyond. The 5000mAh battery keeps
            you going with heavy gaming, streaming, and multitasking without
            reaching for a charger.
          </p>
        </div>

        {/* Charging Block */}
        <div
          className={`bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.1] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          <div className="flex items-baseline gap-2">
            <span className="text-7xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFD000] bg-clip-text text-transparent">
              120
            </span>
            <span className="text-2xl text-white/40">W</span>
          </div>
          <h3 className="text-lg text-white mt-4 font-semibold">FlashCharge</h3>
          <p className="text-sm text-white/50 mt-3 leading-relaxed">
            0 to 50% in just 8 minutes. The 120W FlashCharge technology
            delivers blazing-fast charging speeds so you spend less time
            plugged in and more time doing what you love.
          </p>
        </div>
      </div>

      {/* Charging Timeline */}
      <div
        className={`mt-16 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Gradient Line */}
        <div className="relative">
          <div className="h-[2px] bg-gradient-to-r from-[#FF6A00] to-[#FFD000] rounded-full" />

          {/* Markers */}
          <div className="flex justify-between mt-4">
            {TIMELINE.map((marker) => (
              <div key={marker.time} className="text-center">
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFD000] mx-auto -mt-[22px] mb-3 ring-4 ring-[#050505]" />
                <p className="text-sm text-white/60">
                  {marker.time} → {marker.pct}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
