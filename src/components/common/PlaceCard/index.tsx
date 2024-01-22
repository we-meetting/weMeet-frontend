import React from 'react';

import { Text } from '../Text';

import * as S from './styled';

export interface PlaceCardProps {
  main: string;
  location?: string;
  isLast?: boolean;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ main, location, isLast }) => {
  return (
    <S.PlaceCardContainer>
      <S.PlaceCardInnerContainer>
        <S.PlaceCardIconWrapper>
          {location ? <S.PlaceCardNavigationIcon /> : <S.PlaceCardNavigationIcon />}
        </S.PlaceCardIconWrapper>
        <S.PlaceCardTextContainer>
          <Text size={1.04} weight={600} mobileBigText>
            {main}
          </Text>
          {location && (
            <Text size={0.9} weight={400}>
              {location}
            </Text>
          )}
        </S.PlaceCardTextContainer>
      </S.PlaceCardInnerContainer>
      {!isLast && <S.PlaceCardLine />}
    </S.PlaceCardContainer>
  );
};
