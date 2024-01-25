import { BsCheckCircle, BsFillCheckCircleFill } from 'react-icons/bs';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const RecommendResultContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

export const RecommendResultCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.6rem;
`;

export const RecommendResultCard = styled.button`
  padding: 0.4rem 0.8rem;
  border: 1px solid #eee;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.tertiary};
  cursor: pointer;
  transition: opacity 150ms;
  &:hover {
    opacity: 0.8;
  }
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const RecommendContainer = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const RecommendTypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const RecommendIconWrapper = styled(motion.div)`
  width: 1.4rem;
  height: 1.4rem;
  @media screen and (max-width: 500px) {
    width: 1.6rem;
    height: 1.6rem;
  }
  user-select: none;
`;

export const RecommendCheckOutlineIcon = styled(BsCheckCircle)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.placeholder};
`;

export const RecommendCheckFillIcon = styled(BsFillCheckCircleFill)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.primary};
`;
