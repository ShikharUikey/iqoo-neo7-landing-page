'use client';

import { useEffect, useRef, useState } from 'react';

const CAMERA_FEATURES = [
  {
    icon: '📷',
    title: '64MP Main',
    desc: 'OIS-stabilized sensor with large pixel size for exceptional clarity in every shot, day or night.',
  },
  {
    icon: '🌙',
    title: 'Night Mode',
    desc: 'AI-enhanced low-light photography that captures stunning detail and color even in the darkest environments.',
  },
  {
    icon: '🎬',
    title: '4K Video',
    desc: 'Ultra-stable video recording at 4K resolution with electronic image stabilization for cinematic footage.',
  },
  {
    icon: '🤖',
    title: 'AI Scene',
    desc: 'Automatic scene detection and optimization — the camera intelligently adjusts settings for the perfect shot.',
  },
  {
    icon: '📸',
    title: 'Ultra Wide',
    desc: '8MP ultra-wide lens for expansive landscapes, group photos, and creative perspectives.',
  },
  {
    icon: '🔍',
    title: 'Macro',
    desc: '2MP macro lens for stunning close-up details that reveal a world invisible to the naked eye.',
  },
];

export default function CameraSection() {
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
      id="camera"
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
          Capture Every Moment
        </h2>
        <p className="text-lg text-white/50 mt-4 max-w-2xl leading-relaxed">
          64MP OIS main camera with AI-powered scene optimization
        </p>
      </div>

      {/* Camera Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {CAMERA_FEATURES.map((feat, i) => (
          <div
            key={feat.title}
            className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? `${200 + i * 80}ms` : '0ms',
            }}
          >
            <span className="text-3xl block mb-4">{feat.icon}</span>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feat.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
