import { avatar_default, background_home, EnableNotification, IconArrowRight, IconProfile } from '@assets';
import { AppText, Footer, Header } from '@component';
import React from 'react';
import { View, ImageBackground, Pressable, Image } from 'react-native';
import { useModel } from './profilesetting.hook';
import { styles } from './style';

interface ProfileSettingProp { }

const ProfileSetting = (props: ProfileSettingProp) => {
  const {
    user,
    onEdit,
    moveToChangePass } = useModel(props)

  return (
    <>
      <ImageBackground source={background_home} resizeMode='cover' style={styles.image} >
        <Header title={'Account'} iconRight={'edit'} iconLeft={'back'} onPressRight={onEdit} />
        <View style={styles.container} >
          <Pressable style={styles.upPhoto} onPress={onEdit}>
            <Image source={avatar_default} style={styles.avatar} />
          </Pressable>

          <AppText style={styles.nameTxt}>{user.user_name}</AppText>
          <AppText style={styles.emailTxt}>{user.email}</AppText>

          <Pressable style={styles.line} onPress={moveToChangePass}>
            <AppText style={styles.text}>{'Change password'}</AppText>
            <IconArrowRight />
          </Pressable>

          <View style={styles.line}>
            <AppText style={styles.text}>{'Enable Notifications'}</AppText>
            <EnableNotification />
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </>
  );
};
export { ProfileSetting };
