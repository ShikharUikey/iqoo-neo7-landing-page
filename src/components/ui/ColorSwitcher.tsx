'use client';

import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { motion } from 'framer-motion';

const colors = [
  { id: 'black', hex: '#111111', name: 'Interstellar Black' },
  { id: 'orange', hex: '#FF6A00', name: 'Maverick Orange' },
  { id: 'blue', hex: '#2E7DFF', name: 'Fearless Blue' }
] as const;

export default function ColorSwitcher() {
  const { color, setColor } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3"
    >
      <span className="text-xs font-medium text-white/50 mr-2 uppercase tracking-widest">Finish</span>
      {colors.map((c) => (
        <button
          key={c.id}
          onClick={() => setColor(c.id)}
          className="relative group flex items-center justify-center w-8 h-8 rounded-full transition-transform hover:scale-110"
          aria-label={c.name}
        >
          <span 
            className="w-6 h-6 rounded-full shadow-inner"
            style={{ backgroundColor: c.hex }}
          />
          {color === c.id && (
            <motion.div
              layoutId="activeColorRing"
              className="absolute inset-0 border border-white/40 rounded-full"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          )}
          
          {/* Tooltip */}
          <span className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap backdrop-blur-md border border-white/10 pointer-events-none">
            {c.name}
          </span>
        </button>
      ))}
    </motion.div>
  );
}
