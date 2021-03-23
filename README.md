# AppFlukeTest

O objetivo é o desenvolvimento de uma aplicação para consultar o consumo instantâneo, verificar o histórico de consumo, comprar pacotes adicionais e tirar dúvidas numa tela de ajuda com dúvidas frequentes. 
App desenvolvido no processo seletivo da Fluke Operadora. 


## Modo de uso
Ao abrir o App será direcionado para a tela de autenticação, onde é requerido apenas um email, passando pela autenticação aparecerá um pequeno tutorial de como usar o App.
Após o tutorial chegamos a tela inicial, onde existem 3 abas para navegar dentro do aplicativo, a esquerda para o histórico e a direita para o pacote. Nas telas principais existe um icone de "?" que quando clicado leva para a página de Faq, onde estão as perguntas frequentes sobre o App da fluke.

### Autenticação 
![Autenticação](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Login.PNG)
Primeiro foi criado uma autenticação, passando um email que será usado para as requisições, isso faz com que possa ser feito testes com emails diferentes, recebendo dados diferente.


### Tutorial
![Tutorial](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Tutorial.PNG)

Logo após a autenticação o usuário é levado para um pequeno tutorial de como usar o aplicativo.


### Página inicial
Terminado esse tutorial é liberado o acesso ao aplicativo na página inicial. Existem tres telas em abas com legenda apropriada.
![Pagina inicial](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Home.png)

Na página inicial se encontra o consumo instantâneo de Dados e Minutos do usuário, passando o dedo para o lado o consumo em foco muda(Dados e Minutos).


### Histórico de consumo
![Historico](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Historico.png)
Na aba da esquerda fica a página de histórico de consumo, onde é selecionado a data de inicio e a data final em que deseja fazer a busca, e o histórico é renderizado dentro de dois gráficos, um para Dados e outro para minutos.


### Pacote
![Pacote](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Pacote.png)
Na aba da direita fica a página do pacote, onde é exibido o pacote mensal contratado, e onde é possivel realizar a compra de pacotes adicionais.


### FAQ
![FAQ](https://github.com/MatheusGobbi/AppFlukeTest/blob/main/src/assets/Faq.png)
Nas tres abas existe um icone "?" que quando clicado leva para uma tela com as perguntas frequentes sobre o App da Fluke, basta clicar na pergunta que a resposta aparecerá na tela.
