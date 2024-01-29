import styled from '@emotion/styled';

export const DefaultModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.5);
  z-index: 9998;
`;

export const DefaultModalElement = styled.div`
  width: auto;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5rem;
  padding: 0.2rem 2.6rem;
  background-color: #fff;
  z-index: 9999;
`;
