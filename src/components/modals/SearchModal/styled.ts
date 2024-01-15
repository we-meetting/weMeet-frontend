import styled from '@emotion/styled';

export const SearchModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 5rem;
  padding: 0.2rem 0.6rem;
  column-gap: 0.4rem;
`;

export const SearchModalInput = styled.input`
  display: flex;
  align-items: center;
  width: 64rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  &:focus {
    outline: none;
  }
`;

export const SearchbarIcon = styled.img`
  width: 2rem;
  height: 2rem;
  /* border: 1px solid red; */
`;

export const SearchHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
