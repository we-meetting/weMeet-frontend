import { create } from 'zustand';

export interface MakerInfoStore {
  makerInfo: string;
  setMakerInfo: (makerInfo: string) => void;
  resetMakerInfo: () => void;
}

export const useMakerInfoStore = create<MakerInfoStore>((set) => ({
  makerInfo: '',
  setMakerInfo: (makerInfo) => {
    set({ makerInfo });
  },
  resetMakerInfo: () => {
    set({ makerInfo: '' });
  },
}));
