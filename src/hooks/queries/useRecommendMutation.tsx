import { useMutation, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import { APIResponse, recommend, RecommendResponse, RecommendValues } from 'src/api';
import { useRecommendStore } from 'src/stores';

export const useRecommendMutation = (): UseMutationResult<
  APIResponse<RecommendResponse>,
  AxiosError<APIResponse<void>>,
  RecommendValues
> => {
  const { setRecommend: setData } = useRecommendStore();
  return useMutation('useRecommendMutation', recommend, {
    onSuccess: (data) => {
      setData(data.result);
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
      console.log(error);
    },
  });
};
