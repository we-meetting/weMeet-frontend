import styled from '@emotion/styled';

import { TextCommonProps } from '.';

export const TextElement = styled.p<TextCommonProps>`
  font-size: ${({ size }) => (size ? `${size}rem` : 'auto')};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => (color ? color : theme.default)};
`;
