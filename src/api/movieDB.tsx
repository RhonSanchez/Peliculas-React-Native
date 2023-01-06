import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '640abdd34fcffb38d10ba15fc90f5830',
    language: 'es-ES',
  },
});

export default movieDB;
