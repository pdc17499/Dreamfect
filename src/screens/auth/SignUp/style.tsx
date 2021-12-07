import { colors, fontFamily, scaleHeight, scaleSize, scaleWidth, SIZE } from '@util';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: SIZE.padding,
    backgroundColor: colors.background
  },
  title: {
    color: colors.primary,
    fontSize: SIZE.big_size,
    ...fontFamily.Proxima600,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(250),
    lineHeight: scaleWidth(40),
    marginTop: scaleHeight(136),
    marginBottom: 5
  },
  miniTxt: {
    ...fontFamily.Proxima400,
    color: colors.secondPrimary,
    fontSize: SIZE.base_size,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(300),
    lineHeight: scaleWidth(24),
    marginBottom: scaleWidth(40)
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
  checkBox: {
    height: scaleWidth(20),
    width: scaleWidth(20),
    borderRadius: scaleWidth(3),
    borderWidth: 2,
    borderColor: colors.placehoderTxt,
    marginRight: scaleWidth(10),
  }

});

export { styles };
