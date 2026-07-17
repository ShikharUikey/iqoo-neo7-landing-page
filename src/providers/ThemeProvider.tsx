'use client';

import React, { createContext, useContext, useState } from 'react';

type ColorTheme = 'orange' | 'blue' | 'black' | 'titanium' | 'emerald' | 'purple';

interface ThemeContextType {
  color: ColorTheme;
  setColor: (color: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<ColorTheme>('black');
  
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
