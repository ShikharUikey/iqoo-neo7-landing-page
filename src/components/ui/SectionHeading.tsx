'use client';

import React, { useRef, useState, useEffect } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div ref={ref} className={`${alignClasses} ${className}`}>
      {/* Title */}
      <h2
        className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[30px]'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-lg md:text-xl text-white/60 max-w-2xl mt-6 leading-relaxed transition-all duration-700 ease-out delay-200 ${
            align === 'center' ? 'mx-auto' : ''
          } ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
