'use client';

import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-8 backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-500 ease-out hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5 ${className}`}
    >
      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFD000] flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
