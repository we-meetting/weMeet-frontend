import { create } from 'zustand';

import { RecommendResponse } from 'src/api';

export interface RecommendStore {
  recommendData: RecommendResponse[];
  setRecommendData: (recommendData: RecommendResponse[]) => void;
}

export const useRecommendDataStore = create<RecommendStore>((set) => ({
  recommendData: [],
  setRecommendData: (recommendData) => {
    console.log(recommendData);
    set({ recommendData });
  },
}));
