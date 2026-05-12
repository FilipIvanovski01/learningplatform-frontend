import type { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface AvatarProps {
  source: ImageSourcePropType;
  size: AvatarSize;
  showBorder?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export type AvatarStyleProps = Pick<AvatarProps, 'size' | 'showBorder' | 'onPress'>;

export type AvatarStyleState = {
  pressed: boolean;
};

export type UseAvatarResult = {
  containerStyle: ViewStyle;
  imageStyle: ImageStyle;
  isPressable: boolean;
  handlePress: () => void;
  handlePressIn: () => void;
  handlePressOut: () => void;
  accessibilityRole: 'button' | 'image';
};
