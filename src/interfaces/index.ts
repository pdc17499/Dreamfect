import {ReactElement} from 'react';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface screenNavigationProp {
  navigate: any;
}

export interface pickerProps {
  label?: string;
  value?: any;
  icon?: any;
  iconSelected?: any;
}

export interface ButtonProps {
  title?: string;
  label?: string;
  containerStyle?: ViewStyle;
  customStyleButton?: ViewStyle | ViewStyle[];
  customStyleLabel?: TextStyle;
  customStyleTitle?: TextStyle;
  onPress?: any;
  disabled?: boolean;
  image?: any;
  size?: 'base' | 'small';
  typeButton?: 'rose' | 'full' | 'green' | 'orange';
  isNotFocus?: boolean;
  iconLeft?: any;
  iconRight?:
    | 'right'
    | 'email'
    | 'arNextBlack'
    | 'arNext'
    | 'addPhoto'
    | 'addVideo'
    | 'tick'
    | 'other'
    | 'plus';
  imageStyle?: ImageStyle;
}

export interface IAppInput {
  label?: string;
  placeholder?: string;
  value?: any;
  secureTextEntry?: boolean;
  type?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  customStyleLabel?: TextStyle;
  multiline?: boolean;
  numberOfLines?: number;
  error?: string;
  showEye?: boolean;
  onValueChange?: (value: any, name?: string) => void;
  keyboardType?: any;
  editable?: boolean;
  name?: string;
  autoFocus?: boolean;
  typeInput?: 'default' | 'price' | 'phone' | 'password' | 'linear';
  delimiter?: string;
  onPressRightIcon?: () => void;
  maxLength?: number;
  callBackOnFocus?: (focus: boolean) => void;
  onEndEditing?: (name?: string) => void;
}

export interface HeaderProps {
  customTitleStyle?: any;
  title?: string;
  customContainer?: ViewStyle;
  back?: any;
  btnCountine?: boolean;
  onPressRight?: () => void;
  btnRight?: any;
  iconRight?: 'email' | 'edit' | 'setting' | 'logout';
  iconLeft?: 'delete' | 'back' | 'logo';
  onPressBack?: () => void;
  iconFillColor?: string;
}
