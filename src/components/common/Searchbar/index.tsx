import React, { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';

import { SearchIcon } from 'src/assets';
import { Text } from 'src/components/common/Text';
import { SEARCHBAR_CONTENT_LIST } from 'src/constants';
import { SearchModal } from 'src/components/modals';
import { useModalStore } from 'src/stores';
import { DefaultModalLayouts } from 'src/components/modals/DefaultModal';
import { useModal } from 'src/providers';

import * as S from './styled';

export const Searchbar: React.FC = () => {
  const { open } = useModal();
  const theme = useTheme();

  const [searchSubject, setSearchSubject] = useState<string>('전체 검색');

  const onChangeSearchSubject = (textValue: string) => {
    setSearchSubject(textValue);
  };

  const { modalState, switchModalOpen } = useModalStore();

  let dynamicPlaceholder = '';
  let dynamicTitle = '';
  switch (searchSubject) {
    case '전체 검색':
      dynamicPlaceholder = '음식점, 즐길 거리, 동네 등 ';
      dynamicTitle = '어디로 가시나요?';
      break;
    case '맛집 검색':
      dynamicPlaceholder = '음식점, 카페';
      dynamicTitle = '음식점 찾기';
      break;
    case '즐길 거리':
      dynamicPlaceholder = '관광 명소, 놀이공원';
      dynamicTitle = '재밌는 체험 하기';
      break;
    default:
      dynamicPlaceholder = 'Search';
  }

  const onSearchbarModalOpen = () => {
    open({
      children: <h1>asdf</h1>,
    });
  };

  return (
    <>
      <S.SearchContentsContainer>
        <S.SearchTitleWrapper>
          <Text size={5.2} weight={700}>
            {dynamicTitle}
          </Text>
        </S.SearchTitleWrapper>
        <S.SearchSubjectContainer>
          {SEARCHBAR_CONTENT_LIST.map(({ text, image }) => (
            <S.SearchSubjectWrapper onClick={() => onChangeSearchSubject(text)} key={text}>
              <S.SearchSubjectIcon src={image} alt="아이콘" />
              <Text size={1.6} weight={600}>
                {text}
              </Text>
            </S.SearchSubjectWrapper>
          ))}
        </S.SearchSubjectContainer>
        <S.SearchbarContainer
          onClick={
            onSearchbarModalOpen
            // () => switchModalOpen('searchActive')
          }
        >
          <S.SearchbarIcon src={SearchIcon} />
          <S.SearchbarInputWrapper>
            <Text size={1.4} weight={300} style={{ color: theme.secondary }}>
              {dynamicPlaceholder}
            </Text>
          </S.SearchbarInputWrapper>
          <S.SearchbarButton>
            <Text size={1.2} weight={300}>
              검색
            </Text>
          </S.SearchbarButton>
        </S.SearchbarContainer>
      </S.SearchContentsContainer>
      {/* {modalState.searchActive && (
        <DefaultModalLayouts>
          <SearchModal SearchPlaceholder={dynamicPlaceholder} />
        </DefaultModalLayouts>
      )} */}
    </>
  );
};
