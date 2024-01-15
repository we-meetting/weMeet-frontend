import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const NavbarLogoImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  cursor: pointer;
`;

export const NavbarLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 5rem;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
`;
