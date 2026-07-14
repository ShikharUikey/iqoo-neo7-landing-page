'use client';

import { useEffect, useRef, useState } from 'react';

const SPECS = [
  { label: 'Processor', value: 'MediaTek Dimensity 8200' },
  { label: 'Display', value: '6.78" 120Hz AMOLED' },
  { label: 'RAM', value: '8GB / 12GB LPDDR5' },
  { label: 'Storage', value: '128GB / 256GB UFS 3.1' },
  { label: 'Main Camera', value: '64MP OIS' },
  { label: 'Battery', value: '5000 mAh' },
  { label: 'Charging', value: '120W FlashCharge' },
  { label: 'OS', value: 'Funtouch OS 13' },
  { label: 'Connectivity', value: '5G / Wi-Fi 6' },
  { label: 'Audio', value: 'Dual Stereo Speakers' },
  { label: 'Biometrics', value: 'In-Display Fingerprint' },
  { label: 'Weight', value: '193g' },
];

export default function SpecsSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="specs"
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
          Technical Specifications
        </h2>
        <p className="text-lg text-white/50 mt-4 max-w-2xl leading-relaxed">
          Every detail, every number
        </p>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {SPECS.map((spec, i) => (
          <div
            key={spec.label}
            className={`bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? `${100 + i * 60}ms` : '0ms',
            }}
          >
            <p className="text-xs text-white/40 uppercase tracking-widest">
              {spec.label}
            </p>
            <p className="text-base text-white font-medium mt-2">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
