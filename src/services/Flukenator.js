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

  getPacote = async () => {
    const response = await this.instance.get('/usage/packageInformation/', {
      headers: this.headers,
    });
    return response.data;
  };

  comprarAdicional = async (data, minutes) => {
    return await this.instance.post(
      '/usage/topupPurchase',
      {data, minutes},
      {
        headers: this.headers,
      },
    );
  };

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
