import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Topbar from '../components/TopBar';


import CardsRender from '../components/CardsRender';
import LegendaHome from '../components/LegendaHome';

export default function Home() {

  const pacotes = [
    { disponivel: 100, total: 170, legenda: 'MB', tipo: 'Dados' },
    { disponivel: 22, total: 30, legenda: 'min', tipo: 'Minutos' }
  ]

  return (
    <View
      style={styles.container}
    >
      <Topbar />
      <CardsRender/>
      <LegendaHome/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
  }
})




