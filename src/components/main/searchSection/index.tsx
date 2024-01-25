import React, { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { SEARCHBAR_CONTENT_LIST, SearchBarContentItem } from 'src/constants';
import { Modal, PlaceCard, Text } from 'src/components';
import { useSearchBarStore } from 'src/stores';
import { useFadeInScroll, useGetWindowSize } from 'src/hooks';

import * as S from './styled';

const SearchSubjectContainer: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();

  const { setSubject } = useSearchBarStore.subject();

  const [selectedCategory, setSelectedCategory] = useState(
    SEARCHBAR_CONTENT_LIST.map((_, i) => (i === 0 ? true : false)),
  );

  const onPressCategory = (index: number) => {
    setSelectedCategory((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const onChangeSearchSubject = (textValue: SearchBarContentItem['text'], index: number) => {
    onPressCategory(index);
    setSubject(textValue);
  };

  return (
    <S.SearchSubjectContainer {...fadeInScroll({ delay: 0.2 })}>
      {SEARCHBAR_CONTENT_LIST.map(({ text, icon }, i) => (
        <S.SearchSubjectWrapper
          onClick={() => onChangeSearchSubject(text, i)}
          key={text}
          isSelected={selectedCategory[i]}
        >
          <S.SearchSubjectIconWrapper>{icon}</S.SearchSubjectIconWrapper>
          <Text size={1.1} weight={600} mobileBigText>
            {text}{' '}
          </Text>
        </S.SearchSubjectWrapper>
      ))}
    </S.SearchSubjectContainer>
  );
};

const SearchInput: React.FC = () => {
  const { windowSize } = useGetWindowSize();

  const dynamicPlaceholder = useSearchBarStore.subject((store) => store.dynamicPlaceholder);

  const { setSearchHistory } = useSearchBarStore.history();

  const isModalOpen = useSearchBarStore.modal((store) => store.isModalOpen);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [searchText, setSearchText] = useState<string>('');

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchHistory(e.currentTarget['keyword'].value as string);
    setSearchText('');
    if (!searchInputRef.current) return;
    searchInputRef.current.focus();
  };

  useEffect(() => {
    if (!searchInputRef.current) return;

    isModalOpen ? searchInputRef.current.focus() : searchInputRef.current.blur();
  }, [isModalOpen]);

  return (
    <S.SearchBarInnerContainer searchBarModalOpen={isModalOpen}>
      <S.SearchBarInputContainer onSubmit={onSearchSubmit}>
        <S.SearchIcon />
        <S.SearchBarInput
          placeholder={dynamicPlaceholder}
          ref={searchInputRef}
          onChange={onChangeSearchText}
          value={searchText}
          name="keyword"
        />
      </S.SearchBarInputContainer>
      <AnimatePresence>
        {!isModalOpen && windowSize > 500 && (
          <S.SearchBarButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Text size={1.1} color="white" mobileBigText>
              검색
            </Text>
          </S.SearchBarButton>
        )}
      </AnimatePresence>
    </S.SearchBarInnerContainer>
  );
};

const SearchBarRecommendContainer: React.FC = () => {
  const { searchHistory } = useSearchBarStore.history();
  const { isModalOpen } = useSearchBarStore.modal();

  const { getSearchHistory } = useSearchBarStore.history();

  const searchBarRecommendRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!searchBarRecommendRef.current) return;

    const { scrollHeight } = searchBarRecommendRef.current;
    searchBarRecommendRef.current.style.height = isModalOpen ? `${scrollHeight}px` : '0';
  }, [isModalOpen, searchHistory]);

  useEffect(() => {
    getSearchHistory();
  }, []);

  return (
    <S.SearchBarRecommendContainer ref={searchBarRecommendRef}>
      <PlaceCard main="주변" isLast />
      <S.SearchRecommendTextWrapper>
        <Text size={0.8} weight={600} mobileBigText>
          최근 본 항목
        </Text>
      </S.SearchRecommendTextWrapper>
      {searchHistory.length > 0 ? (
        <>
          {searchHistory
            .slice(-5)
            .reverse()
            .map((history, i) => (
              <PlaceCard main={history} key={i} isLast={searchHistory.slice(-5).length - 1 === i} />
            ))}
        </>
      ) : (
        <S.SearchRecommendTextWrapper style={{ paddingTop: 0 }}>
          <Text size={0.8} color="placeholder" mobileBigText>
            최근 본 항목이 없습니다.
          </Text>
        </S.SearchRecommendTextWrapper>
      )}
    </S.SearchBarRecommendContainer>
  );
};

export const SearchBarSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();

  const { searchHistory } = useSearchBarStore.history();

  const { dynamicTitle } = useSearchBarStore.subject();

  const { isModalOpen } = useSearchBarStore.modal();
  const { openModal } = useSearchBarStore.modal();
  const { closeModal } = useSearchBarStore.modal();

  return (
    <>
      <S.SearchContentsContainer>
        <S.SearchTitleWrapper {...fadeInScroll({ delay: 0.2 })}>
          <Text size={2.6} weight={800}>
            {dynamicTitle}
          </Text>
        </S.SearchTitleWrapper>
        <SearchSubjectContainer />
        {isModalOpen && <Modal.Overlay type="searchBar" onCloseClick={closeModal} />}
        <S.SearchBarContainer
          onClick={openModal}
          searchBarModalOpen={isModalOpen}
          {...fadeInScroll({ delay: 0.2 })}
          isSearchHistoryFull={searchHistory.length == 5}
        >
          <SearchInput />
          <SearchBarRecommendContainer />
        </S.SearchBarContainer>
      </S.SearchContentsContainer>
    </>
  );
};
