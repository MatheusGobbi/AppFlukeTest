import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Dicas from '../components/DicasApp';

const Stack = createStackNavigator();

export default function TutorialNavigator({setTutorial}) {
  return (
    <Stack.Navigator initialRouteName="Dicas">
      <Stack.Screen
        name="Dicas"
        component={Dicas}
        initialParams={{setTutorial}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
