/* eslint-disable no-param-reassign */
import axios from 'axios';
import env from '../../env';
import sInfoUtil from '../utils/sInfo.util';
import ApiErrorEnum from './apiError.enum';
import AuthenticationApi from './services/authentication.api';
      /*
   * This file return secure axios instance
   * @author Didijobs <rgy713>
   */
const securedApi = axios.create({
  baseURL: env.SERVER_URL,
});

const setJwt = async config => {
  const jwt = await sInfoUtil.fetch('JWT');
  if (jwt) {
    // eslint-disable-next-line dot-notation
    config.headers['Authorization'] = `Bearer ${jwt}`;
    return Promise.resolve(config);
  }
  return Promise.reject();
};

securedApi.interceptors.request.use(
  config => setJwt(config),
  error => {
    Promise.reject(error);
  },
);

securedApi.interceptors.response.use(
  response => response.data,
  error => {
    const originalRequest = error.config;

    // TODO: Ideally should be 401, but spring security overrides on token expiry...not urgent
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      return new AuthenticationApi()
        .refreshToken()
        .then(() => securedApi(originalRequest));
    }
    if (error.message === 'Network Error' && !error.response) {
      error.code = ApiErrorEnum.SERVER_UNREACHABLE;
    } else if (
      error.response?.status === 403 ||
      error.response?.status === 401
    ) {
      error.code = ApiErrorEnum.SECURITY_ERROR;
    } else if (error.response?.status === 404) {
      error.code = ApiErrorEnum.RESOURCE_NOT_FOUND_ERROR;
    } else {
      error.code = ApiErrorEnum.SERVER_ERROR;
    }
    return Promise.reject(error);
  },
);

export default securedApi;
