import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Faqcast from './FaqCast';

export default function ListFaq({navigation, perguntas}) {
  return (
    <View>
      <FlatList
        vertical={true}
        contentContainerStyle={{paddingBottom: '5%'}}
        style={styles.list}
        data={perguntas}
        keyExtractor={item => item.title}
        renderItem={({item}) => <Faqcast data={item} navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    flex: 1,
  },
});
