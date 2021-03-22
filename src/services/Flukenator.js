import axios from 'axios';

class Flukenator {
  constructor(baseURL) {
    this.instance = axios.create({baseURL});
    this.autenticacao();
  }
  autenticacao = (email = 'example@email.com') => {
    this.headers = {
      Authorization: 'Bearer ' + email,
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
