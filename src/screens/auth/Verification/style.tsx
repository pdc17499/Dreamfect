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
    ...fontFamily.Proxima600,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    // width: scaleWidth(250),
    lineHeight: scaleWidth(40),
    marginTop: scaleHeight(425),
    marginBottom: 10
  },
  miniTxt: {
    ...fontFamily.Proxima400,
    color: colors.secondPrimary,
    fontSize: SIZE.small_size,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: scaleWidth(21),
    marginBottom: scaleWidth(58)
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
    marginTop: scaleWidth(52),
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // width: width,
    // height: 563 * width / 488,
  },
  manWithLap: {
    marginTop: scaleHeight(84),
    // backgroundColor: 'yellow'
    // marginLeft: scaleWidth(25),
  }
});

export { styles };
