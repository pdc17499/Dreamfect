import {
  colors,
  fontFamily,
  scaleHeight,
  scaleSize,
  scaleWidth,
  SIZE,
  width,
} from '@util';
import { size } from 'lodash';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scaleWidth(40),
    backgroundColor: colors.white,
    borderTopRightRadius: scaleWidth(48),
    borderTopLeftRadius: scaleWidth(48),
    paddingHorizontal: SIZE.padding,
    paddingTop: scaleWidth(32)
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  botTxt: {
    color: colors.primary,
    marginBottom: scaleWidth(10),
    marginTop: scaleWidth(20)
  },
  imageVideo: {
    width: scaleWidth(335),
    height: scaleWidth(172),
    borderRadius: scaleWidth(16)
  },
  button: {
    marginTop: SIZE.medium_space, marginBottom: scaleWidth(130)
  },
  editPhoto: {
    position: 'absolute',
    bottom: 15,
    right: 12
  },
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  }

});

export { styles };
