import { avatar_default, IconCheck, IconEncourage, IconHandShake, IconReply } from '@assets';
import { AppProfileProps } from '@interfaces';
import { colors, fontFamily, LINK_AVATAR, scaleWidth, SIZE } from '@util';
import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    if (onSelected) onSelected(id, !isChecked)
    setIsChecked(!isChecked)
  }

  return (
    <View style={styles.container}>

      {avatar ? <Image source={{ uri: LINK_AVATAR + avatar }} style={styles.avatar} />
        : <Image source={avatar_default} style={styles.avatar} />}

      <View style={{ flex: 1 }}>
        <AppText style={styles.nameTxt}>{name}</AppText>
        {title ? <AppText numberOfLines={1} style={type === 'profile' ? styles.titleTxt2 : styles.titleTxt}>{title}</AppText>
          : null}

      </View>
      {type === 'checkbox' && (
        <Pressable style={isChecked ? styles.checkbox2 : styles.checkbox} onPress={setSelected}>
          {isChecked
            ? <IconCheck style={{ alignSelf: 'center' }} />
            : null}
        </Pressable>
      )}

      {type === 'profile' && (
        <View style={styles.profile} >
          <TouchableOpacity activeOpacity={0.6} style={styles.block} onPress={() => { }}>
            <IconHandShake />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={styles.block2}>
            <IconEncourage />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={styles.block3}>
            <IconReply />
          </TouchableOpacity>




        </View>
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
    fontSize: SIZE.small_size,


  },
  titleTxt2: {
    fontSize: SIZE.small_size,
    width: '60%',
    // backgroundColor: 'yellow',

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
  },
  profile: {
    flexDirection: 'row'
  },
  block: {
    height: scaleWidth(40),
    width: scaleWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.chatBg,
    borderRadius: scaleWidth(12),
    marginLeft: scaleWidth(8)
  },
  block2: {
    height: scaleWidth(40),
    width: scaleWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FEF0',
    borderRadius: scaleWidth(12),
    marginLeft: scaleWidth(8)
  },
  block3: {
    height: scaleWidth(40),
    width: scaleWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE0E2',
    borderRadius: scaleWidth(12),
    marginLeft: scaleWidth(8)
  }
});

export { AppProfile };
