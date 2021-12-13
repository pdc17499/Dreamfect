import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  WELCOME,
  SIGNUP,
  VERIFICATION,
  SIGNUP_SUCCESS,
  SIGNUP_INFO,
  SIGNUP_USER_ACCOUNT,
  LOGIN,
  FORGOT_PASSWORD,
  CREATE_PASSWORD,
  SUCCESS_SCREEN,
  PROFILE_SETTING,
  EDIT_PROFILE,
  PROFILE,
  CHANGE_PASSWORD
} from '../routeName';

import {
  //UnAuthen
  Welcome,
  SignUp,
  Verification,
  SignUpSuccess,
  SignUpInfo,
  SignUpUserAccount,
  LogIn,
  ForgotPassword,
  CreatePassword,
  SuccessScreen,

  // Authen
  ProfileSetting,
  EditProfile,
  Profile,
  ChangePassword

} from '../../screens';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const UnAuthenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={WELCOME}>
      <Stack.Screen name={WELCOME} component={Welcome} />
      <Stack.Screen name={SIGNUP} component={SignUp} />
      <Stack.Screen name={VERIFICATION} component={Verification} />
      <Stack.Screen name={SIGNUP_SUCCESS} component={SignUpSuccess} />
      <Stack.Screen name={SIGNUP_INFO} component={SignUpInfo} />
      <Stack.Screen name={SIGNUP_USER_ACCOUNT} component={SignUpUserAccount} />
      <Stack.Screen name={LOGIN} component={LogIn} />
      <Stack.Screen name={CREATE_PASSWORD} component={CreatePassword} />
      <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={SUCCESS_SCREEN} component={SuccessScreen} />


      <Stack.Screen name={PROFILE_SETTING} component={ProfileSetting} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={CHANGE_PASSWORD} component={ChangePassword} />



    </Stack.Navigator>
  );
};

export default UnAuthenStack;
