'use client';

import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<string, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
};

export default function GradientButton({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
  size = 'md',
}: GradientButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 ease-out cursor-pointer select-none';

  const variantClasses: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-[#FF6A00] to-[#FFD000] text-white hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] hover:brightness-110',
    secondary:
      'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)]',
    outline:
      'bg-transparent text-white border border-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)]',
  };

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    'hover:scale-[1.03] active:scale-[0.98]',
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
