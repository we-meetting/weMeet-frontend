import { API_SUFFIX, instance } from './api';

export interface RecommendValues {
  city: string;
  district: string;
  region: string;
  isTodo: boolean;
}
export interface RecommendResponse {
  name: string;
  location: string;
}

export const recommend = async (values: RecommendValues) => {
  return await instance.post(API_SUFFIX.RECOMMEND, values).then((res) => res.data);
};
