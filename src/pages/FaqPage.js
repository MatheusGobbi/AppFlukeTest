import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';



import ListFaq from '../components/ListFaq';



export default function Faq({navigation}) {

  return (
    <SafeAreaView style={styles.safe}>

      <View>
        <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      </View>

      <ListFaq navigation={navigation}/>

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

  }
});

/*

 <View>

      <Header transparent />

        <Accordion
          dataArray={perguntas}
          icon="add"
          expandedIcon="remove"
          iconStyle={{ color: "green" }}
          expandedIconStyle={{ color: "red" }}
          expanded={[0]}
        />
      </View>
*/