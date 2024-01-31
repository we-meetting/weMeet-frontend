import React from 'react';

import { Container } from 'src/components/layouts';
import { Food1Svg } from 'src/assets';

import * as S from './styled';

export const ImageSlider: React.FC = () => {
  return (
    <Container>
      <S.ImageSliderInnerContainer>
        <S.ImageSliderIconWrapper left>
          <S.ImageSliderLeftIcon />
        </S.ImageSliderIconWrapper>
        <S.ImageSliderImage src={Food1Svg} />
        <S.ImageSliderIconWrapper>
          <S.ImageSliderRightIcon />
        </S.ImageSliderIconWrapper>
      </S.ImageSliderInnerContainer>
    </Container>
  );
};
