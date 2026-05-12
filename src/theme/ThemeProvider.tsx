import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { ThemeContext } from './themeContext';
import type { Theme, ThemeMode } from './types';

type ThemeProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = 'theme-mode';

const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark';

const getSystemThemeMode = (colorScheme: ReturnType<typeof useColorScheme>): ThemeMode =>
  colorScheme === 'dark' ? 'dark' : 'light';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(() => getSystemThemeMode(systemColorScheme));
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const hydrateThemeMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem(STORAGE_KEY);

        if (isMounted && isThemeMode(savedMode)) {
          setMode(savedMode);
        }
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    };

    void hydrateThemeMode();

    return () => {
      isMounted = false;
    };
  }, []);

  const setThemeMode = useCallback(async (newMode: ThemeMode) => {
    setMode(newMode);
    await AsyncStorage.setItem(STORAGE_KEY, newMode);
  }, []);

  const toggleTheme = useCallback(async () => {
    setMode((currentMode) => {
      const nextMode: ThemeMode = currentMode === 'dark' ? 'light' : 'dark';
      void AsyncStorage.setItem(STORAGE_KEY, nextMode);
      return nextMode;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme: themes[mode],
      mode,
      isDark: mode === 'dark',
      isReady,
      setThemeMode,
      toggleTheme,
    }),
    [isReady, mode, setThemeMode, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
