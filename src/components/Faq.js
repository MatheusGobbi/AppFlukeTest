import React, { Component } from "react";
import { Container, Header, Content, Accordion, Title,  Icon } from "native-base";
import { View, StyleSheet, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';



import Faqcast from './FaqCast';
import HistoryCard from './HistoryCard';
import Topbar from './TopBar';





const perguntas = [
  { title: "1. O que é o Fluke App?", content: "O Fluke App é o aplicativo da Fluke. É por lá que você vai pedir e ativar seu chip, comprar seu pacote e acompanhar seu consumo como e quando você quiser, sempre que você precisar. Nele também são feitas todas as alterações de pacote, compra de adicionais, pedido de portabilidade e chat com o time salva-vidas." },
  { title: "2. O aplicativo da Fluke pode ser usado em IPads ou Tablets?", content: "Nós já estamos trabalhando para que o nosso aplicativo possa ser instalado em IPads e Tablets. Mas, no momento, ele só pode ser instalado em celulares." },
  { title: "4. Como eu faço para baixar o aplicativo da Fluke?", content: "Para baixar o nosso aplicativo basta acessar o Google Play e Apple Store, buscar por Fluke App e fazer o download do aplicativo de forma totalmente gratuita." },
  { title: "5. Como eu acesso a minha conta da Fluke?", content: "Para acessar sua conta da Fluke basta abrir o aplicativo, clicar em já sou cliente, preencher os campos e-mail e senha e clicar em entrar. Pronto, você será direcionado para a página inicial do aplicativo." },
  { title: "6. Onde eu vejo o meu consumo de dados móveis?", content: "Para ver o seu consumo de dados móveis basta acessar o nosso aplicativo e, no menu inferior, clicar em início e, na parte superior, colocar meus dados. Nós iremos te mostrar um gráfico do seu saldo de dados móveis, no qual terá o quanto você consumiu e o quanto ainda tem disponível." },
  { title: "7. Onde eu vejo o meu saldo de ligações? ", content: "Para ver o seu saldo de ligações basta acessar o nosso aplicativo, no menu inferior, clicar em início e, na parte superior, colocar meus minutos. Nós iremos te mostrar um gráfico do seu saldo de minutos, no qual terá o quanto você consumiu e o quanto ainda tem disponível." },
  { title: "8. Como eu faço para comprar adicionais de dados móveis, minutos e SMS?", content: "Para comprar mais dados móveis, minutos e SMS basta acessar nosso aplicativo, no menu inferior clicar em início, selecionar meu pacote arrastando a tela para cima, clicar em + comprar mais, escolher a quantidade de dados móveis, minutos e SMS que você quiser e comprar :)" },
  { title: "9. Como eu edito os dados do meu cartão de crédito ou adiciono um novo?", content: "Para editar os dados do seu cartão de crédito você pode acessar o nosso aplicativo, ir em perfil no menu inferior, acessar forma de pagamento, clicar sobre o cartão que deseja editar e selecionar editar.Você terá a opção de cadastrar um novo cartão clicando em + novo cartão ou selecionar um cartão já cadastrado. Caso você queira utilizar um dos cartões cadastrados basta clicar sobre ele e selecionar usar cartão. Aliás, você não consegue excluir o cartão atual de pagamento, apenas alterá-lo. Você precisa ter algum tipo de pagamento disponível :)" },
  { title: "10. Como eu faço para alterar minha senha?", content: "Para alterar sua senha você pode acessar o nosso aplicativo, ir em perfil, acessar minha conta e clicar em alterar senha. Caso você tenha esquecido sua senha, ao logar no aplicativo, clicando em já sou cliente, aparecerá a opção esqueci minha senha. Basta clicar nela e seguir o passo-a-passo para cadastrar uma nova senha." },
  { title: "11. Ocorreu um erro com o meu aplicativo, o que eu faço?", content: "Caso você tenha percebido algum erro no seu app, basta chacoalhar o celular que a tela precisa de ajuda aparecerá. Lá você poderá informar qual erro ocorreu que o nosso Time Salva-Vidas irá entrar em contato para te ajudar a resolver." },
  { title: "12. Como eu entro em contato com o Time de Atendimento da Fluke pelo aplicativo?", content: "Caso você precise de ajuda do nosso Time Salva-Vidas basta acessar seu perfil, no menu inferior, ir em ajuda e clicar em novo chat, nós estaremos online para te ajudar com o que você precisar." },
  
];


export default function Faq() {

    return (
      <SafeAreaView style={styles.safe}>

      <View>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />

      
      </View>
     

      <View
       
      >
        <FlatList
          vertical={true}
          contentContainerStyle={{ paddingBottom: '5%' }}
          style={styles.list}
          data={perguntas}
          keyExtractor={item => item.title}
          renderItem={({ item }) => <Faqcast data={item} />}
        />

      </View>

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
    
  } ,
  list: {
    flexDirection: 'column',
    flex: 1
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