import styled from '@emotion/styled';

export const ShadowBox = styled.div`
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12);
  border: 2px solid ${({ theme }) => theme.softWhite};
`;
