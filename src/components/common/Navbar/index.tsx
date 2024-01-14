import { useTheme } from '@emotion/react';

import { Logo } from 'src/assets';
import { NAVBAR_CONTENT_LIST } from 'src/constants';

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
          {NAVBAR_CONTENT_LIST.map(({ text }) => (
            <Text size={1.6} weight={500}>
              {text}
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
