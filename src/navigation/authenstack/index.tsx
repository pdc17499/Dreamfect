import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {

  PROFILE_SETTING,
  EDIT_PROFILE,
  PROFILE,
  CHANGE_PASSWORD,
  SUCCESS_SCREEN
} from '../routeName';

import {

  // Authen
  ProfileSetting,
  EditProfile,
  Profile,
  ChangePassword,
  SuccessScreen

} from '../../screens';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const AuthenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={PROFILE}>
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={PROFILE_SETTING} component={ProfileSetting} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={SUCCESS_SCREEN} component={SuccessScreen} />

    </Stack.Navigator>
  );
};

export default AuthenStack;
