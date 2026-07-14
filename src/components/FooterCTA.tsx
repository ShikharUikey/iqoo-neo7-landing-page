'use client';

import { useEffect, useState } from 'react';

const FOOTER_LINKS = ['Privacy', 'Terms', 'Support'];

export default function FooterCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById('footer-cta');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="footer-cta"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.05),transparent_70%)] pointer-events-none" />

      {/* Center Content */}
      <div className="text-center z-10 relative px-6">
        <p
          className={`text-2xl text-white/40 tracking-widest uppercase mb-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          iQOO Neo 7
        </p>

        <h2
          className={`text-6xl md:text-8xl font-bold text-white tracking-tighter transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Built To Perform.
        </h2>

        <div
          className={`mt-12 transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="bg-gradient-to-r from-[#FF6A00] to-[#FFD000] text-white px-10 py-4 rounded-full text-base font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all inline-flex items-center gap-2 cursor-pointer select-none">
            Experience iQOO Neo 7
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        <p
          className={`text-sm text-white/40 mt-6 transition-all duration-1000 delay-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Starting at ₹29,999
        </p>
      </div>

      {/* Footer Bar */}
      <footer className="absolute bottom-0 w-full py-8 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 max-w-7xl mx-auto gap-4">
          <p className="text-xs text-white/30">
            © 2024 iQOO. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
