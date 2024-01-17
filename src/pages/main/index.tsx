import React from 'react';

import { SearchBarSection } from 'src/components/main/searchSection';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <SearchBarSection />
      </S.MainPageContainer>
    </>
  );
};
