import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: import.meta.env.VITE_BASEURL,
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  PROFILE: '/auth/@me',
  REFRESH: '/auth/silent',
  RECOMMEND: '/recommend',
  SEARCH: '/search',
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type APIResponseStatusType = 'SUCCESS' | 'FAILED';

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  message: string;
  result: T;
}
