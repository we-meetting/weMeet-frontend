import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Container } from 'src/components/layouts';

export const NavbarContainer = styled.div<{ isScroll: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border-bottom 150ms;
  border-bottom: ${({ isScroll, theme }) => (isScroll ? `1px solid ${theme.softWhite}` : 'none')};
  z-index: 96;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.white};
  @media screen and (max-width: 500px) {
    padding-bottom: 0;
  }
`;

export const NavbarInnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
`;

export const NavbarLogoContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.4rem;
`;

export const NavbarLogoImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  @media screen and (max-width: 500px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const NavbarContentListWrapper = styled.div`
  width: 100%;
  padding-top: 1.6rem;
  padding-bottom: 1rem;
`;

export const NavbarContentListStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  cursor: pointer;
`;

export const NavbarContentList = styled(NavbarContentListStyle)`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavbarMobileContentList = styled(NavbarContentListStyle)`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const NavbarContentItem = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.default};
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const NavbarLoginWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
`;

export const NavbarLoginInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 5rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  width: fit-content;
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
