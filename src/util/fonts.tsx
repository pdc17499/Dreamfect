import {Platform, StyleSheet} from 'react-native';

const fontFamily = StyleSheet.create({
  Prompt600: {
    fontFamily: 'Prompt-Bold',
  },
  Prompt700: {
    fontFamily: 'Prompt-ExtraBold',
  },
  Proxima400: {
    fontFamily:
      Platform.OS === 'ios' ? 'ProximaNova-Regular' : 'ProximaNovaRegular',
  },
  Proxima600: {
    fontFamily: Platform.OS === 'ios' ? 'ProximaNova-Bold' : 'ProximaNovaBold',
  },
});

export {fontFamily};
