import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const baseURL = 'https://developer-ourbase-camp.com/daja/public/api/';
const imageUrl = 'https://developer-ourbase-camp.com/daja/public/';
const getDistanceApi = (apiKey, origin, destination) =>
  `https://maps.googleapis.com/maps/api/distancematrix/json?key=${apiKey}&origins=${origin}&destinations=${destination}`;
let Instance = Axios.create({
  baseURL,
});
Instance.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  // err => {
  //   console.warn('err', err);
  //   const isConn = NetInfo.addEventListener(state => {
  //     return state.isConnected;
  //   });
  //   isConn ? null : alert('Connection Error');
  // },
);
export default Instance;
export {baseURL, imageUrl, getDistanceApi};
