import { DEVICE } from '@util';
import { StyleSheet } from 'react-native';

const fontFamily = StyleSheet.create({
  Prompt600: {
    fontFamily: 'Prompt-Bold',
  },
  Prompt700: {
    fontFamily: 'Prompt-ExtraBold'
  },
  Proxima400: {
    fontFamily: DEVICE?.isIos ? 'ProximaNova-Regular' : 'ProximaNovaRegular',
  },
  Proxima600: {
    fontFamily: DEVICE?.isIos ? 'ProximaNova-Bold' : 'ProximaNovaBold',
  },
});

export { fontFamily };
