import {
  colors,
  fontFamily,
  scaleHeight,
  scaleSize,
  scaleWidth,
  SIZE,
  width,
} from '@util';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZE.padding,

  },
  title: {
    color: colors.primary,
    fontSize: SIZE.big_size,
    ...fontFamily.Proxima600,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(250),
    lineHeight: scaleWidth(40),
    marginTop: scaleHeight(36),
    marginBottom: 10
  },
  miniTxt: {
    ...fontFamily.Proxima400,
    color: colors.secondPrimary,
    fontSize: SIZE.small_size,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(300),
    lineHeight: scaleWidth(24),
    // marginBottom: scaleWidth(100)
  },

  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleWidth(52),
    justifyContent: 'center',
    marginBottom: SIZE.base_space
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  manWithLap: {
    marginTop: scaleHeight(120),
  },
  button: {
    marginHorizontal: SIZE.padding, marginBottom: SIZE.big_space
  }
});

export { styles };
