import type { ImageStyle, ViewStyle } from 'react-native';
import type { Theme } from '../../../theme/types';
import type { AvatarSize, AvatarStyleProps, AvatarStyleState } from './Avatar.types';

const getAvatarDimension = (theme: Theme, size: AvatarSize): number => {
  switch (size) {
    case 'small':
      return theme.spacing[8];
    case 'medium':
      return theme.spacing[10];
    case 'large':
      return theme.spacing[12] + theme.spacing[2];
    case 'xlarge':
      return theme.spacing[16] + theme.spacing[2];
  }
};

export const getAvatarContainerStyle = (
  theme: Theme,
  props: AvatarStyleProps,
  state: AvatarStyleState,
): ViewStyle => {
  const { size, showBorder, onPress } = props;
  const { pressed } = state;
  const dimension = getAvatarDimension(theme, size);

  return {
    alignItems: 'center',
    borderColor: showBorder
      ? pressed && onPress
        ? theme.colors.brand.primary
        : theme.colors.border.strong
      : 'transparent',
    borderRadius: theme.radius.full,
    borderWidth: showBorder ? 2 : 0,
    height: dimension,
    justifyContent: 'center',
    overflow: 'hidden',
    width: dimension,
  };
};

export const getAvatarImageStyle = (theme: Theme, size: AvatarSize): ImageStyle => {
  const dimension = getAvatarDimension(theme, size);

  return {
    borderRadius: theme.radius.full,
    height: dimension,
    width: dimension,
  };
};
