import styled from '@emotion/styled';

export const SearchContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

export const SearchbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #8c7b6e;
  border-radius: 5rem;
  padding: 0.2rem 0.6rem;
  column-gap: 0.4rem;
`;
export const SearchbarInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  cursor: text;
`;

export const SearchbarIcon = styled.img`
  width: 2rem;
  height: 2rem;
  /* border: 1px solid red; */
`;

export const SearchbarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddc9be;
  border-radius: 5rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const SearchSubjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SearchSubjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #8c7b6e;
  }
`; // tripadvisor 에서는 button으로 하여서 focus를 읽을 수 있게 함

export const SearchSubjectIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.4rem;
`;

export const SearchTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;
