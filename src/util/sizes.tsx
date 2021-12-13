import { Dimensions, PixelRatio } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DEFAULT_WIDTH = 375;
const DEFAULT_HEIGHT = 812;
export const { width, height } = Dimensions.get('screen');

export const scaleWidth = (wd: number) => {
  return wp(`${(wd * 100) / DEFAULT_WIDTH}%`);
};

export const scaleHeight = (wd: number) => {
  return hp(`${(wd * 100) / DEFAULT_HEIGHT}%`);
};

export function scaleSize(size: number) {
  const scale = width / DEFAULT_WIDTH;
  const newSize = size * scale;
  return PixelRatio.roundToNearestPixel(newSize);
}

export const SIZE = {
  //Input
  input_height: scaleWidth(60),
  //Input
  btn_height: scaleWidth(52),
  btn_height_small: scaleWidth(48),
  //Text
  line_height: 20,

  // space
  medium_space: scaleWidth(48),
  big_space: scaleWidth(70),
  base_space: scaleWidth(16),
  padding: scaleWidth(20),

  //Font size
  small_size: scaleSize(14),
  base_size: scaleSize(16),
  medium_size: scaleSize(20),
  semi_size: scaleSize(28),
  big_size: scaleSize(30),
};
