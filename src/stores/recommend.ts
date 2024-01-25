import { create } from 'zustand';

import { RecommendResponse } from 'src/api';

export interface RecommendState {
  data: RecommendResponse[] | null;
  setData: (data: RecommendResponse[]) => void;
}

export const useRecommendStore = create<RecommendState>((set) => ({
  data: null,
  setData: (data) => {
    set({ data });
  },
}));
