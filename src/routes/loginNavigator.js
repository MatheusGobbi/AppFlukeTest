import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';

const Stack = createStackNavigator();

export default function LoginNavigator({setLogin}) {
  return (
    <Stack.Navigator initialRouteName="Entrar">
      <Stack.Screen
        name="Entrar"
        component={LoginPage}
        initialParams={{setLogin}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
