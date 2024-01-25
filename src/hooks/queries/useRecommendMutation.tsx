import { useMutation, UseMutationResult } from 'react-query';

import { AxiosError } from 'axios';

import { APIResponse, recommend, RecommendResponse, RecommendValues } from 'src/api';
import { useRecommendStore } from 'src/stores';

export const useRecommendMutation = (): UseMutationResult<
  APIResponse<RecommendResponse>,
  AxiosError<APIResponse<void>>,
  RecommendValues
> => {
  const { setData } = useRecommendStore();
  return useMutation('useRecommendMutation', recommend, {
    onSuccess: (data) => {
      setData(data.result);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
