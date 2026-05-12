import type { ViewStyle } from 'react-native';

export type ThemeMode = 'light' | 'dark';

export interface ColorTokens {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  surface: {
    default: string;
    elevated: string;
    sunken: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };
  border: {
    default: string;
    subtle: string;
    strong: string;
  };
  brand: {
    primary: string;
    primaryMuted: string;
    onPrimary: string;
    secondary: string;
    accent: string;
  };
  status: {
    success: string;
    warning: string;
    error: string;
    info: string;
    on: string;
  };
  interactive: {
    link: string;
    focus: string;
    pressed: string;
    disabled: string;
  };
  overlay: string;
}

export interface TypographyTokens {
  fontFamily: {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  size: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
    '4xl': number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
    '4xl': number;
  };
  letterSpacing: {
    tight: number;
    normal: number;
    wide: number;
  };
}

export interface SpacingTokens {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  8: number;
  10: number;
  12: number;
  16: number;
}

export interface RadiusTokens {
  none: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export type ShadowToken = Pick<
  ViewStyle,
  'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
>;

export interface ShadowTokens {
  sm: ShadowToken;
  md: ShadowToken;
  lg: ShadowToken;
}

export interface Theme {
  mode: ThemeMode;
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
}

export const sharedThemeTokens = {
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
    },
    size: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
    },
    lineHeight: {
      xs: 16,
      sm: 20,
      base: 24,
      lg: 28,
      xl: 28,
      '2xl': 32,
      '3xl': 36,
      '4xl': 40,
    },
    letterSpacing: {
      tight: -0.25,
      normal: 0,
      wide: 0.5,
    },
  },
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
  },
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
} satisfies Pick<Theme, 'typography' | 'spacing' | 'radius'>;
