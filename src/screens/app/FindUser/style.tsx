import { colors, fontFamily, scaleWidth, SIZE, width } from "@util";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZE.padding,
  },
  image: {
    flex: 1,
  },
  bigTxt: {
    fontSize: SIZE.big_size,
    ...fontFamily.Proxima600,
    fontWeight: '700',
    alignSelf: 'center',
    color: colors.primary,
    marginTop: scaleWidth(200)

  },
  miniTxt: {
    width: scaleWidth(200),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: SIZE.medium_space
  },
  search: {
    borderWidth: 2,
    borderColor: colors.inputBg,
    height: scaleWidth(48),
    paddingHorizontal: scaleWidth(20),
    borderRadius: scaleWidth(16),
    marginTop: scaleWidth(27),
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    position: 'absolute', bottom: SIZE.medium_space, width: '100%'
  },
  input: {
    flex: 1,
    ...fontFamily.Proxima600
  }

});

export { styles };