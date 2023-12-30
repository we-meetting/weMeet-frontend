import React from 'react';

import { Navbar, Text } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <S.MainPageContainer>
        <Text size={3.4} weight={600} style={{}}>
          위밋 메인 페이지
        </Text>
      </S.MainPageContainer>
    </>
  );
};
