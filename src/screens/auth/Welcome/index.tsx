import { background_signup, background_welcome, IconSlide, ManWithLap } from '@assets';
import { AppButton, AppInput, AppText, Footer } from '@component';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, SIGNUP } from '@routeName';
import { colors, fontFamily, scaleHeight, scaleWidth, SIZE } from '@util';
import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useDispatch } from 'react-redux';
import { styles } from './style';

interface WelcomeProp { }

interface screenNavigationProp {
  navigate: any;
}

const Welcome = (props: WelcomeProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const moveToSignUp = () => {
    navigation.navigate(SIGNUP)
  }

  const moveToLogin = () => {
    navigation.navigate(LOGIN)
  }

  return (
    <>
      <ImageBackground source={background_welcome} resizeMode='cover' style={styles.image} >
        <View style={styles.container}  >
          <AppText numberOfLines={2} style={styles.title}>{'Create a dream and follow it'}</AppText>
          <AppText style={styles.miniTxt}>{'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet.'}</AppText>
          <IconSlide style={{ alignSelf: 'center', marginTop: scaleWidth(36), marginBottom: scaleWidth(38) }} />
          <AppButton
            title={'Sign Up'}
            onPress={moveToSignUp}
          />
          <View style={styles.bottom} >
            <AppText style={styles.bottomTxt2}>{'Already have an account?'}</AppText>
            <Pressable onPress={moveToLogin}>

              <AppText style={styles.bottomTxt}>{'Sign in'}</AppText>
            </Pressable>
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </>
  );
};
export { Welcome };
