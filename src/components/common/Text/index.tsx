import React from 'react';

import * as S from './styled';

export interface TextCommonProps {
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size: number;
}

export type TextProps = Partial<TextCommonProps> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Text: React.FC<TextProps> = ({ children, size = 1.1, weight = 400, style }) => {
  return (
    <S.TextElement size={size} weight={weight} style={style}>
      {children}
    </S.TextElement>
  );
};
