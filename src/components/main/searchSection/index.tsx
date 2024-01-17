import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

import { AnimatePresence } from 'framer-motion';

import { SEARCHBAR_CONTENT_LIST, SearchBarContentItem } from 'src/constants';
import { Modal, PlaceCard, Text } from 'src/components';
import { useSearchStore } from 'src/stores';

import * as S from './styled';

const SearchSubjectContainer: React.FC = () => {
  const setSearchSubject = useSearchStore((store) => store.setSubject);

  const [selectedCategory, setSelectedCategory] = useState(
    SEARCHBAR_CONTENT_LIST.map((_, i) => (i === 0 ? true : false)),
  );

  const onPressCategory = (index: number) => {
    setSelectedCategory((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const onChangeSearchSubject = (textValue: SearchBarContentItem['text'], index: number) => {
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

export interface SearchInputProps {
  isSearchBarModalOpen: boolean;
}

export interface SearchFormValue {
  keyword: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ isSearchBarModalOpen }) => {
  const { handleSubmit } = useForm<SearchFormValue>();

  const dynamicPlaceholder = useSearchStore((store) => store.dynamicPlaceholder);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [searchText, setSearchText] = useState<string>('');

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearchSubmit = ({ keyword }: SearchFormValue) => {
    localStorage.setItem('searchText', keyword);
  };

  useEffect(() => {
    if (!searchInputRef.current) return;

    isSearchBarModalOpen ? searchInputRef.current.focus() : searchInputRef.current.blur();
  }, [isSearchBarModalOpen]);

  return (
    <S.SearchBarInnerContainer searchBarModalOpen={isSearchBarModalOpen}>
      <S.SearchbarInputContainer>
        <IoSearchOutline size={'1.6rem'} />
        <S.SearchbarInput
          placeholder={dynamicPlaceholder}
          ref={searchInputRef}
          onChange={onChangeSearchText}
          value={searchText}
          onSubmit={handleSubmit(onSearchSubmit)}
        />
      </S.SearchbarInputContainer>
      <AnimatePresence>
        {!isSearchBarModalOpen && (
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
    </S.SearchBarInnerContainer>
  );
};

export const SearchBarSection: React.FC = () => {
  const dynamicTitle = useSearchStore((store) => store.dynamicTitle);

  const searchBarRecommendRef = useRef<HTMLDivElement | null>(null);

  const [isSearchBarModalOpen, setIsSearchBarModalOpen] = useState<boolean>(false);

  const searchBarModalOpen = () => {
    setIsSearchBarModalOpen(true);
  };

  const searchBarModalClose = () => {
    setIsSearchBarModalOpen(false);
  };

  useEffect(() => {
    if (!searchBarRecommendRef.current) return;

    const { scrollHeight } = searchBarRecommendRef.current;
    searchBarRecommendRef.current.style.height = isSearchBarModalOpen ? `${scrollHeight}px` : '0';
  }, [isSearchBarModalOpen]);

  return (
    <>
      <S.SearchContentsContainer>
        <S.SearchTitleWrapper>
          <Text size={2.8} weight={700}>
            {dynamicTitle}
          </Text>
        </S.SearchTitleWrapper>
        <SearchSubjectContainer />
        {isSearchBarModalOpen && (
          <Modal.Overlay type="searchbar" onCloseClick={searchBarModalClose} />
        )}
        <S.SearchBarContainer
          onClick={searchBarModalOpen}
          searchBarModalOpen={isSearchBarModalOpen}
        >
          <SearchInput isSearchBarModalOpen={isSearchBarModalOpen} />
          <S.SearchbarRecommendContainer ref={searchBarRecommendRef}>
            <PlaceCard main="주변" isLast />
            <S.SearchRecommendTextWrapper>
              <Text size={0.8} weight={600}>
                최근 본 항목
              </Text>
            </S.SearchRecommendTextWrapper>
          </S.SearchbarRecommendContainer>
        </S.SearchBarContainer>
      </S.SearchContentsContainer>
    </>
  );
};
