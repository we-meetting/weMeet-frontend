import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 4.6rem;
`;

export const AuthInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.2rem;
`;

export const AuthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;
export const AuthInput = styled.input`
  width: 26rem;
  height: 2.6rem;
  font-size: 1.2rem;
  padding-left: 0.4rem;
  border: none;
  border-bottom: 1px solid black;
`;

export const AuthUnderContentContainer = styled.div`
  row-gap: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid transparent;
  text-decoration-line: none;
`;
export const AuthSubmitButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 0rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  cursor: pointer;
`;

export const LinkAuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
