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
}
export default new Flukenator('https://flukenator.herokuapp.com/');
