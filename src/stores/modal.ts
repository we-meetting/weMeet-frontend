import { create } from 'zustand';

interface ModalState {
  modalState: { searchActive: boolean; loginActive: boolean };
  switchModalOpen: (modalType: keyof ModalState['modalState']) => void; //modalType의 타입은 keyof ModalState['modalState']로, modalState 객체의 키 중 하나임을 의미합니다.
}

export const useModalStore = create<ModalState>()((set) => ({
  modalState: { searchActive: false, loginActive: false },
  switchModalOpen: (modalType) =>
    set((state) => ({
      modalState: { ...state.modalState, [modalType]: !state.modalState[modalType] }, //...state.modalState는 기존의 modalState 객체를 가져옴을 의미합니다.
    })),
}));
