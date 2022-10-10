import axios from 'axios';

const instance = axios.create({
  baseURL: `https://etorqhp7q0.execute-api.ap-south-1.amazonaws.com/dev`
});

export default instance;