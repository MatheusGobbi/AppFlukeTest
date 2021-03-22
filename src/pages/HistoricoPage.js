import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';

import HistoryCard from '../components/HistoryCard';
import Topbar from '../components/TopBar';
import HistCardDay from '../components/HistCardDay';
import {BarChart} from 'react-native-chart-kit';
import api from '../services/Flukenator';

// TODO: Data picker https://www.npmjs.com/package/react-native-daterange-picker

export default function HistoricoPage({navigation}) {
  // const data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data: [20, 45, 28, 80, 99, 43],
  //     },
  //   ],
  //  };

  const [data, setData] = useState({
    labels: [],
    datasets: [{data: []}],
  });

  const getHistorico = useCallback(
    (startDate = '2020-03-01', endDate = '2020-03-05') => {
      api.getHistorico(startDate, endDate).then(historico => {
        let newData = {
          labels: [],
          datasets: [{data: []}],
        };
        for (const item of historico) {
          newData.labels.push(
            item.date.split('-')[2] + '/' + item.date.split('-')[1],
          );
          newData.datasets[0].data.push(item.data / 1048576);
        }
        setData(newData);
      });
    },
    [],
  );

  useEffect(() => {
    getHistorico();
  }, [getHistorico]);

  return (
    <SafeAreaView style={styles.safe}>
      <Topbar navigation={navigation} />

      <BarChart
        // style={graphStyle}
        data={data}
        width={Dimensions.get('window').width}
        height={300}
        yAxisLabel="MB "
        fromZero
        chartConfig={{
          backgroundColor: 'blue',
          backgroundGradientFrom: 'green',
          backgroundGradientTo: 'black',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 100) => `rgba(255, 255, 255, ${opacity})`,
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
