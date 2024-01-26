import { create } from 'zustand';

import { RecommendResponse } from 'src/api';

export interface RecommendStore {
  recommend: RecommendResponse[] | null;
  setRecommend: (data: RecommendResponse[]) => void;
}

export const useRecommendStore = create<RecommendStore>((set) => ({
  recommend: null,
  setRecommend: (data) => {
    set({ recommend: data });
  },
}));
