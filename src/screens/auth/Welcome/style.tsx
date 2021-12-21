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
    // justifyContent: 'center',
    paddingHorizontal: SIZE.padding,

    // backgroundColor: colors.background
  },
  title: {
    color: colors.primary,
    fontSize: SIZE.big_size,
    ...fontFamily.Prompt700,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(250),
    lineHeight: scaleWidth(40),
    marginTop: scaleHeight(400),
    marginBottom: 10
  },
  miniTxt: {
    ...fontFamily.Proxima400,
    color: colors.secondPrimary,
    fontSize: SIZE.base_size,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(300),
    lineHeight: scaleWidth(24),
    // marginBottom: scaleWidth(100)
  },
  block: {
    width: '27%'
  },
  bottomTxt: {
    color: colors.violet,
    ...fontFamily.Proxima600,
    fontSize: SIZE.small_size
  },
  bottomTxt2: {
    marginRight: scaleWidth(8),
    fontSize: SIZE.small_size
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleWidth(42),
    justifyContent: 'center',
    marginBottom: SIZE.base_space
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // width: width,
    // height: 563 * width / 488,
  },
  manWithLap: {
    marginTop: scaleHeight(100),
    marginLeft: scaleWidth(25),
  }
});

export { styles };
