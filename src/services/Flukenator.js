import axios from 'axios';

class Flukenator {
  constructor(baseURL) {
    this.instance = axios.create({baseURL});
    this.autenticacao();
  }

  /**
   * Define o email usado na autenticação das requisições
   * @param {String} email email do usuário
   */
  autenticacao = (email = 'example@email.com') => {
    this.email = email;
    this.headers = {
      Authorization: email,
    };
  };

  /**
   * Realiza o GET na api para trazer as informações do pacote assinado
   * @returns os dados do pacote assinado mensal
   */
  getPacote = async () => {
    const response = await this.instance.get('/usage/packageInformation/', {
      headers: this.headers,
    });
    return response.data;
  };

  /**
   * Realiza o POST para a api para compra de pacote adicional
   * @param {Number} data quantidade de dados adicionados
   * @param {Number} minutes  quantidade de minutos adicionados
   * @returns
   */
  comprarAdicional = async (data, minutes) => {
    return await this.instance.post(
      '/usage/topupPurchase',
      {data, minutes},
      {
        headers: this.headers,
      },
    );
  };

  /**
   * Realiza o GET na api para pegar o historico
   * @param {String} startDate Data de inicio da busca
   * @param {String} endDate Data de termino da busca
   * @returns os dados do historico buscado
   */
  getHistorico = async (startDate = '2020-03-01', endDate = '2020-03-05') => {
    const response = await this.instance.get(
      `/usage/records?startDate=${startDate}&endDate=${endDate}`,
      {
        headers: this.headers,
      },
    );
    return response.data;
  };
}

export default new Flukenator('https://flukenator.herokuapp.com/');
