import { IconCheck, IconHandShake, IconPencil, IconTickGreen } from '@assets';
import { colors, fontFamily, scaleHeight, scaleWidth, SIZE, width } from '@util';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { AppText } from './AppText';

interface AppFriendProps {
  avatars?: [],
  type: 'default' | 'close' | 'public',
}

const AppFriend = React.memo((props: AppFriendProps) => {
  const { avatars, type } = props;

  const colorTitle = () => {
    if (type === 'close') return colors.rose;
    if (type === 'public') return colors.violet;
    return colors.orange
  }

  const titleTxt = () => {
    if (type === 'close') return 'Close friends';
    if (type === 'public') return 'Public';
    return 'Friends'
  }

  const colorBackground = () => {
    if (type === 'close') return colors.background2;
    if (type === 'public') return colors.secondButton;
    return colors.chatBg
  }


  return (
    <View style={{
      width: scaleWidth(106),
      height: scaleWidth(100),
      borderRadius: scaleWidth(16),
      backgroundColor: colorBackground(),
      paddingVertical: SIZE.padding,
      alignItems: 'center'
    }}>

      <AppText
        style={{ color: colorTitle(), ...fontFamily.Proxima600 }}>
        {titleTxt()}</AppText>
      <View style={{
        width: scaleWidth(34),
        height: scaleHeight(34),
        backgroundColor: colorTitle(),
        borderRadius: scaleWidth(17),
        marginTop: scaleWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <IconPencil />
      </View>

    </View>
  );
});

const styles = StyleSheet.create({
  image: {
    height: scaleWidth(120),
    width: scaleWidth(120),
    borderRadius: scaleWidth(16),

  },
  container: {
    width: scaleWidth(106),
    height: scaleWidth(100),
    borderRadius: scaleWidth(16),
    backgroundDefault: colors.chatBg,
    paddingVertical: SIZE.padding,
    borderWidth: 1,
    alignItems: 'center'
  },

  titleDefault: {
    color: colors.orange

  }


});

export { AppFriend };
