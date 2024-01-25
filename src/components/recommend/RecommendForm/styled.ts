import styled from '@emotion/styled';

import { Container } from 'src/components/layouts';

export const RecommendFormContainer = styled(Container)`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;
  padding-bottom: 4rem;
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

export const RecommendFormButton = styled.button`
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

export const RecommendFormContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
