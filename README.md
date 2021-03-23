# AppFlukeTest

O objetivo é o desenvolvimento de uma aplicação para consultar o consumo instantâneo, verificar o histórico de consumo, comprar pacotes adicionais e tirar dúvidas numa tela de ajuda com dúvidas frequentes. 
App desenvolvido no processo seletivo da Fluke Operadora. 


## Modo de uso
Primeiro foi criado uma autenticação, passando um email que será usado para as requisições, isso faz com que possa ser feito testes com emails diferentes, recebendo dados diferente.
Logo após a autenticação o usuário é levado para um pequeno tutorial de como usar o aplicativo.
Terminado esse tutorial é liberado o acesso ao aplicativo na página inicial. Existem tres telas em abas com legenda apropriada.
Na página inicial se encontra o consumo instantâneo de Dados e Minutos do usuário, passando o dedo para o lado o consumo em foco muda(Dados e Minutos).
Na aba da esquerda fica a página de histórico de consumo, onde é selecionado a data de inicio e a data final em que deseja fazer a busca, e o histórico é renderizado dentro de dois gráficos, um para Dados e outro para minutos.
Na aba da direita fica a página do pacote, onde é exibido o pacote mensal contratado, e onde é possivel realizar a compra de pacotes adicionais.
Nas tres abas existe um icone "?" que quando clicado leva para uma tela com as perguntas frequentes sobre o App da Fluke, basta clicar na pergunta que a resposta aparecerá na tela.
