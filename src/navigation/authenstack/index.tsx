import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { APP_STACK } from '@util';

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
