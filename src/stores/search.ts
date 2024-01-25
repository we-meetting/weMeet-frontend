import { create } from 'zustand';

import { SearchBarContentItem } from 'src/constants';

export interface SearchSubjectState {
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ' | '음식점, 카페' | '관광 명소, 놀이공원';
  dynamicTitle: '어디로 가시나요?' | '음식점 찾기' | '재밌는 체험 하기';
  setSubject: (subject: SearchBarContentItem['text']) => void;
}

export const useSearchSubjectStore = create<SearchSubjectState>((set) => ({
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ',
  dynamicTitle: '어디로 가시나요?',
  setSubject: (subject) => {
    switch (subject) {
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

export interface SearchHistoryState {
  searchHistory: string[];
  setSearchHistory: (searchHistory: string) => void;
  getSearchHistory: () => void;
}

export const useSearchHistoryStore = create<SearchHistoryState>((set) => ({
  searchHistory: [],
  setSearchHistory: (searchHistory) => {
    set((state) => ({
      searchHistory: [...state.searchHistory, searchHistory],
    }));
    localStorage.setItem(
      'searchHistory',
      JSON.stringify([
        ...new Set([searchHistory, ...(useSearchHistoryStore.getState().searchHistory ?? [])]),
      ]),
    );
    localStorage.setItem(
      'searchHistory',
      JSON.stringify(
        useSearchHistoryStore
          .getState()
          .searchHistory.slice(
            useSearchHistoryStore.getState().searchHistory.length - 5,
            useSearchHistoryStore.getState().searchHistory.length,
          ),
      ),
    );
  },
  getSearchHistory: () => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      set((state) => ({
        searchHistory: [...state.searchHistory, ...JSON.parse(history)],
      }));
    }
    set((state) => ({
      searchHistory: [...state.searchHistory],
    }));
  },
}));

export interface SearchBarModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useSearchBarModalStore = create<SearchBarModalState>((set) => ({
  isModalOpen: false,
  openModal: () => {
    set({
      isModalOpen: true,
    });
  },
  closeModal: () => {
    set({
      isModalOpen: false,
    });
  },
}));

export const useSearchBarStore = Object.assign(useSearchSubjectStore, {
  subject: useSearchSubjectStore,
  history: useSearchHistoryStore,
  modal: useSearchBarModalStore,
});
