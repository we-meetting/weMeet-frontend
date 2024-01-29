import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: 'http://127.0.0.1:4000',
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    // CERTIFICATION
  },
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
