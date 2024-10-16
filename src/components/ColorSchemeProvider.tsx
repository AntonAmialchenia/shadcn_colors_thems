import React, { useEffect } from 'react';
import { useColorSchemeStore } from '../store/useColorSchemeStore';
import { colorSchemes } from '../lib/colorSchemes';

export const ColorSchemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { currentSet, currentMode } = useColorSchemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const variables = colorSchemes[currentSet][currentMode];

    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    if (currentMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentSet, currentMode]);

  return <>{children}</>;
};
