import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import Topbar from '../components/TopBar';
import CardsRender from '../components/CardsRender';
import LegendaHome from '../components/LegendaHome';
import api from '../services/Flukenator';

export default function Home({navigation}) {
  const [pacote, setPacote] = useState({
    data: {available: 0, subscription: 0, topup: 0},
    minutes: {available: 0, subscription: 0, topup: 0},
  });

  const getPacote = useCallback(() => {
    api.getPacote().then(responsePacote => setPacote(responsePacote));
  }, []);

  useEffect(() => {
    getPacote();
  }, [getPacote]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', getPacote);
    return unsubscribe;
  }, [getPacote, navigation]);

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
