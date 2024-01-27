import { UseQueryResult, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import { APIResponse, SearchValue, SearchResponse, search } from 'src/api';

export const useSearchQuery = ({
  keyword,
  enabled,
}: SearchValue): UseQueryResult<APIResponse<SearchResponse[]>, AxiosError<APIResponse<void>>> => {
  return useQuery(['useSearchQuery', keyword], () => search({ keyword }), {
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
    enabled,
    staleTime: 6 * 10 * 1000,
    cacheTime: 6 * 10 * 1000,
  });
};
