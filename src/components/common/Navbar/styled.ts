import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const NavbarContainer = styled.div<{ isScroll: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  transition: border-bottom 150ms;
  border-bottom: ${({ isScroll, theme }) => (isScroll ? `1px solid ${theme.softWhite}` : 'none')};
  z-index: 96;
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    padding: 0 3.2rem !important;
  }

  @media screen and (max-width: 991px) {
    padding: 0 2.4rem !important;
  }
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
`;

export const NavbarContentList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  cursor: pointer;
`;

export const NavbarContentItem = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.default};
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
`;
