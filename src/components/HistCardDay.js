import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import Forecast from './ForeCast';
import * as Animatable from 'react-native-animatable';

const mylist = [
  {date: '01/03/2020', data: '100', voice: '20'},
  {date: '02/03/2020', data: '120', voice: '23'},
  {date: '03/03/2020', data: '110', voice: '2'},
  {date: '04/03/2020', data: '180', voice: '60'},
];

export default function HistCardDay() {
  return (
    <Animatable.View animation="bounceInRight" duration={1500}>
      <FlatList
        horizontal={true}
        contentContainerStyle={{paddingBottom: '5%'}}
        data={mylist}
        keyExtractor={item => item.date}
        renderItem={({item}) => <Forecast data={item} />}
      />
    </Animatable.View>
  );
}
