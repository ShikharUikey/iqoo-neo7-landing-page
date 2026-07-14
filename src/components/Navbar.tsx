'use client';

import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  'Overview',
  'Performance',
  'Display',
  'Camera',
  'Cooling',
  'Battery',
  'Specs',
] as const;

const SECTION_IDS: Record<string, string> = {
  Overview: 'hero',
  Performance: 'performance',
  Display: 'display',
  Camera: 'camera',
  Cooling: 'cooling',
  Battery: 'battery',
  Specs: 'specs',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100);

    // Determine active section
    const sections = NAV_ITEMS.map((item) => {
      const id = SECTION_IDS[item];
      const el = document.getElementById(id);
      if (!el) return { item, top: Infinity };
      const rect = el.getBoundingClientRect();
      return { item, top: Math.abs(rect.top - 80) };
    });

    const closest = sections.reduce((prev, curr) =>
      curr.top < prev.top ? curr : prev
    );
    setActiveSection(closest.item);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (item: string) => {
    const id = SECTION_IDS[item];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto h-16 px-6 lg:px-12 flex items-center justify-between">
          {/* Left: Logo */}
          <div
            className="text-white text-lg tracking-tight cursor-pointer select-none"
            onClick={() => scrollToSection('Overview')}
          >
            <span className="font-bold">iQOO</span>
            <span className="font-light"> Neo 7</span>
          </div>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-[13px] transition-colors cursor-pointer bg-transparent border-none outline-none ${
                  activeSection === item
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              className="bg-gradient-to-r from-[#FF6A00] to-[#FFD000] text-white text-sm font-medium px-6 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer border-none outline-none"
              onClick={() => scrollToSection('Specs')}
            >
              Explore
            </button>

            {/* Hamburger (Mobile) */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] bg-transparent border-none cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-2xl font-light tracking-wide transition-all duration-500 bg-transparent border-none cursor-pointer ${
                activeSection === item ? 'text-white' : 'text-white/50'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
