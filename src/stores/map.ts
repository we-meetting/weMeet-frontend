import { create } from 'zustand';

export interface MapStore {
  mapKeyword: string;
  mapAddress: {
    lat: string;
    lng: string;
  };
  setMapKeyword: (keyword: string) => void;
  setMapAddress: (lat: string, lng: string) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  mapKeyword: '서울 맛집',
  mapAddress: {
    lat: '',
    lng: '',
  },
  setMapKeyword: (mapKeyword) => {
    set({ mapKeyword: mapKeyword });
  },
  setMapAddress: (lat, lng) => {
    set({
      mapAddress: {
        lat: lat,
        lng: lng,
      },
    });
  },
}));
