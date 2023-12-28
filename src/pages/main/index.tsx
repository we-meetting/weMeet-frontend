import React from 'react';

import { Text } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <Text size={3.4} weight="bold" style={{}}>
        위밋 메인 페이지
      </Text>
    </S.MainPageContainer>
  );
};
