import { IconCheck } from '@assets';
import { AppProfileProps } from '@interfaces';
import { colors, fontFamily, scaleWidth, SIZE } from '@util';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AppText } from './AppText';

const AppProfile = React.memo((props: AppProfileProps) => {
  const {
    id,
    name,
    avatar,
    title,
    onSelected,
    type } = props;
  const [isChecked, setIsChecked] = useState(false)

  const setSelected = () => {
    if (onSelected) onSelected(id)
    setIsChecked(!isChecked)
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <AppText style={styles.nameTxt}>{name}</AppText>
        <AppText numberOfLines={1} style={styles.titleTxt}>{title}</AppText>
      </View>
      {type === 'checkbox' && (
        <Pressable style={isChecked ? styles.checkbox2 : styles.checkbox} onPress={setSelected}>
          {isChecked
            ? <IconCheck style={{ alignSelf: 'center' }} />
            : null}
        </Pressable>
      )}
    </View >
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  avatar: {
    height: scaleWidth(40),
    width: scaleWidth(40),
    borderRadius: scaleWidth(20),
    marginRight: scaleWidth(10),
  },
  nameTxt: {
    color: colors.primary,
    fontSize: SIZE.small_size,
    ...fontFamily.Proxima600,
    fontWeight: '700'
  },
  titleTxt: {
    fontSize: SIZE.small_size
  },
  checkbox: {
    backgroundColor: colors.inputBg,
    borderRadius: scaleWidth(8),
    width: scaleWidth(26),
    height: scaleWidth(26),
    marginRight: scaleWidth(10),
    borderWidth: 1,
    borderColor: colors.inputBg,
  },
  checkbox2: {
    backgroundColor: colors.violet,
    borderRadius: scaleWidth(8),
    width: scaleWidth(26),
    height: scaleWidth(26),
    marginRight: scaleWidth(10)
  }
});

export { AppProfile };
