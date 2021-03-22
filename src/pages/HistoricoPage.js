import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, SafeAreaView, Dimensions, Text, View} from 'react-native';
import {DatePicker} from 'native-base';

import Topbar from '../components/TopBar';
import {BarChart} from 'react-native-chart-kit';
import api from '../services/Flukenator';

import DateTimePicker from '@react-native-community/datetimepicker';
// TODO: Data picker https://www.npmjs.com/package/react-native-daterange-picker

export default function HistoricoPage({navigation}) {
  const [data, setData] = useState({
    labels: [],
    datasets: [{data: []}],
  });

  const [voice, setVoice] = useState({
    labels: [],
    datasets: [{data: []}],
  });

  const getHistorico = useCallback(
    (startDate = '2020-08-01', endDate = '2020-08-05') => {
      api.getHistorico(startDate, endDate).then(historico => {
        let newData = {
          labels: [],
          datasets: [{data: []}],
        };
        let newVoice = {
          labels: [],
          datasets: [{data: []}],
        };
        for (const item of historico) {
          newData.labels.push(
            item.date.split('-')[2] + '/' + item.date.split('-')[1],
          );
          newData.datasets[0].data.push(item.data / 1048576);
          newVoice.labels.push(
            item.date.split('-')[2] + '/' + item.date.split('-')[1],
          );
          newVoice.datasets[0].data.push(item.voice / 60);
        }
        setData(newData);
        setVoice(newVoice);
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

      <Text style={{color: 'white'}}> Dados</Text>

      <View style={styles.grafico}>
        <BarChart
          // style={graphStyle}
          data={data}
          width={Dimensions.get('window').width}
          height={250}
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
          verticalLabelRotation={0}
        />
      </View>

      <Text style={{color: 'white'}}> Minutos</Text>

      <View style={styles.grafico}>
        <BarChart
          // style={graphStyle}
          data={voice}
          width={Dimensions.get('window').width}
          height={250}
          yAxisLabel="MIN "
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
          verticalLabelRotation={0}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '3%',
    flexDirection: 'column',
    flex: 1,
  },
  grafico: {
    padding: 20,
  },
});

/*

 const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    console.log(date);
  };
  const showDatepicker = () => {
    setShow(true);
  };



 <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}



*/
