import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Container } from 'src/components/layouts';

export const RecommendFormContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 6rem;
  align-items: center;
  @media screen and (max-width: 500px) {
    row-gap: 4rem;
  }
`;

export const RecommendFormTitleContainer = styled.div`
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

export const RecommendFormButton = styled.button<{ isLoading: boolean }>`
  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
  ${({ isLoading }) =>
    isLoading
      ? css`
          width: 5.6rem;
          height: 2.6rem;
        `
      : css`
          padding: 0.8rem 1rem;
        `}
`;

export const RecommendFormContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
