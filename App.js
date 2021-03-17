import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import MyTabs from './src/components/Navegation';
import Dicas from './src/components/DicasApp';


const Stack = createStackNavigator();

export default function App() {
  
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dicas" component={Dicas} options={{ headerShown: false}}/>
          <Stack.Screen name="Navegacao" component={MyTabs} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )

}
























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

