import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import MyTabs from './src/components/Navegation';
import Dicas from './src/components/DicasApp';
import Faq from './src/pages/FaqPage';
import TopBar from './src/components/TopBar';
import FaqModal from './src/components/FaqModalize';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dicas">
        <Stack.Screen
          name="Dicas"
          component={Dicas}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Navegacao"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopBar"
          component={TopBar}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Peruntas Frequentes sobre o App" component={Faq} />
        <Stack.Screen name="FaqModal" component={FaqModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**UTIL
 *  headerMode='none'

          screenOptions={() => {
            return {
              gestureEnabled: true,
              cardOverlayEnabled: true,
              ...TransitionPresets.ModalPresentationIOS,
            };
          }}
          mode="modal"
 *
 *
 */

//import api from './src/services/api';
//aaaaaaaaaa
//teste
//const headers = {
// 'Authorization': 'Bearer' + 'example@email.com'
//}

//get api
/* const [pacote, setPacote] = useState(null)

   useEffect(() => {
     api.get("/usage/packageInformation/",
       {
         headers: headers
       }).then(response => {
         //console.log(response.data)
         setPacote(response.data);
         //console.log(pacote.data.subscription)
          //console.log(pacote.data.available)
       });
 }, [])/*/
