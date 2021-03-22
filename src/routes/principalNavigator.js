import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator';
import FaqNavigator from './faqNavigator';

const Stack = createStackNavigator();

export default function PrincipalNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Perguntas Frequentes sobre o App"
        component={FaqNavigator}
      />
    </Stack.Navigator>
  );
}
