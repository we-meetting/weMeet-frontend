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
        <S.NavbarInnerContainer>
          <S.NavbarLogoContainer>
            <S.NavbarLogoImg src={Logo} alt="hello" />
            <Text size={2} weight={800} style={{ color: theme.secondary }}>
              weMeet
            </Text>
          </S.NavbarLogoContainer>
          <S.NavbarContentContainer>
            {NAVBAR_CONTENT_LIST.map(({ text }, i) => (
              <Text size={1.3} weight={600} key={i}>
                {text}
              </Text>
            ))}
          </S.NavbarContentContainer>
          <S.NavbarLoginWrapper>
            <Text size={1.3} weight={600} style={{ color: theme.white }}>
              로그인
            </Text>
          </S.NavbarLoginWrapper>
        </S.NavbarInnerContainer>
      </S.NavbarContainer>
    </>
  );
};
