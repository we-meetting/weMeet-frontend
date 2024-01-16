import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { useTheme } from '@emotion/react';

import { Text } from 'src/components/common/Text';

import { Modal } from '../Modal';

import * as S from './styled';

export interface SearchbarProps {
  dynamicPlaceholder: string;
}

export const Searchbar: React.FC<SearchbarProps> = ({ dynamicPlaceholder }) => {
  const theme = useTheme();

  const [searchBarModalOpen, setSearchBarModalOpen] = useState<boolean>(false);

  const onSearchbarModalOpen = () => {
    setSearchBarModalOpen(true);
  };

  const onSearchbarModalClose = () => {
    setSearchBarModalOpen(false);
  };

  if (searchBarModalOpen)
    return (
      <Modal.Overlay onCloseClick={onSearchbarModalClose}>
        <S.SearchbarContainer onClick={onSearchbarModalOpen}>
          <S.SearchbarInputContainer>
            <IoSearchOutline size={'1.6rem'} />
            <S.SearchbarInputWrapper>
              <Text size={1.1} weight={400} style={{ color: `${theme.placeholder}` }}>
                {dynamicPlaceholder}
              </Text>
            </S.SearchbarInputWrapper>
          </S.SearchbarInputContainer>
          <S.SearchbarButton>
            <Text size={1.1} weight={400}>
              검색
            </Text>
          </S.SearchbarButton>
        </S.SearchbarContainer>
      </Modal.Overlay>
    );
  else {
    return (
      <S.SearchbarContainer onClick={onSearchbarModalOpen}>
        <S.SearchbarInputContainer>
          <IoSearchOutline size={'1.6rem'} />
          <S.SearchbarInputWrapper>
            <Text size={1.1} weight={400} style={{ color: `${theme.placeholder}` }}>
              {dynamicPlaceholder}
            </Text>
          </S.SearchbarInputWrapper>
        </S.SearchbarInputContainer>
        <S.SearchbarButton>
          <Text size={1.1} weight={400}>
            검색
          </Text>
        </S.SearchbarButton>
      </S.SearchbarContainer>
    );
  }
};
