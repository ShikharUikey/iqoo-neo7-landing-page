'use client';

import React from 'react';

interface SpecCardProps {
  label: string;
  value: string;
  unit?: string;
  className?: string;
}

export default function SpecCard({
  label,
  value,
  unit,
  className = '',
}: SpecCardProps) {
  return (
    <div
      className={`group p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1] hover:border-l-2 hover:border-l-[#FF6A00] ${className}`}
    >
      {/* Value + Unit */}
      <div>
        <span className="text-2xl md:text-3xl font-bold text-white">
          {value}
        </span>
        {unit && (
          <span className="text-lg text-white/40 ml-1">{unit}</span>
        )}
      </div>

      {/* Label */}
      <span className="text-sm text-white/50 mt-2 uppercase tracking-widest block">
        {label}
      </span>
    </div>
  );
}
