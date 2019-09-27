import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sleepy-wave-47093.herokuapp.com/',
});

export default api;
