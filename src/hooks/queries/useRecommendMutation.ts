import { useMutation, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import { APIResponse, recommend, RecommendResponse, RecommendValues } from 'src/api';

export const useRecommendMutation = (): UseMutationResult<
  APIResponse<RecommendResponse[]>,
  AxiosError<APIResponse<void>>,
  RecommendValues
> => {
  return useMutation('useRecommendMutation', recommend, {
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });
};
