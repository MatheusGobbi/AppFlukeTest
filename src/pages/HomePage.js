import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Topbar from '../components/TopBar';

import CardsRender from '../components/CardsRender';
import LegendaHome from '../components/LegendaHome';
import api from '../services/Flukenator';

export default function Home({navigation}) {
  const [pacote, setPacote] = useState({
    data: {available: 0, subscription: 0, topup: 0},
    minutes: {available: 0, subscription: 0, topup: 0},
  });

  useEffect(() => {
    api.getPacote().then(responsePacote => {
      setPacote(responsePacote);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Topbar navigation={navigation} />
      <CardsRender pacote={pacote} />
      <LegendaHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
