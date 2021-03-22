import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import HistoryCard from '../components/HistoryCard';
import Topbar from '../components/TopBar';
import HistCardDay from '../components/HistCardDay';

export default function Hist({navigation}) {
  return (
    <SafeAreaView style={styles.safe}>
      <Topbar navigation={navigation} />

      <HistoryCard />
      <HistCardDay />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    alignItems: 'center',
    backgroundColor: 'black',

    flexDirection: 'column',
  },
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
