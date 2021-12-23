import { background_success } from '@assets';
import { AppButton, AppText, Footer } from '@component';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, PROFILE, PROFILE_SETTING } from '@routeName';
import React from 'react';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { styles } from './style';

interface SuccessScreenProp { }

interface screenNavigationProp {
  navigate: any;
}

const SuccessScreen = (props: SuccessScreenProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const token = useSelector((state: any) => state?.auth?.token);
  const moveToHomePage = () => {
    token ? navigation.navigate(PROFILE_SETTING)
      : navigation.navigate(LOGIN)
  }

  return (
    <>
      <ImageBackground source={background_success} resizeMode='cover' style={styles.image} >
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <AppText numberOfLines={2} style={styles.title}>{'Success'}</AppText>
          <AppText style={styles.miniTxt}>{'Your password has been successfully recovered'}</AppText>
        </KeyboardAwareScrollView>
        <AppButton
          title={'Done'}
          onPress={moveToHomePage}
          customStyleButton={styles.button}
        />
        <Footer />
      </ImageBackground>
    </>
  );
};
export { SuccessScreen };
