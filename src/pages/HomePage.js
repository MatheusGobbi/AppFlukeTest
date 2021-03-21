import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Topbar from '../components/TopBar';


import CardsRender from '../components/CardsRender';
import LegendaHome from '../components/LegendaHome';

export default function Home({ navigation }) {



  return (
    <View
      style={styles.container}>

      <Topbar navigation={navigation} />

      <CardsRender />
      <LegendaHome />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  }
})




