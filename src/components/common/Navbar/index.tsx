import { Logo } from 'src/assets';

import { Text } from '../Text';

import * as S from './styled';

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavbarContainer>
        <S.NavbarContentsContainer>
          <S.NavbarLogoContainer>
            <S.NavbarLogoImg src={Logo} alt="hello" />
          </S.NavbarLogoContainer>
          <h1>hello</h1>
        </S.NavbarContentsContainer>
      </S.NavbarContainer>
    </>
  );
};
