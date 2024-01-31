import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import styled from '@emotion/styled';

export const ImageSliderInnerContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ImageSliderImage = styled.img`
  flex: 1;
  width: 100%;
  height: 24rem;
  border-radius: 1.2rem;
  object-fit: cover;
`;

export const ImageSliderIconWrapper = styled.div<{ left?: boolean }>`
  flex: 0.06;
  display: flex;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'flex-end')};
  align-items: center;
`;

export const ImageSliderLeftIcon = styled(BsArrowLeftCircle)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 500px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const ImageSliderRightIcon = styled(BsArrowRightCircle)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 500px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
