import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ImageSliderContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 2rem;

  @media screen and (max-width: 991px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
  @media screen and (max-width: 500px) {
    position: relative;
    padding: 0;
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
  @media screen and (max-width: 500px) {
    border-radius: 0;
  }
`;

export const ImageSliderIconWrapper = styled.div<{ left?: boolean }>`
  user-select: none;
  flex: 0.06;
  display: flex;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'flex-end')};
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 0 10px;
    position: absolute;
    ${({ left }) => (left ? 'left: 0' : 'right: 0')};
    width: 10rem;
    height: 100%;
  }
`;

export const ImageSliderLeftIcon = styled(BsArrowLeftCircle)`
  user-select: none;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 500px) {
    width: 2.6rem;
    height: 2.6rem;
    color: ${({ theme }) => theme.white};
  }
`;

export const ImageSliderRightIcon = styled(BsArrowRightCircle)`
  user-select: none;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 500px) {
    width: 2.6rem;
    height: 2.6rem;
    color: ${({ theme }) => theme.white};
  }
`;
