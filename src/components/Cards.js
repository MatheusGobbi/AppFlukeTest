import React from 'react';
import { View, Text, SafeAreaView, SafeAreaViewBase } from 'react-native';

import ProgressCircle from 'react-native-progress-circle';

import Swiper from 'react-native-deck-swiper';
import { Button, DeckSwiper } from 'native-base';

import Topbar from './TopBar';

import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';

export default function Card() {

  const pacotes = [
    { disponivel: 100, total: 170, legenda: 'MB', tipo: 'Dados' },
    { disponivel: 22, total: 30, legenda: 'min', tipo: 'Minutos' }
  ]

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: '5%',

      }}
    >


      <Topbar />




      <Swiper
        marginTop={30}
        backgroundColor={'#000'}
        verticalSwipe={false}
        animateCardOpacity={true}
        stackSize={2}
        infinite
        cards={pacotes}
        renderCard={(card) => {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{ backgroundColor: 'white', width: '100%', height: '70%', borderRadius: 30, alignItems: 'center', padding: '10%', marginTop: '20%' }}>


                <View style={{ alignItems: 'center', flex: 1 }}>
                  <Text style={{ marginBottom: 15, fontSize: 22, color: '#000', fontWeight: 'bold' }}>{card.tipo}</Text>
                  <ProgressCircle
                    percent={calcPorcent(card.disponivel, card.total)}
                    radius={140}
                    borderWidth={10}
                    color="#32CD32"
                    shadowColor="#999"
                    bgColor="#fff"
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 60 }}>{card.disponivel}</Text>
                      <Text style={{ paddingTop: '17%' }}>{card.legenda}</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'Pacifico-Regular' }}>Disponiveis</Text>
                  </ProgressCircle>
                  <Text style={{ padding: 20 }}>de {card.total}{card.legenda}</Text>
                </View>
              </View>



            </SafeAreaView>
          )
        }}
      />

      <Text style={{ color: '#32CD32', marginTop: '5%' }}>Deslize para qualquer lado</Text>

      <View
        style={{
          marginTop: '2%',
          flexDirection: 'row',
          alignItems: 'center',
          width: '70%',

        }}>
        <Animatable.View
          animation="slideOutLeft"
          duration={1500}
          iterationCount={Infinity}
          useNativeDriver
          style={{ alignItems: 'center', flex: 1}}
        >
          <Feather name='arrow-left' size={25} color="green" />

        </Animatable.View>

        <Animatable.View
          animation="slideOutRight"
          duration={1500}
          iterationCount={Infinity}
          useNativeDriver
          style={{ alignItems: 'center', flex: 1 }}
        >
          <Feather name='arrow-right' size={25} color="green" />

        </Animatable.View>

      </View>
    </View>
  )
}

// calcular porcentagem da roda dados
function calcPorcent(disp, total) {
  const porcent = disp * 100 / total;
  //console.log(porcent)
  return porcent;
}



