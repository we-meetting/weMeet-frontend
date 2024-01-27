import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { Container } from 'src/components/layouts';

export const NavbarContainer = styled.div<{ isScroll: boolean; isMapPage: boolean }>`
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
  @media screen and (max-width: 1000px) {
    row-gap: 1.4rem;
    padding-bottom: ${({ isMapPage }) => (isMapPage ? '0' : '1rem')};
  }
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

export const NavbarLogoText = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.default};
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
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

export const NavbarMobileContentList = styled(NavbarContentListStyle)<{ isMapPage: boolean }>`
  width: 100%;
  padding-bottom: ${({ isMapPage }) => (isMapPage ? '0' : '1rem')};
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

export const NavbarSearchBarContainerStyle = styled(motion.form)`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 991px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;

export const NavbarSearchBarContainer = styled(NavbarSearchBarContainerStyle)`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavbarSearchBarMobileContainer = styled(NavbarSearchBarContainerStyle)`
  width: 80%;
  justify-content: center;
  padding-bottom: 1rem;
  @media screen and (min-width: 1001px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const NavbarSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
  width: 80%;
  border-radius: 2rem;
  padding: 0.4rem 0.4rem;
  border: 0.6px solid ${({ theme }) => theme.placeholder};
  @media screen and (max-width: 500px) {
    width: 100%;
    column-gap: 0;
  }
`;

export const NavbarSearchBarIcon = styled(IoSearchOutline)`
  width: 1.3rem;
  height: 1.3rem;
  @media screen and (max-width: 500px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const NavbarSearchBarInput = styled.input`
  width: 100%;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    height: 100%;
    padding-left: 0.4rem;
  }
`;
