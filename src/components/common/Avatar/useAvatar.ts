import { useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { getAvatarContainerStyle, getAvatarImageStyle } from './Avatar.styles';
import type { AvatarProps, UseAvatarResult } from './Avatar.types';

export const useAvatar = ({
  size,
  showBorder = false,
  onPress,
  style,
}: AvatarProps): UseAvatarResult => {
  const { theme } = useTheme();
  const [pressed, setPressed] = useState(false);
  const isPressable = Boolean(onPress);

  const styleProps = useMemo(
    () => ({
      size,
      showBorder,
      onPress,
    }),
    [onPress, showBorder, size],
  );

  const styleState = useMemo(() => ({ pressed }), [pressed]);

  const containerStyle = useMemo(
    () => StyleSheet.flatten([getAvatarContainerStyle(theme, styleProps, styleState), style]),
    [style, styleProps, styleState, theme],
  );

  const imageStyle = useMemo(() => getAvatarImageStyle(theme, size), [size, theme]);

  const handlePress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  const handlePressIn = useCallback(() => {
    if (isPressable) {
      setPressed(true);
    }
  }, [isPressable]);

  const handlePressOut = useCallback(() => {
    setPressed(false);
  }, []);

  return {
    containerStyle,
    imageStyle,
    isPressable,
    handlePress,
    handlePressIn,
    handlePressOut,
    accessibilityRole: isPressable ? 'button' : 'image',
  };
};
