import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  padding: 0.8rem 2rem;
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const NavbarLogoImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;
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
