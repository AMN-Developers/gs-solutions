import axios from 'axios';

export const rastreioApi = axios.create({
  baseURL: 'https://ssw.inf.br/api/',
});

export const baseApi = axios.create({
  baseURL: '/api/',
});