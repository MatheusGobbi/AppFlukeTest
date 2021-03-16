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
} from 'react-native';


//import api from './src/services/api';


const headers = {
  'Authorization': 'Bearer' + 'example@email.com'
}

import Navegacao from './src/components/Navegation'


export default function App() {

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

  return (
  
      <Navegacao />
    
  );


}



const styles = StyleSheet.create({

});





