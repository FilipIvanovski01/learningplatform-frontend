import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  icon?: string;
  multiline?: boolean;
  style?: StyleProp<ViewStyle>;
}

export type InputStyleProps = Pick<
  InputProps,
  'error' | 'multiline' | 'icon'
>;

export type InputStyleState = {
  focused: boolean;
};

export type UseInputResult = {
  containerStyle: ViewStyle;
  fieldContainerStyle: ViewStyle;
  inputStyle: TextStyle;
  iconColor: string;
  errorTextStyle: TextStyle;
  hasError: boolean;
  showIcon: boolean;
  placeholderTextColor: string;
  handleFocus: () => void;
  handleBlur: () => void;
  accessibilityState: {
    disabled: boolean;
  };
};
