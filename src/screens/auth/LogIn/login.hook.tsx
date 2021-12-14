import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { FORGOT_PASSWORD, PROFILE, SIGNUP } from '@routeName';
import { validateForm } from '@util';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

interface screenNavigationProp {
  navigate: any;
}
export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [isChecked, setIsChecked] = useState(false)
  const moveToForgot = () => {
    navigation.navigate(FORGOT_PASSWORD)
  }
  const formInitialValues = {
    email: '',
    password: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    // email: validateForm().common.email,
    // password: validateForm().common.password,
  });

  const onSubmit = () => {
    navigation.navigate(PROFILE)
  };

  const moveToSignup = () => {
    navigation.navigate(SIGNUP)

  }


  const signInGoogle = async () => {
    GoogleSignin.configure({
      scopes: [], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '523059104460-lmipqm9d9pg6nt9aa29mrhqfpu3ns4t4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {

        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');

      } else {
        console.log('err', error.code);

        Alert.alert('ERROR');
      }
    }
  };


  return {
    moveToForgot,
    formInitialValues,
    validationSign,
    onSubmit,
    moveToSignup,
    signInGoogle
  }
}