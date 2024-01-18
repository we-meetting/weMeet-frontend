import * as S from './styled';

interface DefaultModalProps {
  children: React.ReactNode;
}

export const DefaultModalLayouts: React.FC<DefaultModalProps> = ({ children }) => {
  return (
    <>
      <S.DefaultModalContainer>
        <S.DefaultModalElement>{children}</S.DefaultModalElement>
      </S.DefaultModalContainer>
    </>
  );
};
