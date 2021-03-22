import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MeuPacote({pacote}) {
  const totalData = useMemo(() => (pacote.data.subscription / 1000) * 9.98, [
    pacote,
  ]);
  const totalMin = useMemo(() => (pacote.minutes.subscription / 30) * 3.0, [
    pacote,
  ]);
  const total = useMemo(() => totalData + totalMin + 8.0, [
    totalData,
    totalMin,
  ]);

  return (
    <Animatable.View
      animation="bounceInDown"
      duration={1500}
      style={styles.container}>
      <Text style={styles.title}>Meu pacote</Text>

      <View style={styles.item}>
        <Text style={styles.mensal}>Mensal</Text>

        <View style={styles.pac}>
          <View style={styles.intView}>
            <Icon name="at" size={17} color="#4F4F4F" />
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {' '}
              {pacote.data.subscription}
            </Text>
            <Text> mb</Text>
          </View>
          <View style={styles.intView}>
            <Icon name="phone" size={17} color="#4F4F4F" />
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {' '}
              {pacote.minutes.subscription}
            </Text>
            <Text> min</Text>
          </View>
        </View>
        <View style={styles.pacoteMensal}>
          <Text> + assinatura mensal </Text>
          <Text>R$8,00</Text>
        </View>

        <View style={styles.assinatura}>
          <View style={{flex: 1, justifyContent: 'center', paddingLeft: '10%'}}>
            <Text>Valor total do pacote</Text>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              R${total.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '95%',
    height: '45%',
    borderRadius: 8,
    marginTop: '6%',
    elevation: 3,
    shadowColor: '#000',
  },
  item: {
    backgroundColor: '#D3D3D3',
    width: '90%',
    height: '70%',
    marginTop: '3%',
    marginLeft: '5%',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '5%',
    marginLeft: '5%',
    textAlign: 'center',
  },
  pac: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },
  intView: {
    marginLeft: '3%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
    justifyContent: 'center',
    width: '30%',
    height: '80%',
  },
  assinatura: {
    height: '35%',
    flexDirection: 'row',
  },
  pacoteMensal: {
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '2%',
  },
  mensal: {
    marginLeft: '3%',
    marginTop: '3%',
    fontSize: 16,
    textAlign: 'center',
  },
});

//
