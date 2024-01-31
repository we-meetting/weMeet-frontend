import { IoSearchOutline } from 'react-icons/io5';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SearchContentsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBarContainer = styled(motion.div)<{ searchBarModalOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50rem;
  z-index: ${({ searchBarModalOpen }) => (searchBarModalOpen ? 999 : 1)};
  transition: border-radius 150ms;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12);
  border: 2px solid ${({ theme }) => theme.softWhite};
  margin-bottom: 2rem;

  @media screen and (max-width: 767px) {
    width: 476px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  ${({ searchBarModalOpen }) =>
    searchBarModalOpen
      ? css`
          position: fixed;
          top: 29%;
          padding: 1rem 0.4rem;
          padding-top: 0.4rem;
          row-gap: 1rem;
          border-radius: 1rem;
          border: none;
        `
      : css`
          border-radius: 5rem;
          padding: 0.4rem;
          padding-left: 1rem;
        `}
`;

export const SearchBarInnerContainer = styled.div<{ searchBarModalOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2.8rem;
  ${({ searchBarModalOpen, theme }) =>
    searchBarModalOpen
      ? css`
          width: 96%;
          min-height: 3.4rem;
          border-bottom: 1px solid ${theme.default};
        `
      : css`
          width: 100%;
          flex-direction: row;
        `}
`;

export const SearchBarRecommendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 150ms;
`;

export const SearchBarInputContainer = styled.form`
  flex: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.4rem;
`;

export const SearchIcon = styled(IoSearchOutline)`
  width: 1.6rem;
  height: 1.6rem;
  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SearchBarInput = styled.input`
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.default};
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

export const SearchBarButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5rem;
  height: 100%;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchSubjectContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 100%;
    column-gap: 1rem;
  }
`;

export const SearchSubjectWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid
    ${({ theme, isSelected }) => (isSelected ? theme.default : 'transparent')};
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.default};
  }
`;

export const SearchSubjectIconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.4rem;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const SearchTitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const SearchRecommendTextWrapper = styled.div`
  padding: 1rem 1.8rem;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
