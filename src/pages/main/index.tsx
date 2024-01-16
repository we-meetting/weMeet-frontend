import React from 'react';

import { Searchbar } from 'src/components/common/Searchbar';
import { SearchbarSection } from 'src/components/main/searchSection';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <SearchbarSection />
      </S.MainPageContainer>
    </>
  );
};
