import styled from '@emotion/styled';

export const RecommendResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

export const RecommendResultCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.6rem;
`;

export const RecommendResultCard = styled.button`
  padding: 0.4rem 0.8rem;
  border: 1px solid #eee;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.tertiary};
  cursor: pointer;
  transition: opacity 150ms;
  &:hover {
    opacity: 0.8;
  }
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const RecommendContainer = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const RecommendInputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const RecommendInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.placeholder};
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  width: 100%;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 16px;
    cursor: text;
    top: 24px;
  }

  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: ${({ theme }) => theme.primary};
  }

  &:focus {
    padding-bottom: 7px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const RecommendInputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: ${({ theme }) => theme.placeholder};
  pointer-events: none;
`;
