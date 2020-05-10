import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-portfolio-bfcde.firebaseio.com'
});

export default instance;