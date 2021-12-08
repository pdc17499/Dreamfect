import { colors, fontFamily, scaleHeight, scaleSize, scaleWidth, SIZE, width } from '@util';
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
    lineHeight: scaleWidth(40),
    marginTop: scaleHeight(68),
    // marginBottom: SIZE.medium_space
  },
  miniTxt: {
    ...fontFamily.Proxima400,
    color: colors.secondPrimary,
    fontSize: SIZE.base_size,
    alignSelf: 'center',
    textAlign: 'center',
    width: scaleWidth(300),
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
    marginTop: scaleWidth(36),
    justifyContent: 'center',
    marginBottom: scaleWidth(25)
  },
  checkBox: {
    height: scaleWidth(20),
    width: scaleWidth(20),
    borderRadius: scaleWidth(3),
    borderWidth: 2,
    borderColor: colors.placehoderTxt,
    marginRight: scaleWidth(10),

  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: colors.hr,
    width: '100%'
  },
  check: {
    position: 'absolute',
    top: -3,
    left: -3
  },
  OrTxt: {
    fontSize: scaleSize(18),
    marginHorizontal: scaleWidth(20)
  },
  block: {
    flex: 1
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    width: width,
    height: 635 * width / 488,
  },
  avatar: {
    height: scaleWidth(104), width: scaleWidth(104), borderRadius: scaleWidth(52)
  },
  button: {
    marginHorizontal: SIZE.padding, marginBottom: SIZE.medium_space
  },
  upPhoto: {
    alignSelf: 'center',
    marginTop: scaleWidth(30),
    marginBottom: scaleWidth(20)
  }

});

export { styles };
