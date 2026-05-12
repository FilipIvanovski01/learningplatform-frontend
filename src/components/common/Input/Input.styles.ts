import type { TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '../../../theme/types';
import type { InputStyleProps, InputStyleState } from './Input.types';

export const getInputContainerStyle = (theme: Theme): ViewStyle => ({
  width: '100%',
});

export const getInputFieldContainerStyle = (
  theme: Theme,
  props: InputStyleProps,
  state: InputStyleState,
): ViewStyle => {
  const { error, multiline, icon } = props;
  const { focused } = state;
  const hasError = Boolean(error);

  return {
    alignItems: multiline ? 'flex-start' : 'center',
    backgroundColor: theme.colors.surface.default,
    borderColor: hasError
      ? theme.colors.status.error
      : focused
        ? theme.colors.interactive.focus
        : theme.colors.border.default,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing[2],
    minHeight: multiline ? theme.spacing[12] : theme.spacing[10],
    paddingHorizontal: theme.spacing[3],
    paddingVertical: multiline ? theme.spacing[3] : theme.spacing[2],
  };
};

export const getInputTextStyle = (theme: Theme, multiline?: boolean): TextStyle => ({
  color: theme.colors.text.primary,
  flex: 1,
  fontFamily: theme.typography.fontFamily.regular,
  fontSize: theme.typography.size.base,
  lineHeight: theme.typography.lineHeight.base,
  paddingVertical: 0,
  textAlignVertical: multiline ? 'top' : 'center',
});

export const getInputIconColor = (
  theme: Theme,
  props: InputStyleProps,
  state: InputStyleState,
): string => {
  const { error } = props;
  const { focused } = state;

  if (error) {
    return theme.colors.status.error;
  }

  if (focused) {
    return theme.colors.interactive.focus;
  }

  return theme.colors.text.tertiary;
};

export const getInputErrorTextStyle = (theme: Theme): TextStyle => ({
  color: theme.colors.status.error,
  fontFamily: theme.typography.fontFamily.regular,
  fontSize: theme.typography.size.sm,
  lineHeight: theme.typography.lineHeight.sm,
  marginTop: theme.spacing[1],
});

export const getInputPlaceholderColor = (theme: Theme): string => theme.colors.text.tertiary;
