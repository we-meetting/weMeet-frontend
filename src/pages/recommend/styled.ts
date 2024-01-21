import styled from '@emotion/styled';

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

export const RecommendButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.6rem;
`;

export const RecommendButton = styled.button`
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
