import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { Text } from 'src/components/common/Text';
import { SEARCHBAR_CONTENT_LIST } from 'src/constants';
import { useModal } from 'src/providers';

import * as S from './styled';

export const Searchbar: React.FC = () => {
  const { open } = useModal();

  const [searchSubject, setSearchSubject] = useState<string>('전체 검색');
  const [selectedCategory, setSelectedCategory] = useState(SEARCHBAR_CONTENT_LIST.map(() => false));

  const onPressCategory = (index: number) => {
    setSelectedCategory((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const onChangeSearchSubject = (textValue: string, index: number) => {
    onPressCategory(index);
    setSearchSubject(textValue);
  };

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
          <Text size={2.8} weight={700}>
            {dynamicTitle}
          </Text>
        </S.SearchTitleWrapper>
        <S.SearchSubjectContainer>
          {SEARCHBAR_CONTENT_LIST.map(({ text, image }, i) => (
            <S.SearchSubjectWrapper
              onClick={() => onChangeSearchSubject(text, i)}
              key={text}
              isSelected={selectedCategory[i]}
            >
              <S.SearchSubjectIcon src={image} alt="아이콘" />
              <Text size={1.1} weight={600}>
                {text}{' '}
              </Text>
            </S.SearchSubjectWrapper>
          ))}
        </S.SearchSubjectContainer>
        <S.SearchbarContainer onClick={onSearchbarModalOpen}>
          <S.SearchbarInputContainer>
            <IoSearchOutline size={'1.6rem'} />
            <S.SearchbarInputWrapper>
              <Text size={1.1} weight={400} style={{ color: `rgb(133, 133, 133) ` }}>
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
      </S.SearchContentsContainer>
    </>
  );
};
