# AppFlukeTest

O objetivo é o desenvolvimento de uma aplicação para consultar o consumo instantâneo, verificar o histórico de consumo, comprar pacotes adicionais e tirar dúvidas numa tela de ajuda com dúvidas frequentes. 
App desenvolvido no processo seletivo da Fluke Operadora. 

## Instalação 
- Clone o repositório em seu computador
- Na pasta do projeto pelo terminal execute os seguintes comandos `yarn && yarn start` e `yarn run android`

## Modo de uso
1. Ao abrir o App será direcionado para a tela de autenticação, onde é requerido apenas um email.
2. Passando pela autenticação aparecerá um pequeno tutorial de como usar o App.
3. Após o tutorial chegamos a tela inicial, onde existem 3 abas inferiores para navegar dentro do aplicativo.
4. A primeira aba (lado esquerdo esquerda) para o histórico
5. A segunda aba (central) para o seu saldo
6. A terceira aba (lado direito) para o pacote e adicionais.
7. Nas telas principais existe um icone com um ponto de interrogação "?" que quando clicado leva para a página de Faq, onde estão as perguntas frequentes sobre o App da fluke.


### Autenticação 
Primeiro foi criado uma autenticação, passando um email que será usado para as requisições, isso faz com que possa ser feito testes com emails diferentes, recebendo dados diferente.

![Autenticação](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Login.PNG)


### Tutorial
Logo após a autenticação o usuário é levado para um pequeno tutorial de como usar o aplicativo.

![Tutorial](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Tutorial.PNG)


### Página inicial
Terminado esse tutorial é liberado o acesso ao aplicativo na página inicial. Existem tres telas em abas com legenda apropriada.
Na página inicial se encontra o consumo instantâneo de Dados e Minutos do usuário, passando o dedo para o lado o consumo em foco muda (Dados e Minutos).

![Pagina inicial](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Home.png)


### Histórico de consumo
Na aba da esquerda fica a página de histórico de consumo, onde é selecionado a data de inicio e a data final em que deseja fazer a busca, e o histórico é renderizado dentro de dois gráficos, um para Dados e outro para minutos.

![Historico](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Historico.png)


### Pacote
Na aba da direita fica a página do pacote, onde é exibido o pacote mensal contratado, e onde é possivel realizar a compra de pacotes adicionais.

![Pacote](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Pacote.png)


### FAQ
Nas tres abas existe um icone "?" que quando clicado leva para uma tela com as perguntas frequentes sobre o App da Fluke, basta clicar na pergunta que a resposta aparecerá na tela.

![FAQ](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Faq.png)

