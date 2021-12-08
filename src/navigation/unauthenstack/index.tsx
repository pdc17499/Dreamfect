import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  WELCOME,
  SIGNUP,
  VERIFICATION,
  SIGNUP_SUCCESS,
  SIGNUP_INFO,
  USER_ACCOUNT,
  LOGIN,
} from '../routeName';

import {
  Welcome,
  SignUp,
  Verification,
  SignUpSuccess,
  SignUpInfo,
  UserAccount,
  LogIn
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
      <Stack.Screen name={USER_ACCOUNT} component={UserAccount} />
      <Stack.Screen name={LOGIN} component={LogIn} />


    </Stack.Navigator>
  );
};

export default UnAuthenStack;
