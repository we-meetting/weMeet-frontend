import { create } from 'zustand';

export interface MapKeywordState {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const useMapKeywordStore = create<MapKeywordState>((set) => ({
  keyword: '서울 맛집',
  setKeyword: (mapKeyword) => {
    set({ keyword: mapKeyword });
  },
}));
