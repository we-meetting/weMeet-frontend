import React, { useEffect } from 'react';

import * as S from './styled';

export interface ModalProps {
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ children }) => {
  return (
    <S.ModalContainer
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1>Hello</h1>
      {children}
    </S.ModalContainer>
  );
};

export interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
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
      <div style={{ width: '100%', height: '100%', position: 'absolute' }} />
      {children}
    </S.ModalOverlay>
  );
};

export const Modal = Object.assign(ModalComponent, {
  Overlay: ModalOverlay,
});
