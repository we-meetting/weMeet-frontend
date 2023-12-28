import styled from '@emotion/styled';

import { TextCommonProps } from '.';

export const TextElement = styled.p<TextCommonProps>`
  font-size: ${({ size }) => `${size}rem`};
  font-family: ${({ weight }) => formatWeight(weight)};
  src: ${({ weight }) =>
      ` url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/${formatWeight(
        weight,
      )}.woff')`}
    format('woff');
`;

export const formatWeight = (weight: TextCommonProps['weight']) => {
  switch (weight) {
    case 'thin':
      return 'Pretendard-Thin';
    case 'extraLight':
      return 'Pretendard-ExtraLight';
    case 'light':
      return 'Pretendard-Light';
    case 'regular':
      return 'Pretendard-Regular';
    case 'medium':
      return 'Pretendard-Medium';
    case 'semiBold':
      return 'Pretendard-SemiBold';
    case 'bold':
      return 'Pretendard-Bold';
    case 'extraBold':
      return 'Pretendard-ExtraBold';
    case 'black':
      return 'Pretendard-Black';
  }
};
