import { avatar_default, background_home, EnableNotification, IconArrowRight, IconEmail, IconProfile } from '@assets';
import { AppButton, AppText, Footer, Header } from '@component';
import { colors, scaleWidth, SIZE } from '@util';
import React from 'react';
import { View, ImageBackground, Pressable, Image, ScrollView } from 'react-native';
import { useModel } from './profile.hook';
import { styles } from './style';

interface ProfileProp { }

const Profile = (props: ProfileProp) => {
  const {
    onEdit,
    onMyDream,
    setOnMyDream,
    setDreamRender,
    RenderDream,
    myList,
    info,
    user } = useModel(props)

  return (
    <>
      <ImageBackground source={background_home} resizeMode='cover' style={styles.image} >
        <Header iconRight={'setting'} iconLeft={'logo'} onPressRight={onEdit} />
        <View style={styles.container}  >
          <View style={styles.dreamTxt}>
            <View style={{ alignItems: 'center' }}>
              <AppText style={styles.numberDream}>{info?.count_ongoing_dream || '0'}</AppText>
              <AppText>{'Ongoing dream'}</AppText>
            </View>
            <View style={{ alignItems: 'center' }}>
              <AppText style={styles.numberDream}>{info?.count_complete_dream || '0'}</AppText>
              <AppText>{'Completed dream'}</AppText>
            </View>
          </View>

          {
            info?.count_ongoing_dream === 0
              ? <View style={{ alignItems: 'center' }}>
                <AppText style={styles.NoDreamTxt}>{'No dreams'}</AppText>
                <AppText style={styles.miniTxt}>{'You currently do not have any dreams, try to create'}</AppText>
                <AppButton
                  title={'Create'}
                  containerStyle={{ width: scaleWidth(335), marginTop: SIZE.medium_space }}
                  onPress={setDreamRender}
                />
              </View>
              : <>
                <View style={styles.buttonBlock}>
                  <AppButton
                    containerStyle={{ width: scaleWidth(130), alignSelf: 'center' }}
                    title={'My lists'}
                    isNotFocus={!onMyDream}
                    onPress={setDreamRender}
                  />
                  <AppButton
                    containerStyle={{ width: scaleWidth(130), alignSelf: 'center' }}
                    title={'Follow dreams'}
                    isNotFocus={onMyDream}
                    onPress={setDreamRender}
                  />
                </View>
                {RenderDream()}</>

          }
        </View>
        <Pressable style={styles.upPhoto} onPress={onEdit}>
          <Image source={{ uri: 'https://dreamfect-api.adamo.tech/storage/avatars/' + info?.avatar }} style={styles.avatar} />
        </Pressable>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};
export { Profile };
