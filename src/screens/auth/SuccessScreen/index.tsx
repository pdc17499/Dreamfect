import { background_welcome, WomanSuccess } from '@assets';
import { AppButton, AppText, Footer } from '@component';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, PROFILE } from '@routeName';
import React from 'react';
import { View, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './style';

interface SuccessScreenProp { }

interface screenNavigationProp {
  navigate: any;
}

const SuccessScreen = (props: SuccessScreenProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const moveToHomePage = () => {
    navigation.navigate(LOGIN)
  }

  return (
    <>
      <ImageBackground source={background_welcome} resizeMode='cover' style={styles.image} >
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <View style={styles.manWithLap}>
            <WomanSuccess />
          </View>
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
