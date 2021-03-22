import React, {useState, useCallback} from 'react';
import {showMessage} from 'react-native-flash-message';

import api from '../services/Flukenator';
import {validateEmail} from '../util/validacoes';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function LoginPage(props) {
  const [email, setEmail] = useState('');

  const autenticacao = useCallback(() => {
    if (!validateEmail(email)) {
      showMessage({type: 'danger', message: 'Digite um email válido'});
      return;
    }
    api.autenticacao(email);
    props.route.params.setLogin(true);
  }, [email, props.route.params]);

  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
      <Text style={styles.title}>Dark App</Text>
      </View>

      <View style={styles.container}>

        <TextInput
        style={styles.input}
          placeholder="Digite seu email"
          autoCorrect={false}
          onChangeText={setEmail}
        />

        <TouchableOpacity 
          style={styles.btnEnviar}
        onPress={autenticacao}>
          <Text style={styles.enviarText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    height: '30%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnEnviar: {
    backgroundColor: '#00FF00',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  enviarText: {
    color: 'black',
    fontSize: 18
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00FF00',
  }
});
/**
  * <View style={{paddingTop: '40%'}}>
      <Form>
        <Item>
          <Input
            placeholder="Digite seu email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"

          />
        </Item>
        <Button full onPress={autenticacao} style={{backgroundColor: '#00FF00'}}>
          <Text>Entrar</Text>
        </Button>
      </Form>
    </View>
  *
  *
  *
  */
