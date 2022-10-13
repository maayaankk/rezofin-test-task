import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://etorqhp7q0.execute-api.ap-south-1.amazonaws.com/dev'
});

export default instance;

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';