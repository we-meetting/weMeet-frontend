import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 10rem;
  padding-bottom: 10rem;
  @media screen and (max-width: 1500px) and (min-width: 1000px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 0;
  }
`;
