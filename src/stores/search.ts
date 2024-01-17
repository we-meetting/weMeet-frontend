import { create } from 'zustand';

import { SearchBarContentItem } from 'src/constants';

export interface SearchState {
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ' | '음식점, 카페' | '관광 명소, 놀이공원';
  dynamicTitle: '어디로 가시나요?' | '음식점 찾기' | '재밌는 체험 하기';
  setSubject: (subject: SearchBarContentItem['text']) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ',
  dynamicTitle: '어디로 가시나요?',
  setSubject: (subjet) => {
    switch (subjet) {
      case '전체 검색':
        set({
          dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ',
          dynamicTitle: '어디로 가시나요?',
        });
        break;
      case '맛집 검색':
        set({
          dynamicPlaceholder: '음식점, 카페',
          dynamicTitle: '음식점 찾기',
        });
        break;
      case '즐길 거리':
        set({
          dynamicPlaceholder: '관광 명소, 놀이공원',
          dynamicTitle: '재밌는 체험 하기',
        });
        break;
      default:
        break;
    }
  },
}));
