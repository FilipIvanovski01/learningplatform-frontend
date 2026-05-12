import { useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import {
  getInputContainerStyle,
  getInputErrorTextStyle,
  getInputFieldContainerStyle,
  getInputIconColor,
  getInputPlaceholderColor,
  getInputTextStyle,
} from './Input.styles';
import type { InputProps, UseInputResult } from './Input.types';

export const useInput = ({
  error,
  multiline = false,
  icon,
  style,
}: InputProps): UseInputResult => {
  const { theme } = useTheme();
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);

  const styleProps = useMemo(
    () => ({
      error,
      multiline,
      icon,
    }),
    [error, icon, multiline],
  );

  const styleState = useMemo(() => ({ focused }), [focused]);

  const containerStyle = useMemo(
    () => StyleSheet.flatten([getInputContainerStyle(theme), style]),
    [style, theme],
  );

  const fieldContainerStyle = useMemo(
    () => getInputFieldContainerStyle(theme, styleProps, styleState),
    [styleProps, styleState, theme],
  );

  const inputStyle = useMemo(
    () => getInputTextStyle(theme, multiline),
    [multiline, theme],
  );

  const iconColor = useMemo(
    () => getInputIconColor(theme, styleProps, styleState),
    [styleProps, styleState, theme],
  );

  const errorTextStyle = useMemo(() => getInputErrorTextStyle(theme), [theme]);

  const placeholderTextColor = useMemo(() => getInputPlaceholderColor(theme), [theme]);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return {
    containerStyle,
    fieldContainerStyle,
    inputStyle,
    iconColor,
    errorTextStyle,
    hasError,
    showIcon: Boolean(icon),
    placeholderTextColor,
    handleFocus,
    handleBlur,
    accessibilityState: {
      disabled: false,
    },
  };
};
