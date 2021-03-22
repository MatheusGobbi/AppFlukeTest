import React, {useState, useCallback} from 'react';
import {showMessage} from 'react-native-flash-message';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';
import api from '../services/Flukenator';
import {validateEmail} from '../util/validacoes';

export default function LoginPage(props) {
  const [email, setEmail] = useState('');

  const autenticacao = useCallback(() => {
    // TODO: Validar email antes de continuar aqui pq se for invalido dá ruim na API
    if (!validateEmail(email)) {
      showMessage({type: 'danger', message: 'e ai tio'});
      return;
    }
    api.autenticacao(email);
    props.route.params.setLogin(true);
  }, [email, props.route.params]);

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Digite seu email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
          </Item>
          <Button full onPress={autenticacao}>
            <Text>Entrar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
