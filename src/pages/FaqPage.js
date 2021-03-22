import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

import ListFaq from '../components/ListFaq';
import FaqText from '../util/FaqText';

export default function Faq({navigation}) {
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      </View>

      <ListFaq navigation={navigation} perguntas={FaqText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: '5%',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
});
