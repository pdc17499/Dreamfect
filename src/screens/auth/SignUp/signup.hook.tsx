import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import * as yup from 'yup';
import {LOGIN} from '@routeName';
import {useDispatch} from 'react-redux';
import {signUpApple, signUpEmail, signUpFacebook, signUpGoogle} from '@redux';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {validateForm} from '@util';
import {onAppleButtonPress} from '@HOC';
import auth from '@react-native-firebase/auth';

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const changeRemember = () => {
    setIsChecked(!isChecked);
  };

  const moveToSignIn = () => {
    navigation.navigate(LOGIN);
  };

  const formInitialValues = {
    email: '',
    password: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    email: validateForm().email,
    password: validateForm().password,
  });

  const onSubmit = (email: any, password: any) => {
    dispatch(signUpEmail({email, password}));
    // navigation.navigate(VERIFICATION, { params: 'SignUp' })
  };

  const signUpWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result: any) {
        if (result.isCancelled) {
          console.log('==> Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(accessToken => {
            console.log('acc', accessToken?.accessToken);
            dispatch(signUpFacebook(accessToken?.accessToken));
          });
        }
      },
      function (error) {
        console.log('==> Login fail with error: ' + error);
      },
    );
  };

  const signUpWithGoogle = async () => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '523059104460-lmipqm9d9pg6nt9aa29mrhqfpu3ns4t4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
      iosClientId:
        '523059104460-b80sohasae2dq236ashu67afhkrd7hs9.apps.googleusercontent.com',
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      dispatch(signUpGoogle(userInfo.idToken));
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

  const signUpWithApple = () => {
    // Settings.setAppID('1028173587761172');
    onAppleButtonPress().then(data => {
      console.log({data});
      if (data.uuid) {
        dispatch(signUpApple(data.uuid));
      }
    });
  };

  return {
    changeRemember,
    moveToSignIn,
    formInitialValues,
    validationSign,
    onSubmit,
    signUpWithFacebook,
    signUpWithGoogle,
    signUpWithApple,
  };
}
