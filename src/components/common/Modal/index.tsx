import React, { useEffect } from 'react';

import { useModal } from 'src/providers';

import * as S from './styled';

export interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const { close } = useModal();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <S.ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <S.ModalCloseContainer onClick={close} />
      <S.ModalContainer
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
