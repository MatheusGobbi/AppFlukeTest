import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
  } from 'react-native';

  import AppIntroSlider from 'react-native-app-intro-slider';
  import Navegacao from './Navegation';

  //itens que serão renderizados com as dicas
  const slides = [
    { 
      key: '1',
      title: 'Aprenda a mexer no app',
      text: 'aaaaaaaa dasdasdas dasda dasd dasdasd dasdasdasdas dasdasdas  dadadfadf',
      image: require('../assets/celApp.png')
    },
    { 
      key: '2',
      title: 'Essa tela faz algo',
      text: 'aaaaaaaa dasdasdas dasda dasd dasdasd dasdasd matheus govvi sia ldaidan',
      image: require('../assets/img2.png')
    }
  ];

  //Renderizando os itens do slide
  function renderSlides({ item }) {
    return(
      <View style={{flex: 1,  alignItems: 'center', position: 'relative', borderWidth: 3}}>
        <Image
          source={item.image}
          style={{ resizeMode: 'center', height: '70%', width: '100%'}}
        />
        <Text 
        style={{
          paddingTop: 25, 
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: 'bold',
          color: '#009CFF',
          textAlign: 'center'
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#B5B5B5',
            paddingHorizontal: 25,
            fontSize: 15
          }} >
          {item.text}
        </Text>
      </View>
    )
  }

  export default function Dicas( { navigation } ) {
    
      return (
         
         <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{backgroundColor: '#009CFF', width: 30}}
            renderNextButton={() => <Text>Próximo</Text> }
            renderDoneButton={ () => <Text>Acessar</Text>}
            onDone={ () => navigation.navigate('Navegacao')}
         />
        
        );
    
  }


