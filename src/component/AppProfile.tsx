import { AppProfileProps } from '@interfaces';
import { colors, fontFamily, scaleWidth, SIZE } from '@util';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppText } from './AppText';


const AppProfile = React.memo((props: AppProfileProps) => {
  const {
    name,
    avatar,
    title,
    type } = props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View>
        <AppText style={styles.nameTxt}>{name}</AppText>
        <AppText numberOfLines={1} style={styles.titleTxt}>{title}</AppText>
      </View>
      {type === 'checkbox' && (
        <View style={styles.checkbox}>

        </View>
      )}
    </View >
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height: scaleWidth(40),
    width: scaleWidth(40),
    borderRadius: scaleWidth(20),
  },
  nameTxt: {
    color: colors.primary,
    fontSize: SIZE.small_size,
    ...fontFamily.Proxima600,

  },
  titleTxt: {
    fontSize: SIZE.small_size
  },
  checkbox: {
    backgroundColor: colors.inputBg,
    borderRadius: scaleWidth(8)
  }

});

export { AppProfile };
