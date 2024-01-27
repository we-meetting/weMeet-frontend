import React from 'react';

import { Text } from '../Text';

import * as S from './styled';

export interface PlaceCardProps {
  main: string;
  location?: string;
  isLast?: boolean;
  onClick?: () => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ main, location, isLast, onClick }) => {
  return (
    <S.PlaceCardContainer onClick={onClick}>
      <S.PlaceCardInnerContainer>
        <S.PlaceCardIconWrapper>
          {location ? <S.PlaceCardLocationIcon /> : <S.PlaceCardNavigationIcon />}
        </S.PlaceCardIconWrapper>
        <S.PlaceCardTextContainer>
          <Text size={1} weight={600} mobileBigText>
            {main}
          </Text>
          {location && (
            <Text size={0.8} weight={300} mobileBigText>
              {location}
            </Text>
          )}
        </S.PlaceCardTextContainer>
      </S.PlaceCardInnerContainer>
      {!isLast && <S.PlaceCardLine />}
    </S.PlaceCardContainer>
  );
};
