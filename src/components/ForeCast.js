import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Forecast({data}) {
  return (
    <View style={styles.container}>
      <Text>{data.date}</Text>
      <Icon name="at" size={23} color="red" />
      <Text>{data.data} mb</Text>

      <Feather name="phone-call" size={23} color="red" />
      <Text>{data.voice} min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 12,
    marginTop: '10%',
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '35%',
    elevation: 3,
    shadowColor: '#000',
  },
  texto: {},
});
