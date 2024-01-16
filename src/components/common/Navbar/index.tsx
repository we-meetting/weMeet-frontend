import { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Logo } from 'src/assets';
import { NAVBAR_CONTENT_LIST } from 'src/constants';

import { Text } from '../Text';

import * as S from './styled';

export const Navbar: React.FC = () => {
  const theme = useTheme();

  // 스크롤 감지 될때 true로 바꾸기
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  return (
    <>
      <S.NavbarContainer isScroll={isScroll}>
        <S.NavbarInnerContainer>
          <S.NavbarLogoContainer>
            <S.NavbarLogoImg src={Logo} alt="hello" />
            <Text size={1.8} weight={700}>
              weMeet
            </Text>
          </S.NavbarLogoContainer>
          <S.NavbarContentContainer>
            {NAVBAR_CONTENT_LIST.map(({ text }, i) => (
              <Text size={1.1} weight={500} key={i}>
                {text}
              </Text>
            ))}
          </S.NavbarContentContainer>
          <S.NavbarLoginWrapper>
            <S.NavbarLoginInnerWrapper>
              <Text size={1} weight={500} style={{ color: theme.white }}>
                로그인
              </Text>
            </S.NavbarLoginInnerWrapper>
          </S.NavbarLoginWrapper>
        </S.NavbarInnerContainer>
      </S.NavbarContainer>
    </>
  );
};
