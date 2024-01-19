import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { AnimatePresence, MotionProps } from 'framer-motion';
import { useTheme } from '@emotion/react';

import { SEARCHBAR_CONTENT_LIST, SearchBarContentItem } from 'src/constants';
import { Modal, PlaceCard, Text } from 'src/components';
import { useSearchBarStore } from 'src/stores';

import * as S from './styled';

const SearchSubjectContainer: React.FC = () => {
  const setSearchSubject = useSearchBarStore.subject((store) => store.setSubject);

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

const SearchInput: React.FC = () => {
  const dynamicPlaceholder = useSearchBarStore.subject((store) => store.dynamicPlaceholder);

  const setSearchHistory = useSearchBarStore.history((store) => store.setSearchHistory);

  const isModalOpen = useSearchBarStore.modal((store) => store.isOpen);

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
        <IoSearchOutline size={'1.6rem'} />
        <S.SearchBarInput
          placeholder={dynamicPlaceholder}
          ref={searchInputRef}
          onChange={onChangeSearchText}
          value={searchText}
          name="keyword"
        />
      </S.SearchBarInputContainer>
      <AnimatePresence>
        {!isModalOpen && (
          <S.SearchBarButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Text size={1.1} weight={400}>
              검색
            </Text>
          </S.SearchBarButton>
        )}
      </AnimatePresence>
    </S.SearchBarInnerContainer>
  );
};

const SearchBarRecommendContainer: React.FC = () => {
  const theme = useTheme();

  const searchHistory = useSearchBarStore.history((store) => store.searchHistory);
  const isModalOpen = useSearchBarStore.modal((store) => store.isOpen);

  const getSearchHistory = useSearchBarStore.history((store) => store.getSearchHistory);

  const searchBarRecommendRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!searchBarRecommendRef.current) return;

    const { scrollHeight } = searchBarRecommendRef.current;
    searchBarRecommendRef.current.style.height = isModalOpen ? `${scrollHeight}px` : '0';
  }, [isModalOpen]);

  useEffect(() => {
    getSearchHistory();
  }, []);

  return (
    <S.SearchBarRecommendContainer ref={searchBarRecommendRef}>
      <PlaceCard main="주변" isLast />
      <S.SearchRecommendTextWrapper>
        <Text size={0.8} weight={600}>
          최근 본 항목
        </Text>
      </S.SearchRecommendTextWrapper>
      {searchHistory.length > 0 ? (
        <>
          {searchHistory
            .slice(-5)
            .reverse()
            .map((history, i) => (
              <PlaceCard main={history} key={i} isLast={i === 4} />
            ))}
        </>
      ) : (
        <S.SearchRecommendTextWrapper style={{ paddingTop: 0 }}>
          <Text size={0.8} style={{ color: theme.placeholder }}>
            최근 본 항목이 없습니다.
          </Text>
        </S.SearchRecommendTextWrapper>
      )}
    </S.SearchBarRecommendContainer>
  );
};

export const SearchBarSection: React.FC = () => {
  const fadeInScroll = useCallback(
    ({ delay }: { delay: number }) =>
      ({
        initial: { opacity: 0, transform: 'translate3d(0, 50%, 0)' }, // (0,50%,0) -> x축, y축, z축 순서
        animate: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        transition: { ease: [0, 0, 0.2, 1], duration: 0.7, delay },
        viewport: { once: true },
      }) as MotionProps,
    [],
  );

  const dynamicTitle = useSearchBarStore.subject((store) => store.dynamicTitle);

  const isModalOpen = useSearchBarStore.modal((store) => store.isOpen);
  const openModal = useSearchBarStore.modal((store) => store.openModal);
  const closeModal = useSearchBarStore.modal((store) => store.closeModal);

  return (
    <>
      <S.SearchContentsContainer {...fadeInScroll({ delay: 0.2 })}>
        <S.SearchTitleWrapper>
          <Text size={2.8} weight={700}>
            {dynamicTitle}
          </Text>
        </S.SearchTitleWrapper>
        <SearchSubjectContainer />
        {isModalOpen && <Modal.Overlay type="searchBar" onCloseClick={closeModal} />}
        <S.SearchBarContainer onClick={openModal} searchBarModalOpen={isModalOpen}>
          <SearchInput />
          <SearchBarRecommendContainer />
        </S.SearchBarContainer>
      </S.SearchContentsContainer>
    </>
  );
};
