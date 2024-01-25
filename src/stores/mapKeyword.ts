import { create } from 'zustand';

export interface MapKeywordState {
  mapKeyword: string;
  setMapKeyword: (keyword: string) => void;
}

export const useMapKeywordStore = create<MapKeywordState>((set) => ({
  mapKeyword: '서울 맛집',
  setMapKeyword: (mapKeyword) => {
    set({ mapKeyword });
  },
}));
