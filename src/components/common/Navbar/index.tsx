import { useEffect, useState } from 'react';

import { Logo } from 'src/assets';
import { NAVBAR_CONTENT_LIST } from 'src/constants';

import { Text } from '../Text';

import * as S from './styled';

export const Navbar: React.FC = () => {
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
            <Text size={1.8} weight={700} mobileBigText>
              weMeet
            </Text>
          </S.NavbarLogoContainer>
          <S.NavbarContentList>
            {NAVBAR_CONTENT_LIST.map(({ text, href }, i) => (
              <S.NavbarContentItem key={i} to={href}>
                {text}
              </S.NavbarContentItem>
            ))}
          </S.NavbarContentList>
          <S.NavbarLoginWrapper>
            <S.NavbarLoginInnerWrapper>
              <Text color="white" mobileBigText>
                로그인
              </Text>
            </S.NavbarLoginInnerWrapper>
          </S.NavbarLoginWrapper>
        </S.NavbarInnerContainer>
        <S.NavbarContentListWrapper>
          <S.NavbarMobileContentList>
            {NAVBAR_CONTENT_LIST.map(({ text, href }, i) => (
              <S.NavbarContentItem key={i} to={href}>
                {text}
              </S.NavbarContentItem>
            ))}
          </S.NavbarMobileContentList>
        </S.NavbarContentListWrapper>
      </S.NavbarContainer>
    </>
  );
};
