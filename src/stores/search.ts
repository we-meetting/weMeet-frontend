import { create } from 'zustand';

import { SearchBarContentItem } from 'src/constants';

export interface SearchSubjectStore {
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ' | '음식점, 카페' | '관광 명소, 놀이공원';
  dynamicTitle: '어디로 가시나요?' | '음식점 찾기' | '재밌는 체험 하기';
  category: SearchBarContentItem['text'];
  setSubject: (subject: SearchBarContentItem['text']) => void;
}

export const useSearchSubjectStore = create<SearchSubjectStore>((set) => ({
  category: '전체 검색',
  dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ',
  dynamicTitle: '어디로 가시나요?',
  setSubject: (subject) => {
    switch (subject) {
      case '전체 검색':
        set({
          dynamicPlaceholder: '음식점, 즐길 거리, 동네 등 ',
          dynamicTitle: '어디로 가시나요?',
          category: subject,
        });
        break;
      case '맛집 검색':
        set({
          dynamicPlaceholder: '음식점, 카페',
          dynamicTitle: '음식점 찾기',
          category: subject,
        });
        break;
      case '즐길 거리':
        set({
          dynamicPlaceholder: '관광 명소, 놀이공원',
          dynamicTitle: '재밌는 체험 하기',
          category: subject,
        });
        break;
      default:
        break;
    }
  },
}));

export interface SearchHistoryStore {
  searchHistory: string[];
  setSearchHistory: (searchHistory: string, category: SearchBarContentItem['text']) => void;
  getSearchHistory: (category: SearchBarContentItem['text']) => void;
}

export const useSearchHistoryStore = create<SearchHistoryStore>((set) => ({
  searchHistory: [],
  setSearchHistory: (searchHistory, category) => {
    set((state) => ({
      searchHistory: [...state.searchHistory, searchHistory],
    }));
    localStorage.setItem(
      category,
      JSON.stringify([
        ...new Set([searchHistory, ...(useSearchHistoryStore.getState().searchHistory ?? [])]),
      ]),
    );
    localStorage.setItem(
      category,
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
  getSearchHistory: (category) => {
    const history = localStorage.getItem(category);
    if (history) {
      set(() => ({
        searchHistory: [...JSON.parse(history)],
      }));
    } else {
      set(() => ({
        searchHistory: [],
      }));
    }
  },
}));

export interface SearchBarModalStore {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useSearchBarModalStore = create<SearchBarModalStore>((set) => ({
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

export interface SearchStore {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchText: '',
  setSearchText: (searchText) => {
    set({
      searchText,
    });
  },
}));

export const useSearchBarStore = Object.assign(useSearchSubjectStore, {
  subject: useSearchSubjectStore,
  history: useSearchHistoryStore,
  modal: useSearchBarModalStore,
  search: useSearchStore,
});
