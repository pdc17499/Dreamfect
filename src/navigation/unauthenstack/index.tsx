import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  WELCOME,
  SIGNIN,
  SIGNUP,
} from '../routeName';

import {
  Welcome,
  SignIn,
  SignUp
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
      <Stack.Screen name={SIGNIN} component={SignIn} />

    </Stack.Navigator>
  );
};

export default UnAuthenStack;
