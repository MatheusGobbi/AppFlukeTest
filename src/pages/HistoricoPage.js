import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, SafeAreaView, Dimensions, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Topbar from '../components/TopBar';
import {BarChart} from 'react-native-chart-kit';
import api from '../services/Flukenator';

import DatePicker from 'react-native-datepicker';

export default function HistoricoPage({navigation}) {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const changeDateInit = valor => {
    setDataInicio(valor);
  };

  const changeDateEnd = valor => {
    setDataFim(valor);
  };

  const [data, setData] = useState({
    labels: [],
    datasets: [{data: []}],
  });

  const [voice, setVoice] = useState({
    labels: [],
    datasets: [{data: []}],
  });

  const getHistorico = useCallback((startDate, endDate) => {
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
  }, []);

  useEffect(() => {
    getHistorico(dataInicio, dataFim);
  }, [getHistorico, dataInicio, dataFim]);

  return (
    <SafeAreaView style={styles.safe}>
      <Topbar navigation={navigation} />

      <Text style={{color: 'white', fontSize: 20}}> Dados</Text>

      <View style={styles.grafico}>
        <BarChart
          data={data}
          width={Dimensions.get('window').width}
          height={0.53 * Dimensions.get('window').width}
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

      <Text style={{color: 'white', fontSize: 20}}> Minutos</Text>

      <View style={styles.grafico}>
        <BarChart
          data={voice}
          width={Dimensions.get('window').width}
          height={0.53 * Dimensions.get('window').width}
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

      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{color: 'white'}}>Data inicio</Text>
          <DatePicker
            minDate={'2020-02-28'}
            maxDate={'2020-08-21'}
            format="YYYY-MM-DD"
            placeholder="Selecione uma data"
            style={styles.date}
            date={dataInicio}
            onDateChange={changeDateInit}
            iconComponent={
              <Feather
                name="calendar"
                size={30}
                color="white"
                style={{padding: 5}}
              />
            }
          />
        </View>
        <View>
          <Text style={{color: 'white'}}>Data fim</Text>
          <DatePicker
            minDate={dataInicio}
            maxDate={'2020-08-21'}
            format="YYYY-MM-DD"
            placeholder="Selecione uma data"
            style={styles.date}
            date={dataFim}
            onDateChange={changeDateEnd}
            iconComponent={
              <Feather
                name="calendar"
                size={30}
                color="white"
                style={{padding: 5}}
              />
            }
          />
        </View>
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
