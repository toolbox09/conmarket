import axios from 'axios';


export function createChubApi() {
  return axios.create({ baseURL : import.meta.env.VITE_CHUB_API_URL });
}