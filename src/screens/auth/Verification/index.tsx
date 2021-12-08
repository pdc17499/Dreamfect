import { background_welcome, BoardLoading, ManSitting, IconDelete } from '@assets';
import { AppButton, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { SIGNUP, SIGNUP_SUCCESS } from '@routeName';
import { scaleHeight, scaleWidth } from '@util';
import React from 'react';
import { View, SafeAreaView, ImageBackground, Platform, NativeModules, Linking, Pressable } from 'react-native';
import { styles } from './style';

interface VerificationProp { }

interface screenNavigationProp {
  navigate: any;
}

const Verification = (props: VerificationProp) => {
  const navigation = useNavigation<screenNavigationProp>();

  const openMailApp = () => {
    navigation.navigate(SIGNUP_SUCCESS)
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={background_welcome} resizeMode='cover' style={styles.image} >
        <Header iconLeft={'delete'} />
        <View style={styles.container}>
          {/* <Pressable style={{ marginTop: scaleWidth(56) }}>
            <IconDelete />
          </Pressable> */}
          <View style={styles.manWithLap}>
            <BoardLoading />
            <ManSitting style={{ position: 'absolute', top: scaleWidth(60), right: 0 }} />
          </View>
          <AppText numberOfLines={2} style={styles.title}>{'A verification link email has been sent'}</AppText>
          <AppText style={styles.miniTxt}>{'The link will reopen the app'}</AppText>
          <AppButton
            title={'Open mail'}
            onPress={openMailApp}
          />
        </View>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};
export { Verification };
