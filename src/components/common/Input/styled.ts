import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputContainer = styled.div<{ error: boolean }>`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  ${({ error, theme }) =>
    error &&
    css`
      /* & > input {
        border-bottom: 1px solid ${theme.danger};
      }
      & > label {
        color: ${theme.danger};
      } */
    `}
`;

export const InputElement = styled.input`
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

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: ${({ theme }) => theme.placeholder};
  pointer-events: none;
`;
