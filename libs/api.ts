import axios from 'axios';

export const rastreioApi = axios.create({
  baseURL: 'https://ssw.inf.br/api/',
});

export const baseApi = axios.create({
  baseURL: '/api/',
});

export const wpApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`
})