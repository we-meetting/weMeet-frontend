import { create } from 'zustand';

export interface MapKeywordStore {
  mapKeyword: string;
  setMapKeyword: (keyword: string) => void;
}

export const useMapKeywordStore = create<MapKeywordStore>((set) => ({
  mapKeyword: '서울 맛집',
  setMapKeyword: (mapKeyword) => {
    set({ mapKeyword: mapKeyword });
  },
}));
