import React from 'react';

import { Searchbar } from 'src/components/common/Searchbar';
import { Modal } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <>
      {/* <S.MainPageContainer>
        <Searchbar />
      </S.MainPageContainer> */}
      <Modal.Overlay>
        <Modal>
          <h1>asdf</h1>
        </Modal>
      </Modal.Overlay>
    </>
  );
};
