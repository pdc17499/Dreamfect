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
import { APP_STACK } from '@util';
import BottomTab from '../../component/BottomTab/BottomTab';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const AuthenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {Object.keys(APP_STACK).map((item, index) => {
        return (
          <Stack.Screen
            name={item}
            component={APP_STACK[item]}
            key={index}
          />
        )
      })}
    </Stack.Navigator>
  );
};

export default AuthenStack;
