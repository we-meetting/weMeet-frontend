import { SearchIcon } from 'src/assets';

import * as S from './styled';

export interface SearchModalProps {
  // history: string;
  SearchPlaceholder: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ SearchPlaceholder }) => {
  return (
    <>
      <S.SearchModalContainer>
        <S.SearchbarIcon src={SearchIcon} />
        <S.SearchModalInput placeholder={SearchPlaceholder} autoFocus />
      </S.SearchModalContainer>
    </>
  );
};
