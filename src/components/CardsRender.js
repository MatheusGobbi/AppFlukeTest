import React, {useMemo} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import ProgressCircle from 'react-native-progress-circle';

import Swiper from 'react-native-deck-swiper';

const InternalCard = ({card}) => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '70%',
        borderRadius: 30,
        alignItems: 'center',
        padding: '10%',
        marginTop: '20%',
      }}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 22,
            color: '#000',
            fontWeight: 'bold',
          }}>
          {card.tipo}
        </Text>
        <ProgressCircle
          percent={calcPorcent(card.available, card.subscription + card.topup)}
          radius={140}
          borderWidth={10}
          color="#32CD32"
          shadowColor="#999"
          bgColor="#fff">
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 60}}>{card.available}</Text>
            <Text style={{paddingTop: '17%'}}>{card.legenda}</Text>
          </View>
          <Text style={{fontSize: 16, fontFamily: 'Pacifico-Regular'}}>
            Disponiveis
          </Text>
        </ProgressCircle>
        <Text style={{padding: 20}}>
          de {card.subscription + card.topup} {card.legenda}
        </Text>
      </View>
    </View>
  </SafeAreaView>
);

export default function CardsRender({pacote}) {
  const pacoteSwiper = useMemo(
    () => [
      {
        available: pacote.data.available,
        subscription: pacote.data.subscription,
        topup: pacote.data.topup,
        legenda: 'MB',
        tipo: 'Dados',
      },
      {
        available: pacote.minutes.available,
        subscription: pacote.minutes.subscription,
        topup: pacote.minutes.topup,
        legenda: 'min',
        tipo: 'Minutos',
      },
    ],
    [pacote],
  );

  return (
    <Swiper
      marginTop={10}
      backgroundColor={'#000'}
      verticalSwipe={false}
      animateCardOpacity={true}
      stackSize={2}
      infinite
      cards={pacoteSwiper}
      renderCard={card => <InternalCard card={card} />}
    />
  );
}

/**
 * calcular porcentagem da roda dados
 * @param {Number} disponivel
 * @param {Number} total
 * @returns {Number}
 */
function calcPorcent(disponivel, total) {
  const porcent = (disponivel * 100) / total;
  return porcent;
}
