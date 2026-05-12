import { useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import {
  getButtonContainerStyle,
  getButtonIndicatorColor,
  getButtonLabelStyle,
} from './Button.styles';
import type { ButtonProps, UseButtonResult } from './Button.types';

export const useButton = ({
  variant,
  size,
  onPress,
  disabled = false,
  loading = false,
  style,
}: ButtonProps): UseButtonResult => {
  const { theme } = useTheme();
  const [pressed, setPressed] = useState(false);
  const isDisabled = disabled || loading;

  const styleProps = useMemo(
    () => ({
      variant,
      size,
      disabled,
      loading,
    }),
    [disabled, loading, size, variant],
  );

  const styleState = useMemo(() => ({ pressed }), [pressed]);

  const containerStyle = useMemo(
    () => StyleSheet.flatten([getButtonContainerStyle(theme, styleProps, styleState), style]),
    [style, styleProps, styleState, theme],
  );

  const labelStyle = useMemo(
    () => getButtonLabelStyle(theme, styleProps, styleState),
    [styleProps, styleState, theme],
  );

  const indicatorColor = useMemo(
    () => getButtonIndicatorColor(theme, styleProps, styleState),
    [styleProps, styleState, theme],
  );

  const handlePress = useCallback(() => {
    if (!isDisabled) {
      onPress();
    }
  }, [isDisabled, onPress]);

  const handlePressIn = useCallback(() => {
    if (!isDisabled) {
      setPressed(true);
    }
  }, [isDisabled]);

  const handlePressOut = useCallback(() => {
    setPressed(false);
  }, []);

  return {
    containerStyle,
    labelStyle,
    indicatorColor,
    isDisabled,
    handlePress,
    handlePressIn,
    handlePressOut,
    accessibilityState: {
      disabled: isDisabled,
      busy: loading,
    },
  };
};
