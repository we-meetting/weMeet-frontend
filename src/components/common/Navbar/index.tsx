import { useTheme } from '@emotion/react';

import { Logo } from 'src/assets';

import { Text } from '../Text';

import * as S from './styled';

export const Navbar: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <S.NavbarContainer>
        <S.NavbarLogoContainer>
          <S.NavbarLogoImg src={Logo} alt="hello" />
          <Text size={2.6} weight={600} style={{ color: theme.secondary }}>
            weMeet
          </Text>
        </S.NavbarLogoContainer>
        <S.NavbarContentContainer>
          <Text size={1.6} weight={500}>
            살펴보기
          </Text>
          <Text size={1.6} weight={500}>
            플랜
          </Text>
          <Text size={1.6} weight={500}>
            맛집
          </Text>
        </S.NavbarContentContainer>
        <S.NavbarLoginWrapper>
          <Text size={1.6} weight={300} style={{ color: theme.white }}>
            로그인
          </Text>
        </S.NavbarLoginWrapper>
      </S.NavbarContainer>
    </>
  );
};
