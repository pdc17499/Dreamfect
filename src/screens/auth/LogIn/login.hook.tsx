import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { FORGOT_PASSWORD, PROFILE, SIGNUP } from '@routeName';
import { validateForm } from '@util';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginApp, signInFacebook, signInGoogle } from '@redux';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Settings } from 'react-native-fbsdk-next';

interface screenNavigationProp {
  navigate: any;
}
export function useModel(props: any) {
  const dispatch = useDispatch()
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
    email: validateForm().email,
    password: validateForm().password,
  });

  const onSubmit = (email: string, password: string) => {
    dispatch(loginApp({ email: email, password: password }))
  };

  const moveToSignup = () => {
    navigation.navigate(SIGNUP)
  }

  const signInWithFacebook = () => {
    // Settings.setAppID('1028173587761172');
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result: any) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then((accessToken) => {
            console.log('afacebook', accessToken?.accessToken)
            dispatch(signInFacebook(accessToken?.accessToken))
          })
        }
      },
      function (error) {
        console.log("==> Login fail with error: " + error);
      }
    );
  }

  const signInWithGoogle = async () => {
    GoogleSignin.configure({
      scopes: [], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '523059104460-lmipqm9d9pg6nt9aa29mrhqfpu3ns4t4.apps.googleusercontent.com',
      // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('googk', userInfo.idToken);
      dispatch(signInGoogle(userInfo.idToken))

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {

        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log('err', error.code);
        Alert.alert(error.code);
      }
    }
  };


  return {
    moveToForgot,
    formInitialValues,
    validationSign,
    onSubmit,
    moveToSignup,
    signInWithGoogle,
    signInWithFacebook
  }
}