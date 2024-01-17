import React, { useEffect } from 'react';

import { useModal } from 'src/providers';

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
      {children}
    </S.ModalContainer>
  );
};

export interface ModalOverlayProps {
  type?: 'default' | 'searchBar';
  children?: React.ReactNode;
  onCloseClick?: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  onCloseClick,
  type = 'default',
}) => {
  const { closeAll } = useModal();

  useEffect(() => {
    if (type === 'searchBar') return;
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
      <S.ModalCloseContainer onClick={type === 'searchBar' ? onCloseClick : closeAll} />
      {children}
    </S.ModalOverlay>
  );
};

export const Modal = Object.assign(ModalComponent, {
  Overlay: ModalOverlay,
});
