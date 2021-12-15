import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {

  PROFILE_SETTING,
  EDIT_PROFILE,
  PROFILE,
  CHANGE_PASSWORD
} from '../routeName';

import {

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

const AuthenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={PROFILE}>
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={PROFILE_SETTING} component={ProfileSetting} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={CHANGE_PASSWORD} component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default AuthenStack;
