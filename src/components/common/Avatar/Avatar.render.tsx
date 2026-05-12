import { Image, Pressable, View } from 'react-native';
import type { AvatarProps } from './Avatar.types';
import { useAvatar } from './useAvatar';

export const Avatar = (props: AvatarProps) => {
  const { source } = props;
  const {
    containerStyle,
    imageStyle,
    isPressable,
    handlePress,
    handlePressIn,
    handlePressOut,
    accessibilityRole,
  } = useAvatar(props);

  const image = <Image accessibilityRole="image" source={source} style={imageStyle} />;

  if (isPressable) {
    return (
      <Pressable
        accessibilityRole={accessibilityRole}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={containerStyle}
      >
        {image}
      </Pressable>
    );
  }

  return <View style={containerStyle}>{image}</View>;
};
