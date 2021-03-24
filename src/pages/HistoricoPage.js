import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Topbar from '../components/TopBar';
import api from '../services/Flukenator';

import DatePicker from 'react-native-datepicker';
import Grafico from '../components/Grafico';

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

  const iconeCalendario = useMemo(
    () => (
      <Feather name="calendar" size={30} color="white" style={{padding: 5}} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <Topbar navigation={navigation} />

      <Text style={styles.title}> Dados</Text>

      <Grafico dados={data} unidade="MB" />

      <Text style={styles.title}> Minutos</Text>

      <Grafico dados={voice} unidade="MIN" />

      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{color: 'white'}}>Data inicio</Text>
          <DatePicker
            minDate={'2020-02-28'}
            maxDate={'2020-08-21'}
            format="YYYY-MM-DD"
            placeholder="Selecione uma data"
            date={dataInicio}
            onDateChange={changeDateInit}
            iconComponent={iconeCalendario}
          />
        </View>
        <View>
          <Text style={{color: 'white'}}>Data fim</Text>
          <DatePicker
            minDate={dataInicio}
            maxDate={'2020-08-21'}
            format="YYYY-MM-DD"
            placeholder="Selecione uma data"
            date={dataFim}
            onDateChange={changeDateEnd}
            iconComponent={iconeCalendario}
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
  title: {
    color: 'white',
    fontSize: 20,
  },
});
