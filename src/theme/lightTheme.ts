import { sharedThemeTokens, type Theme } from './types';

export const lightTheme = {
  mode: 'light',
  colors: {
    background: {
      primary: '#FAFAFA',
      secondary: '#FFFFFF',
      tertiary: '#F4F4F5',
    },
    surface: {
      default: '#FFFFFF',
      elevated: '#FFFFFF',
      sunken: '#F4F4F5',
    },
    text: {
      primary: '#18181B',
      secondary: '#52525B',
      tertiary: '#71717A',
      inverse: '#FAFAFA',
      disabled: '#A1A1AA',
    },
    border: {
      default: '#E4E4E7',
      subtle: '#F4F4F5',
      strong: '#D4D4D8',
    },
    brand: {
      primary: '#4F46E5',
      primaryMuted: '#EEF2FF',
      onPrimary: '#FFFFFF',
      secondary: '#6366F1',
      accent: '#7C3AED',
    },
    status: {
      success: '#16A34A',
      warning: '#D97706',
      error: '#DC2626',
      info: '#0284C7',
      on: '#FFFFFF',
    },
    interactive: {
      link: '#4F46E5',
      focus: '#6366F1',
      pressed: '#4338CA',
      disabled: '#A1A1AA',
    },
    overlay: 'rgba(24, 24, 27, 0.45)',
  },
  shadows: {
    sm: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 6,
    },
  },
  ...sharedThemeTokens,
} satisfies Theme;
