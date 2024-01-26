import { API_SUFFIX, instance } from './api';

export interface SearchResponse {
  info: {
    title: string;
    link: string;
    category: string;
    description: string;
    telephone: string;
    address: string;
    roadAddress: string;
    mapx: string;
    mapy: string;
  };
  image: {
    title: string;
    link: string;
    thumbnail: string;
    sizeheight: string;
    sizewidth: string;
  };
}

export interface SearchValue {
  keyword: string;
  enabled?: boolean;
}

export const search = async ({ keyword }: SearchValue) => {
  return await instance.get(`${API_SUFFIX.SEARCH}/?keyword=${keyword}`).then((res) => res.data);
};
