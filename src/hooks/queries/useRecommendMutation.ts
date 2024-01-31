import { useMutation, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import { APIResponse, recommend, RecommendResponse, RecommendValues } from 'src/api';
import { useRecommendDataStore } from 'src/stores';

export const useRecommendMutation = (): UseMutationResult<
  APIResponse<RecommendResponse[]>,
  AxiosError<APIResponse<void>>,
  RecommendValues
> => {
  const { setRecommendData } = useRecommendDataStore();
  return useMutation('useRecommendMutation', recommend, {
    onSuccess: ({ result }) => {
      setRecommendData(result);
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
