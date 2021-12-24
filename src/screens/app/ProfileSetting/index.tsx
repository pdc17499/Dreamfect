import { avatar_default, background_home, background_profile, DisableNotification, EnableNotification, IconArrowRight, IconProfile } from '@assets';
import { AppText, Footer, Header } from '@component';
import React from 'react';
import { View, ImageBackground, Pressable, Image } from 'react-native';
import { useModel } from './profilesetting.hook';
import { styles } from './style';

interface ProfileSettingProp { }

const ProfileSetting = (props: ProfileSettingProp) => {
  const {
    onEdit,
    moveToChangePass,
    isEnable,
    changeNotify,
    profile,
    avatar,
    user } = useModel(props)

  return (
    <>
      <ImageBackground source={background_profile} resizeMode='cover' style={styles.image} >
        <Header title={'Account'} iconRight={'edit'} iconLeft={'back'} onPressRight={onEdit} />
        <View style={styles.container} >
          <Pressable style={styles.upPhoto} onPress={onEdit}>
            {profile?.avatar
              ? <Image source={{ uri: 'https://dreamfect-api.adamo.tech/storage/avatars/' + profile?.avatar }} style={styles.avatar} />
              : <Image source={avatar_default} style={styles.avatar} />
            }
          </Pressable>
          <AppText style={styles.nameTxt}>{profile?.uname || ''}</AppText>
          <AppText style={styles.emailTxt}>{profile?.email || ''}</AppText>
          <Pressable style={styles.line} onPress={moveToChangePass}>
            <AppText style={styles.text}>{'Change password'}</AppText>
            <IconArrowRight />
          </Pressable>
          <View style={styles.line}>
            <AppText style={styles.text}>{'Enable Notifications'}</AppText>
            {isEnable
              ? <Pressable onPress={changeNotify}><EnableNotification /></Pressable>
              : <Pressable onPress={changeNotify} ><DisableNotification /></Pressable>}
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </>
  );
};
export { ProfileSetting };
