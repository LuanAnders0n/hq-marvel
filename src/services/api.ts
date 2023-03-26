import axios from 'axios';
import md5 from 'md5';

const publicKey = '2d4353f45e4aa13e4d2d528554375ce7';
const privateKey = '54b1503d369ef67f6af28c6518c919d7c967ed2f';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  method: 'get',
  params: {
    apikey: publicKey,
    ts,
    hash,
  },
});

export default api;
