import { AppButton, AppInput, AppText } from '@component';
import { useNavigation } from '@react-navigation/native';
import { SIGNUP } from '@routeName';
import { colors, fontFamily, scaleWidth, SIZE } from '@util';
import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppText numberOfLines={2} style={styles.title}>{'Creat a dream and follow it'}</AppText>
        <AppText style={styles.miniTxt}>{'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet.'}</AppText>
        <AppButton
          title={'Sign Up'}
          onPress={moveToSignUp}
        />
        <View style={styles.bottom} >
          <AppText style={styles.bottomTxt2}>{'Already have an account?'}</AppText>
          <AppText style={styles.bottomTxt}>{'Sign in'}</AppText>
        </View>
      </View>
    </SafeAreaView>
  );
};
export { Welcome };
