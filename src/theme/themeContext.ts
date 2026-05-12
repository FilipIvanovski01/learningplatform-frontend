import { createContext } from 'react';
import type { Theme, ThemeMode } from './types';

export type ThemeContextValue = {
  theme: Theme;
  mode: ThemeMode;
  isDark: boolean;
  isReady: boolean;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
  toggleTheme: () => Promise<void>;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
