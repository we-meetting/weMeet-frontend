import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { useTheme } from '@emotion/react';

import { SEARCHBAR_CONTENT_LIST, SearchBarContentItem } from 'src/constants';
import { Modal, PlaceCard, Spinner, Text } from 'src/components';
import { useMapStore, useSearchBarStore } from 'src/stores';
import { useFadeInScroll, useGetWindowSize } from 'src/hooks';
import { useSearchQuery } from 'src/hooks/queries/useSearchQuery';
import { useDebounce } from 'src/hooks/useDebounce';

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
  const theme = useTheme();

  const { windowSize } = useGetWindowSize();

  const { dynamicPlaceholder, category } = useSearchBarStore.subject();
  const { setSearchHistory } = useSearchBarStore.history();
  const { setSearchText, searchText } = useSearchBarStore.search();

  const { isModalOpen, openModal } = useSearchBarStore.modal();

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchHistory(e.currentTarget['keyword'].value as string, category);
    if (!searchInputRef.current) return;
    searchInputRef.current.focus();
  };

  useEffect(() => {
    if (!searchInputRef.current) return;

    isModalOpen ? searchInputRef.current.focus() : searchInputRef.current.blur();
    !isModalOpen && setSearchText('');
  }, [isModalOpen]);

  useEffect(() => {
    setSearchText('');
  }, [category]);

  return (
    <S.SearchBarInnerContainer searchBarModalOpen={isModalOpen} onClick={openModal}>
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
            <Text size={1.1} color={theme.white} mobileBigText>
              검색
            </Text>
          </S.SearchBarButton>
        )}
      </AnimatePresence>
    </S.SearchBarInnerContainer>
  );
};

const SearchBarRecommendContainer: React.FC = () => {
  const navigate = useNavigate();

  const { category } = useSearchBarStore.subject();
  const { searchText, setSearchText } = useSearchBarStore.search();
  const { setMapKeyword, setMapAddress } = useMapStore();

  const { debouncedValue } = useDebounce(searchText, 200);

  const { data, isLoading } = useSearchQuery({
    keyword: debouncedValue,
    enabled: debouncedValue.length > 0,
  });

  const formatDataTitle = (title: string) => {
    return title.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
  };

  const theme = useTheme();

  const { searchHistory } = useSearchBarStore.history();
  const { isModalOpen, closeModal } = useSearchBarStore.modal();

  const { getSearchHistory } = useSearchBarStore.history();

  const searchBarRecommendRef = useRef<HTMLDivElement | null>(null);

  const dataCardClick = (address: string, y: string, x: string) => {
    const formatAddress = address.replace(/(\s[^\s]*층.*)/g, '');
    setMapKeyword(formatAddress);

    const formatPosition = {
      lat: y.slice(0, 2) + '.' + y.slice(2),
      lng: x.slice(0, 3) + '.' + x.slice(3),
    };
    setMapAddress(formatPosition.lat, formatPosition.lng);

    closeModal();
    navigate('/map');
  };

  useEffect(() => {
    if (!searchBarRecommendRef.current) return;

    searchBarRecommendRef.current.style.height = isModalOpen ? `auto` : '0px';
  }, [isModalOpen, searchHistory, data]);

  useEffect(() => {
    getSearchHistory(category);
  }, [category]);

  return (
    <S.SearchBarRecommendContainer ref={searchBarRecommendRef}>
      {!debouncedValue && (
        <>
          <PlaceCard main="주변" isLast />
          <S.SearchRecommendTextWrapper>
            <Text size={0.8} weight={600} mobileBigText>
              최근 본 항목
            </Text>
          </S.SearchRecommendTextWrapper>
        </>
      )}
      {isLoading && !data ? (
        <S.LoadingWrapper>
          <Spinner color={theme.placeholder} />
        </S.LoadingWrapper>
      ) : debouncedValue.length > 0 && data && data.result.length === 0 ? (
        <S.LoadingWrapper>
          <Text size={0.8} color={theme.placeholder} mobileBigText>
            검색 결과가 없어요
          </Text>
        </S.LoadingWrapper>
      ) : data ? (
        <>
          {data.result.map(({ info }, i) => (
            <PlaceCard
              main={formatDataTitle(info.title)}
              key={i}
              isLast={data.result.slice(-5).length - 1 === i}
              location={info.address}
              onClick={() => dataCardClick(info.title, info.mapy, info.mapx)}
            />
          ))}
        </>
      ) : searchHistory.length > 0 ? (
        <>
          {searchHistory
            .slice(-5)
            .reverse()
            .map((history, i) => (
              <PlaceCard
                main={history}
                key={i}
                isLast={searchHistory.slice(-5).length - 1 === i}
                onClick={() => setSearchText(history)}
              />
            ))}
        </>
      ) : (
        <S.SearchRecommendTextWrapper style={{ paddingTop: 0 }}>
          <Text size={0.8} color={theme.placeholder} mobileBigText>
            최근 본 항목이 없습니다.
          </Text>
        </S.SearchRecommendTextWrapper>
      )}
    </S.SearchBarRecommendContainer>
  );
};

export const SearchBarSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();

  const { dynamicTitle } = useSearchBarStore.subject();

  const { isModalOpen, closeModal } = useSearchBarStore.modal();

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
        <S.SearchBarContainer searchBarModalOpen={isModalOpen} {...fadeInScroll({ delay: 0.2 })}>
          <SearchInput />
          <SearchBarRecommendContainer />
        </S.SearchBarContainer>
      </S.SearchContentsContainer>
    </>
  );
};
