import React from 'react';

import { Container, ImageSlider, SearchBarSection } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <Container>
          <SearchBarSection />
        </Container>
        <ImageSlider />
      </S.MainPageContainer>
    </>
  );
};
