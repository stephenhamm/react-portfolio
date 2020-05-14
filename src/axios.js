import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://react-portfolio-bfcde.firebaseio.com'
});

export default Instance;