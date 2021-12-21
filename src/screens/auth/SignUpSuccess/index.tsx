import { background_setup, background_signup, background_welcome, BoardLoading, IconDelete, ManSitting, ManWithLap, WomanSlide, WomanStand } from '@assets';
import { AppButton, AppInput, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { SIGNUP, SIGNUP_INFO } from '@routeName';
import { colors, fontFamily, scaleHeight, scaleWidth, SIZE } from '@util';
import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './style';

interface SignUpSuccessProp { }

interface screenNavigationProp {
  navigate: any;
}

const SignUpSuccess = (props: SignUpSuccessProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const moveToSignUpInfo = () => {
    navigation.navigate(SIGNUP_INFO)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={background_setup} resizeMode='cover' style={styles.image} >
        <Header iconLeft={'delete'} />
        <View style={styles.container}>

          <AppText numberOfLines={2} style={styles.title}>{"Awesome! Let’s set up your profile"}</AppText>
          <AppButton
            title={"Let's go"}
            onPress={moveToSignUpInfo}
          />
        </View>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};
export { SignUpSuccess };
