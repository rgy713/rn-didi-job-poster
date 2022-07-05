import axios from 'axios';
import env from '../../env';
      /*
   * Here we are creating common baseURL for all api's 
   * @author Didijobs <rgy713>
   */
const api = axios.create({
  baseURL: env.SERVER_URL,
});

api.interceptors.response.use(response => response.data);

export default api;
