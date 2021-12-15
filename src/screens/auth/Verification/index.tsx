import { background_welcome, BoardLoading, ManSitting } from '@assets';
import { AppButton, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, SIGNUP_SUCCESS, SUCCESS_SCREEN } from '@routeName';
import { scaleWidth } from '@util';
import React from 'react';
import { View, SafeAreaView, ImageBackground, Linking, BackHandler } from 'react-native';
import { styles } from './style';
import { openInbox } from "react-native-email-link";

interface screenNavigationProp {
  navigate: any;
}

const Verification = (props: any) => {
  const navigation = useNavigation<screenNavigationProp>();
  const { params } = props?.route?.params
  console.log('prps', params);


  const openMailApp = () => {
    openInbox({
      // message: "Whatcha wanna do?",
      cancelLabel: "Cancel",
    });
    navigation.navigate(LOGIN)
    // (params === 'SignUp')
    //   ? navigation.navigate(SIGNUP_SUCCESS)
    //   : navigation.navigate(SUCCESS_SCREEN)
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
