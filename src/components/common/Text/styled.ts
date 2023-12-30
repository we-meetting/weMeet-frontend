import styled from '@emotion/styled';

import { TextCommonProps } from '.';

export const TextElement = styled.p<TextCommonProps>`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ weight }) => weight};
`;
