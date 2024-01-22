import { TbWorldSearch } from 'react-icons/tb';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

export interface SearchBarContentItem {
  text: '전체 검색' | '맛집 검색' | '즐길 거리';
  icon: React.ReactNode;
}

export const SEARCHBAR_CONTENT_LIST: SearchBarContentItem[] = [
  {
    text: '전체 검색',
    icon: <TbWorldSearch />,
  },
  { text: '맛집 검색', icon: <MdOutlineRestaurantMenu /> },
  { text: '즐길 거리', icon: <IoLocationSharp /> },
];
