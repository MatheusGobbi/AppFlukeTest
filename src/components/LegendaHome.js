import React from 'react';
import { View, Text, SafeAreaView, SafeAreaViewBase } from 'react-native';

import ProgressCircle from 'react-native-progress-circle';

import Swiper from 'react-native-deck-swiper';
import { Button, DeckSwiper } from 'native-base';

import Topbar from './TopBar';

import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';

export default function LegendaHome() {
    return(
        <View
        style={{
            flex: 1,
            alignItems: 'center',
            
          }}
        >
        
        <Text style={{ color: '#32CD32', marginTop: '5%'}}>Deslize para qualquer lado</Text>

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