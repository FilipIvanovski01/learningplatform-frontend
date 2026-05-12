import { sharedThemeTokens, type Theme } from './types';

export const darkTheme = {
  mode: 'dark',
  colors: {
    background: {
      primary: '#09090B',
      secondary: '#18181B',
      tertiary: '#27272A',
    },
    surface: {
      default: '#18181B',
      elevated: '#27272A',
      sunken: '#09090B',
    },
    text: {
      primary: '#FAFAFA',
      secondary: '#A1A1AA',
      tertiary: '#71717A',
      inverse: '#18181B',
      disabled: '#52525B',
    },
    border: {
      default: '#3F3F46',
      subtle: '#27272A',
      strong: '#52525B',
    },
    brand: {
      primary: '#818CF8',
      primaryMuted: '#312E81',
      onPrimary: '#18181B',
      secondary: '#A5B4FC',
      accent: '#C4B5FD',
    },
    status: {
      success: '#22C55E',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#38BDF8',
      on: '#18181B',
    },
    interactive: {
      link: '#A5B4FC',
      focus: '#818CF8',
      pressed: '#6366F1',
      disabled: '#52525B',
    },
    overlay: 'rgba(9, 9, 11, 0.72)',
  },
  shadows: {
    sm: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.35,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.45,
      shadowRadius: 10,
      elevation: 5,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.55,
      shadowRadius: 18,
      elevation: 8,
    },
  },
  ...sharedThemeTokens,
} satisfies Theme;
