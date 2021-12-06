import axios from 'axios'

const api = axios.create({
  baseURL: 'https://voliveira.s3-sa-east-1.amazonaws.com/'
});


export default api;