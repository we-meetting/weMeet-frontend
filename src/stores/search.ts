import { create } from 'zustand';

export enum SearchSubject {
  All = '전체 검색',
  Restaurants = '맛집 검색',
  Attractions = '즐길 거리',
}

export interface SearchState {
  subject: SearchSubject;
  setSubject: (subject: SearchSubject) => void;
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ' | '음식점, 카페' | '관광 명소, 놀이공원';
}

export const useSearchStore = create<SearchState>((set) => ({
  subject: SearchSubject.All,
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ',
  setSubject: (subject) => set({ subject }),
}));
