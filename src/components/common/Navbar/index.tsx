import { useTheme } from '@emotion/react';

import { Logo } from 'src/assets';

import { Text } from '../Text';

import * as S from './styled';

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const ContentsList: string[] = ['살펴보기', '플랜', '맛집'];
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
          {ContentsList.map((key) => (
            <Text size={1.6} weight={500}>
              {key}
            </Text>
          ))}
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
