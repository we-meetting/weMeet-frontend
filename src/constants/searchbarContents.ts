import { allSearchIcon, restaurantSearchIcon, enjoySearchIcon } from 'src/assets';

export interface SearchBarContentItem {
  text: string;
  image: string;
}

export const SEARCHBAR_CONTENT_LIST: SearchBarContentItem[] = [
  { text: '전체 검색', image: allSearchIcon },
  { text: '맛집 검색', image: restaurantSearchIcon },
  { text: '즐길 거리', image: enjoySearchIcon },
];
