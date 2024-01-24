import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const MapMarkerBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  border: none;
  padding: 6px 8px;
  text-align: left;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const MapMarkerBoxLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 500;
`;

export const MapMarkerBoxAddress = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const MapMarkerBoxAddressLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
`;
