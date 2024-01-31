import React from 'react';

import { ImageSlider, SearchBarSection } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <SearchBarSection />
        <ImageSlider />
      </S.MainPageContainer>
    </>
  );
};
