import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import TopBar from '../components/TopBar';
import ModalAdicional from '../components/ModalAdicional';
import MeuPacote from '../components/MeuPacote';
import api from '../services/Flukenator';

export default function Shop({navigation}) {
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
    <SafeAreaView
      style={{backgroundColor: '#000', flex: 1, alignItems: 'center'}}>
      <TopBar navigation={navigation} />

      <MeuPacote pacote={pacote} />

      <ModalAdicional fnCompraAdicional={api.comprarAdicional} />
    </SafeAreaView>
  );
}
