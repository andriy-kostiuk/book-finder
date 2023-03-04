import axios from 'axios';

const apiKey = 'AIzaSyAYD9P_9NtMWGqmI470KhX00EqAdFLp2Fc';


const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

booksApi.interceptors.request.use((config) => {
  const apiKey = process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY;
  config.url += `&key=${apiKey}`;
  return config;
});

export default booksApi;
