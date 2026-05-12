import type { TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../../../theme/types';
import type { ButtonSize, ButtonStyleProps, ButtonStyleState, ButtonVariant } from './Button.types';

const getSizeMetrics = (theme: Theme, size: ButtonSize) => {
  switch (size) {
    case 'small':
      return {
        paddingVertical: theme.spacing[2],
        paddingHorizontal: theme.spacing[3],
        fontSize: theme.typography.size.sm,
        minHeight: theme.spacing[8],
      };
    case 'large':
      return {
        paddingVertical: theme.spacing[4],
        paddingHorizontal: theme.spacing[6],
        fontSize: theme.typography.size.lg,
        minHeight: theme.spacing[12],
      };
    case 'medium':
    default:
      return {
        paddingVertical: theme.spacing[3],
        paddingHorizontal: theme.spacing[4],
        fontSize: theme.typography.size.base,
        minHeight: theme.spacing[10],
      };
  }
};

const getVariantColors = (
  theme: Theme,
  variant: ButtonVariant,
  pressed: boolean,
  disabled: boolean,
) => {
  if (disabled) {
    return {
      backgroundColor: theme.colors.interactive.disabled,
      borderColor: theme.colors.border.subtle,
      labelColor: theme.colors.text.disabled,
    };
  }

  switch (variant) {
    case 'secondary':
      return {
        backgroundColor: pressed
          ? theme.colors.background.tertiary
          : theme.colors.surface.elevated,
        borderColor: theme.colors.border.default,
        labelColor: theme.colors.text.primary,
      };
    case 'outline':
      return {
        backgroundColor: pressed ? theme.colors.brand.primaryMuted : 'transparent',
        borderColor: theme.colors.brand.primary,
        labelColor: pressed ? theme.colors.interactive.pressed : theme.colors.brand.primary,
      };
    case 'ghost':
      return {
        backgroundColor: pressed ? theme.colors.brand.primaryMuted : 'transparent',
        borderColor: 'transparent',
        labelColor: pressed ? theme.colors.interactive.pressed : theme.colors.brand.primary,
      };
    case 'primary':
    default:
      return {
        backgroundColor: pressed
          ? theme.colors.interactive.pressed
          : theme.colors.brand.primary,
        borderColor: theme.colors.brand.primary,
        labelColor: theme.colors.brand.onPrimary,
      };
  }
};

export const getButtonContainerStyle = (
  theme: Theme,
  props: ButtonStyleProps,
  state: ButtonStyleState,
): ViewStyle => {
  const { variant, size, disabled, loading } = props;
  const { pressed } = state;
  const isDisabled = Boolean(disabled || loading);
  const metrics = getSizeMetrics(theme, size);
  const colors = getVariantColors(theme, variant, pressed, isDisabled);

  const containerStyle: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: theme.radius.md,
    borderWidth: variant === 'ghost' ? 0 : 1,
    paddingVertical: metrics.paddingVertical,
    paddingHorizontal: metrics.paddingHorizontal,
    minHeight: metrics.minHeight,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,
    opacity: isDisabled ? 0.7 : 1,
  };

  if (variant === 'primary' && !isDisabled) {
    Object.assign(containerStyle, theme.shadows.sm);
  }

  return containerStyle;
};

export const getButtonLabelStyle = (
  theme: Theme,
  props: ButtonStyleProps,
  state: ButtonStyleState,
): TextStyle => {
  const { variant, size, disabled, loading } = props;
  const { pressed } = state;
  const isDisabled = Boolean(disabled || loading);
  const metrics = getSizeMetrics(theme, size);
  const colors = getVariantColors(theme, variant, pressed, isDisabled);

  return {
    color: colors.labelColor,
    fontSize: metrics.fontSize,
    fontWeight: '600',
    fontFamily: theme.typography.fontFamily.semibold,
  };
};

export const getButtonIndicatorColor = (
  theme: Theme,
  props: ButtonStyleProps,
  state: ButtonStyleState,
): string => {
  const labelStyle = getButtonLabelStyle(theme, props, state);
  return typeof labelStyle.color === 'string'
    ? labelStyle.color
    : theme.colors.text.primary;
};
