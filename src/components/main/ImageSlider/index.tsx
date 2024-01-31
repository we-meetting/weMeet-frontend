import React, { useState } from 'react';

import { FOOD_IMAGE_LIST } from 'src/constants';

import * as S from './styled';

export const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? FOOD_IMAGE_LIST.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === FOOD_IMAGE_LIST.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <S.ImageSliderContainer>
      <S.ImageSliderIconWrapper left onClick={handlePrevClick}>
        <S.ImageSliderLeftIcon />
      </S.ImageSliderIconWrapper>
      <S.ImageSliderImage src={FOOD_IMAGE_LIST[currentImageIndex]} />
      <S.ImageSliderIconWrapper onClick={handleNextClick}>
        <S.ImageSliderRightIcon />
      </S.ImageSliderIconWrapper>
    </S.ImageSliderContainer>
  );
};
