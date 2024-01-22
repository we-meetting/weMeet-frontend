import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { Container } from 'src/components/layouts';

export const RecommendFormContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-bottom: 4rem;
  }
`;

export const RecommendFormTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 0.8rem;
`;

export const RecommendInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const RecommendFormButton = styled(motion.button)`
  border: none;
  border-radius: 3rem;
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
