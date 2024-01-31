import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import styled from '@emotion/styled';

export const ImageSliderContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;

export const ImageSliderImage = styled.img`
  flex: 1;
  width: 10%;
  height: 24rem;
  border-radius: 1.2rem;
  object-fit: cover;
  border: 0.4px solid ${({ theme }) => theme.softWhite};
`;

export const ImageSliderIconWrapper = styled.div<{ left?: boolean }>`
  user-select: none;
  flex: 0.06;
  display: flex;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'flex-end')};
  align-items: center;
  @media screen and (max-width: 500px) {
    flex: 0.2;
  }
`;

export const ImageSliderLeftIcon = styled(BsArrowLeftCircle)`
  user-select: none;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 500px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const ImageSliderRightIcon = styled(BsArrowRightCircle)`
  user-select: none;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 500px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
