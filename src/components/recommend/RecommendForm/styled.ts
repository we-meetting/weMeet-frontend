import styled from '@emotion/styled';

import { Container } from 'src/components/layouts';

export const RecommendFormContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RecommendFormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 0.8rem;
`;

export const RecommendFormButton = styled.button`
  border: none;
  border-radius: 3rem;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 1rem;
`;
