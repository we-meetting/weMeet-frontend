import styled from '@emotion/styled';

import { ShadowBox } from '../ShadowBox';

export const PlaceCardContainer = styled.div`
  width: 100%;
  transition: background-color 200ms;
  &:hover {
    hr {
      visibility: hidden;
    }
    background-color: ${({ theme }) => theme.softWhite};
    border-bottom: none;
    z-index: 999;
  }
`;

export const PlaceCardInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 0.4rem;
  padding: 1rem 1.8rem;
`;

export const PlaceCardLine = styled.hr`
  background-color: ${({ theme }) => theme.softWhite};
  height: 1px;
  margin: 0 1.8rem;
`;

export const PlaceCardIconWrapper = styled(ShadowBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
`;

export const PlaceCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  text-align: left;
`;
