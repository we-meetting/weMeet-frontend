import { allSearchIcon, restaurantSearchIcon, enjoySearchIcon } from 'src/assets';
import { SearchSubject } from 'src/stores';

export interface SearchBarContentItem {
  text: SearchSubject;
  image: string;
}

export const SEARCHBAR_CONTENT_LIST: SearchBarContentItem[] = [
  { text: SearchSubject.All, image: allSearchIcon },
  { text: SearchSubject.Restaurants, image: restaurantSearchIcon },
  { text: SearchSubject.Attractions, image: enjoySearchIcon },
];
