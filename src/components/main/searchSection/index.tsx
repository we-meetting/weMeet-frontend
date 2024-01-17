import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

import { AnimatePresence } from 'framer-motion';

import { SEARCHBAR_CONTENT_LIST } from 'src/constants';
import { Modal, PlaceCard, Text } from 'src/components';
import { SearchSubject, useSearchStore } from 'src/stores';

import * as S from './styled';

const SearchSubjectContainer = () => {
  const setSearchSubject = useSearchStore((store) => store.setSubject);

  const [selectedCategory, setSelectedCategory] = useState(
    SEARCHBAR_CONTENT_LIST.map((_, i) => (i === 0 ? true : false)),
  );

  const onPressCategory = (index: number) => {
    setSelectedCategory((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const onChangeSearchSubject = (textValue: SearchSubject, index: number) => {
    onPressCategory(index);
    setSearchSubject(textValue);
  };

  return (
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
  );
};

const SearchInput = () => {
  return (
    <S.SearchbarInputContainer>
      <IoSearchOutline size={'1.6rem'} />
      <S.SearchbarInput
        placeholder={dynamicPlaceholder}
        ref={searchInputRef}
        onChange={onChangeSearchText}
        value={searchText}
      />
    </S.SearchbarInputContainer>
  );
};

export interface SearchFormValue {
  keyword: string;
}

export const SearchbarSection: React.FC = () => {
  const { handleSubmit } = useForm<SearchFormValue>();

  const searchSubject = useSearchStore((store) => store.subject);

  const searchBarRecommandRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [isSearchbarModalOpen, setIsSearchbarModalOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [searchItems, setSearchItems] = useState<string[]>([]);

  const searchbarModalOpen = () => {
    setIsSearchbarModalOpen(true);
  };

  const searchbarModalClose = () => {
    setIsSearchbarModalOpen(false);
  };

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSubmitSearchText = ({ keyword }: SearchFormValue) => {};

  let dynamicPlaceholder = '';
  let dynamicTitle = '';
  switch (searchSubject) {
    case SearchSubject.All:
      dynamicPlaceholder = '음식점, 즐길 거리, 동네 등 ';
      dynamicTitle = '어디로 가시나요?';
      break;
    case SearchSubject.Restaurants:
      dynamicPlaceholder = '음식점, 카페';
      dynamicTitle = '음식점 찾기';
      break;
    case SearchSubject.Attractions:
      dynamicPlaceholder = '관광 명소, 놀이공원';
      dynamicTitle = '재밌는 체험 하기';
      break;
    default:
      dynamicPlaceholder = 'Search';
  }

  useEffect(() => {
    if (!searchBarRecommandRef.current || !searchInputRef.current) return;

    const { scrollHeight } = searchBarRecommandRef.current;
    searchBarRecommandRef.current.style.height = isSearchbarModalOpen ? `${scrollHeight}px` : '0';

    isSearchbarModalOpen ? searchInputRef.current.focus() : searchInputRef.current.blur();
  }, [isSearchbarModalOpen]);

  return (
    <>
      <S.SearchContentsContainer>
        <S.SearchTitleWrapper>
          <Text size={2.8} weight={700}>
            {dynamicTitle}
          </Text>
        </S.SearchTitleWrapper>
        <SearchSubjectContainer />
        {isSearchbarModalOpen && (
          <Modal.Overlay type="searchbar" onCloseClick={searchbarModalClose} />
        )}
        <S.SearchbarContainer
          onClick={searchbarModalOpen}
          searchBarModalOpen={isSearchbarModalOpen}
        >
          <S.SearchbarInnerContainer searchBarModalOpen={isSearchbarModalOpen}>
            <S.SearchbarInputContainer>
              <IoSearchOutline size={'1.6rem'} />
              <S.SearchbarInput
                placeholder={dynamicPlaceholder}
                ref={searchInputRef}
                onChange={onChangeSearchText}
                value={searchText}
              />
            </S.SearchbarInputContainer>
            <AnimatePresence>
              {!isSearchbarModalOpen && (
                <S.SearchbarButton
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <Text size={1.1} weight={400}>
                    검색
                  </Text>
                </S.SearchbarButton>
              )}
            </AnimatePresence>
          </S.SearchbarInnerContainer>
          <S.SearchbarRecommandContainer ref={searchBarRecommandRef}>
            <PlaceCard main="주변" isLast />
            <S.SearchRecommandTextWrapper>
              <Text size={0.8} weight={600}>
                최근 본 항목
              </Text>
            </S.SearchRecommandTextWrapper>
          </S.SearchbarRecommandContainer>
        </S.SearchbarContainer>
      </S.SearchContentsContainer>
    </>
  );
};
