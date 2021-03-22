import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';

import HistoryCard from '../components/HistoryCard';
import Topbar from '../components/TopBar';
import HistCardDay from '../components/HistCardDay';
import {BarChart} from 'react-native-chart-kit';
import api from '../services/Flukenator';

// TODO: Data picker https://www.npmjs.com/package/react-native-daterange-picker

const INITIAL_DATA = {
  labels: [],
  datasets: [{data: []}],
};

export default function HistoricoPage({navigation}) {
  // const data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data: [20, 45, 28, 80, 99, 43],
  //     },
  //   ],
  //  };

  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    api.getHistorico().then(historico => {
      const newData = INITIAL_DATA;
      for (const item of historico) {
        newData.labels.push(item.date);
        newData.datasets[0].data.push(item.data / 1048576);
      }
      setData(newData);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <Topbar navigation={navigation} />

      <BarChart
        // style={graphStyle}
        data={data}
        width={Dimensions.get('screen').width}
        height={300}
        yAxisLabel="MB"
        chartConfig={{
          backgroundColor: 'blue',
          // backgroundGradientFrom: '#fb8c00',
          //backgroundGradientTo: 'red',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        verticalLabelRotation={30}
      />
      {/*
          <HistoryCard />
          <HistCardDay />

        */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '3%',
    flexDirection: 'column',
  },
});
