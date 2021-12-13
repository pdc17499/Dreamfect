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
    marginTop: scaleWidth(100),
    backgroundColor: colors.white,
    borderTopRightRadius: scaleWidth(48),
    borderTopLeftRadius: scaleWidth(48)
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  upPhoto: {
    alignSelf: 'center',
    position: 'absolute',
    top: scaleWidth(-52),

  },
  avatar: {
    height: scaleWidth(104), width: scaleWidth(104), borderRadius: scaleWidth(52)
  },
  nameTxt: {
    marginTop: scaleWidth(84),
    fontSize: SIZE.medium_size,
    ...fontFamily.Proxima600,
    color: colors.primary,
    marginBottom: 3,
    alignSelf: 'center'
  },
  emailTxt: {
    marginBottom: scaleWidth(36),
    alignSelf: 'center',

  },
  text: {
    color: colors.primary,
    ...fontFamily.Proxima600,
    fontSize: SIZE.base_size
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleWidth(24),
    paddingBottom: scaleWidth(17),
    borderBottomWidth: 1,
    borderBottomColor: colors.hr,

  }
});

export { styles };
