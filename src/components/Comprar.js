import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconr from 'react-native-vector-icons/FontAwesome';
import Forecast from './ForeCast';
import HistoryCard from './HistoryCard';
import Topbar from './TopBar';

import * as Animatable from 'react-native-animatable';

const mylist = [
  { "date": "01/03/2020", "data": "100", "voice": "20" },
  { "date": "02/03/2020", "data": "120", "voice": "23" },
  { "date": "03/03/2020", "data": "110", "voice": "2" },
  { "date": "04/03/2020", "data": "180", "voice": "60" }
]

export default function Hist() {
  return (


    <SafeAreaView style={styles.safe}>

      <Topbar />
      <HistoryCard />

      <Animatable.View
       animation="bounceInRight"
       duration={1500}
      >
        <FlatList
          horizontal={true}
          contentContainerStyle={{ paddingBottom: '5%' }}
          style={styles.list}
          data={mylist}
          keyExtractor={item => item.date}
          renderItem={({ item }) => <Forecast data={item} />}
        />

      </Animatable.View>

    </SafeAreaView>

  )
}


const styles = StyleSheet.create({

  safe: {
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: '5%',
    flexDirection: 'column'
  },
  days: {
    height: '30%',

  }
});





























/*import React from 'react';
import {Text} from 'react-native-svg';

import {PieChart} from 'react-native-svg-charts';

export default function Pizza() {
  const data = [10, 10, 10, 15, 85, 91, 35, 53, 24, 50];

  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: (
        '#' +
        ((Math.random() * 0xffffff) << 0).toString(16) +
        '000000'
      ).slice(0, 7),
    },
  }));

  const Labels = ({slices}) => {
    return slices.map((slice, index) => {
      const {pieCentroid, data} = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="black"
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          strokeWidth={0.2}>
          {data.value}
        </Text>
      );
    });
  };

  return (
    <PieChart style={{height: 500}} data={pieData}>
      <Labels />
    </PieChart>
  );
}*/













/*
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'


export default function Comprar() {
    const fill = 'rgb(134, 65, 244)'
    const data = [50, 10, 40, 95]

    return (

            <BarChart style={{ height: 200, alignItems: 'center', position: 'relative' }} data={data} svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }} spacingInner={0.1} spacingOuter={1}>
                <Grid />
            </BarChart>

    )
}*/