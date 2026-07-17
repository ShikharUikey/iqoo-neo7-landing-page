'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollOverlays from './ScrollOverlays';
import Scene from './canvas/Scene';
import { useTheme } from '@/providers/ThemeProvider';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0);
  const { color } = useTheme();
  
  // We can add a simple mount state to ensure it only renders on client
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    const container = containerRef.current;
    if (!container) return;

    // ScrollTrigger for scrubbing the 3D model progress
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0, // Instantly update ref, dampening is handled inside PhoneModel's useFrame lerp
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, [mounted]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: '500vh' }}
      id="scroll-experience"
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-[#050505]">
        {mounted && <Scene scrollProgressRef={scrollProgressRef} phoneColor={color} />}
      </div>
      <ScrollOverlays />
    </div>
  );
}
