import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TextInput, View } from 'react-native';
import type { InputProps } from './Input.types';
import { useInput } from './useInput';

export const Input = (props: InputProps) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    error,
    icon,
    multiline = false,
  } = props;
  const {
    containerStyle,
    fieldContainerStyle,
    inputStyle,
    iconColor,
    errorTextStyle,
    hasError,
    showIcon,
    placeholderTextColor,
    handleFocus,
    handleBlur,
  } = useInput(props);

  return (
    <View style={containerStyle}>
      <View style={fieldContainerStyle}>
        {showIcon && icon ? (
          <Ionicons
            color={iconColor}
            name={icon as keyof typeof Ionicons.glyphMap}
            size={typeof inputStyle.fontSize === 'number' ? inputStyle.fontSize : 16}
          />
        ) : null}
        <TextInput
          accessibilityLabel={placeholder}
          accessibilityState={{ disabled: false }}
          multiline={multiline}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          style={inputStyle}
          value={value}
        />
      </View>
      {hasError && error ? (
        <Text accessibilityRole="alert" style={errorTextStyle}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};
