'use client';

import React from 'react';
import MaskedText from './MaskedText';

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
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`${alignClasses} ${className}`}>
      <MaskedText 
        text={title}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
      />

      {/* Subtitle */}
      {subtitle && (
        <MaskedText 
          text={subtitle}
          delay={0.2}
          className={`text-lg md:text-xl text-white/60 max-w-2xl mt-6 leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      )}
    </div>
  );
}
