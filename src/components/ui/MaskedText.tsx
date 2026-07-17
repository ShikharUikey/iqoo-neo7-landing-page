'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface MaskedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function MaskedText({ text, className = '', delay = 0 }: MaskedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const animation: Variants = {
    initial: { y: '100%' },
    enter: { 
      y: '0%', 
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay } 
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={animation}
        initial="initial"
        animate={isInView ? 'enter' : 'initial'}
      >
        {text}
      </motion.div>
    </div>
  );
}
