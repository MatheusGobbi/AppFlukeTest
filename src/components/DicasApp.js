import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import * as Animatable from 'react-native-animatable';

//itens que serão renderizados com as dicas
const slides = [
  {
    key: '1',
    title: 'Agora que entrou no App vamos as dicas',
    text: 'Vamos passar por algumas dicas de como usar o Aplicativo!',
    image: require('../assets/celApp.png'),
  },
  {
    key: '2',
    title: 'Essa é a Página inicial',
    text:
      'Nela aparece seu consumo instantâneo de Dados e Minutos, basta deslizar o dedo para a direita ou esquerda que o próximo card será mostrado!',
    image: require('../assets/Home.png'),
  },
  {
    key: '3',
    title: 'Essa é a Página de pacotes ',
    text:
      'Nela é possível conferir o pacote mensal assinado e também comprar Dados e Minutos adicionais, apenas deslizando o modal para cima!',
    image: require('../assets/Pacote.png'),
  },
  {
    key: '4',
    title: 'Tire suas dúvidas sobre o App da fluke',
    text:
      'Clicando no icone no canto superior direito você será levado para uma página onde estão as dúvidas frequentes sobre o App da fluke, clicando na pergunta você receberá a resposta!',
    image: require('../assets/Faq.png'),
  },
];

//Renderizando os itens do slide
function renderSlides({item}) {
  return (
    <View style={styles.imageView}>
      <Animatable.Image
        animation="bounceInDown"
        duration={1500}
        source={item.image}
        style={{resizeMode: 'center', height: '70%', width: '100%'}}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

export default function Dicas(props) {
  return (
    <AppIntroSlider
      backgroundColor={'white'}
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{backgroundColor: '#32CD32', width: 30}}
      renderNextButton={() => <Text>Próximo</Text>}
      renderDoneButton={() => <Text>Acessar</Text>}
      onDone={() => props.route.params.setTutorial(true)}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#32CD32',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#B5B5B5',
    paddingHorizontal: 25,
    fontSize: 15,
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
});
