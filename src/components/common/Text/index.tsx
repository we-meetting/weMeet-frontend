import React from 'react';

import * as S from './styled';

export interface TextCommonProps {
  weight:
    | 'thin'
    | 'extraLight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'black';
  size: number;
}

export type TextProps = Partial<TextCommonProps> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Text: React.FC<TextProps> = ({ children, size = 1.1, weight = 'regular', style }) => {
  return (
    <S.TextElement size={size} weight={weight} style={style}>
      {children}
    </S.TextElement>
  );
};
