import { background_setup } from '@assets';
import { AppButton, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { SIGNUP_INFO } from '@routeName';
import React from 'react';
import { View, SafeAreaView, ImageBackground } from 'react-native';
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
