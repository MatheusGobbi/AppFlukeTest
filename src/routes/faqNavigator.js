import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Faq from '../pages/FaqPage';

const Stack = createStackNavigator();

export default function FaqNavigator() {
  return (
    <Stack.Navigator initialRouteName="Faq">
      <Stack.Screen
        name="Perguntas Frequentes sobre o App"
        component={Faq}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
