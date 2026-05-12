import { ActivityIndicator, Pressable, Text } from 'react-native';
import type { ButtonProps } from './Button.types';
import { useButton } from './useButton';

export const Button = (props: ButtonProps) => {
  const {
    children,
    loading = false,
  } = props;
  const {
    containerStyle,
    labelStyle,
    indicatorColor,
    isDisabled,
    handlePress,
    handlePressIn,
    handlePressOut,
    accessibilityState,
  } = useButton(props);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      disabled={isDisabled}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={containerStyle}
    >
      {loading ? (
        <ActivityIndicator color={indicatorColor} />
      ) : (
        <Text style={labelStyle}>{children}</Text>
      )}
    </Pressable>
  );
};
