export interface NavbarContentItem {
  text: string;
  href: string;
}

export const NAVBAR_CONTENT_LIST: NavbarContentItem[] = [
  { text: '살펴보기', href: '/' },
  { text: '추천', href: '/recommend' },
  { text: '맛집', href: '/map' },
];
