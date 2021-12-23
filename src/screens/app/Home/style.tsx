import { colors, fontFamily, scaleWidth, SIZE, width } from "@util";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZE.padding,
  },
  container2: {
    flex: 1,
    paddingHorizontal: SIZE.padding,
    backgroundColor: 'white',

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
    marginTop: scaleWidth(185)

  },
  miniTxt: {
    width: scaleWidth(200),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: SIZE.medium_space
  },
  dream: {
    width: '100%',
    height: scaleWidth(198),
    borderRadius: scaleWidth(16),
    marginVertical: scaleWidth(16)
  },
  dreamTitle: {
    ...fontFamily.Proxima600,
    fontWeight: '700',

  },
  dreamDes: {
    fontSize: SIZE.small_size,
    width: '80%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleWidth(62),
    marginBottom: scaleWidth(32)
  }


});

export { styles };