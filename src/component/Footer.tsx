import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  colors,
  scaleWidth,
} from '@util';

import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: scaleWidth(5),
    borderRadius: scaleWidth(100),
    width: scaleWidth(135),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 3
  },
});

export { Footer };
