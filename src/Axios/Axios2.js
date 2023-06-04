import axios from 'axios';
const _token = localStorage.getItem('user');
const axiosinstance2 = axios.create({
  baseURL: 'https://company-server-svea.onrender.com/api',
  headers: {
    authorization: _token ? _token : '',
    'Access-Control-Allow-Origin': '*',
  },
});
export default axiosinstance2;
