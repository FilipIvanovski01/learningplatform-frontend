import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export type ButtonStyleProps = Pick<
  ButtonProps,
  'variant' | 'size' | 'disabled' | 'loading'
>;

export type ButtonStyleState = {
  pressed: boolean;
};

export type UseButtonResult = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  indicatorColor: string;
  isDisabled: boolean;
  handlePress: () => void;
  handlePressIn: () => void;
  handlePressOut: () => void;
  accessibilityState: {
    disabled: boolean;
    busy: boolean;
  };
};
