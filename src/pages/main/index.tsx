import React from 'react';

import { Text } from 'src/components';
import { Searchbar } from 'src/components/common/Searchbar';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <Searchbar />
      </S.MainPageContainer>
    </>
  );
};
