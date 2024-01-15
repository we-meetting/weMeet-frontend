import React, { useContext } from 'react';

import { Modal, ModalProps } from 'src/components';

export interface ModalContextProps {
  open: (props: ModalProps) => void;
  close: () => void;
  closeAll: () => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = React.useState<ModalProps[]>([]);

  const open = (props: ModalProps) => {
    setModals((prev) => [...prev, props]);
  };

  const close = () => {
    setModals((prev) => prev.slice(1));
  };

  const closeAll = () => {
    setModals([]);
  };

  return (
    <ModalContext.Provider value={{ open, close, closeAll }}>
      {modals.length > 0 && <Modal {...modals[0]} />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal() must be used within a ModalProvider');

  return context;
};
