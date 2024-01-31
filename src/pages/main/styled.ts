import styled from '@emotion/styled';

import { Container } from 'src/components';

export const MainPageContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 2rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  @media screen and (max-width: 767px) {
    padding-bottom: 4rem;
  }
`;
