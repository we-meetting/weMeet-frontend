import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AnimatePresence } from 'framer-motion';
import { useTheme } from '@emotion/react';

import { useModal } from 'src/providers/modal';
import { LogoSvg } from 'src/assets';
import { NAVBAR_CONTENT_LIST, NavbarContentItem } from 'src/constants';
import { useGetWindowSize } from 'src/hooks';
import { useMapStore } from 'src/stores';

import { Text } from '../Text';
import { LoginModal } from '../modals/LoginModal';

import * as S from './styled';

const NavbarContent: React.FC<NavbarContentItem> = ({ href, text }) => {
  return <S.NavbarContentItem to={href}>{text}</S.NavbarContentItem>;
};

export interface SearchInterface {
  keyword: string;
}

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const { open } = useModal();

  const onLoginModalOpen = () => {
    open({ children: <LoginModal /> });
  };

  const { setMapKeyword: setMapKeyword } = useMapStore();

  const { windowSize } = useGetWindowSize();

  const { handleSubmit, register, setValue } = useForm<SearchInterface>();

  const NavbarSearchBar: React.FC = () => {
    return (
      <S.NavbarSearchBarWrapper>
        <S.NavbarSearchBarIcon />
        <S.NavbarSearchBarInput
          placeholder="검색어를 입력해주세요. ex) 카페, 맛집, 편의점"
          {...register('keyword')}
        />
      </S.NavbarSearchBarWrapper>
    );
  };

  const { pathname } = useLocation();
  const isMapPage = pathname.includes('map');

  const [isScroll, setIsScroll] = useState<boolean>(false);

  const onSubmit = ({ keyword }: SearchInterface) => {
    setMapKeyword(keyword);
    setValue('keyword', '');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  return (
    <>
      <S.NavbarContainer isScroll={isScroll} isMapPage={isMapPage}>
        <S.NavbarInnerContainer>
          <S.NavbarLogoContainer>
            <S.NavbarLogoImg src={LogoSvg} alt="hello" />
            <S.NavbarLogoText to="/">weMeet</S.NavbarLogoText>
          </S.NavbarLogoContainer>
          <AnimatePresence>
            {isMapPage && (
              <S.NavbarSearchBarContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.14 }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <NavbarSearchBar />
              </S.NavbarSearchBarContainer>
            )}
          </AnimatePresence>
          <S.NavbarContentList>
            {NAVBAR_CONTENT_LIST.map((props, i) => (
              <NavbarContent key={i} {...props} />
            ))}
          </S.NavbarContentList>
          <S.NavbarLoginWrapper>
            <S.NavbarLoginInnerWrapper onClick={onLoginModalOpen}>
              <Text color={theme.white} mobileBigText>
                로그인
              </Text>
            </S.NavbarLoginInnerWrapper>
          </S.NavbarLoginWrapper>
        </S.NavbarInnerContainer>
        <S.NavbarMobileContentList isMapPage={isMapPage}>
          {NAVBAR_CONTENT_LIST.map((props, i) => (
            <NavbarContent key={i} {...props} />
          ))}
        </S.NavbarMobileContentList>
        <AnimatePresence>
          {isMapPage && windowSize <= 1000 && (
            <S.NavbarSearchBarMobileContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <NavbarSearchBar />
            </S.NavbarSearchBarMobileContainer>
          )}
        </AnimatePresence>
      </S.NavbarContainer>
    </>
  );
};
