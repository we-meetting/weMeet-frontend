import React from 'react';

import { Theme } from '@emotion/react';

import * as S from './styled';

export interface TextCommonProps {
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size?: number;
  color?: keyof Theme;
}

export type TextProps = Partial<TextCommonProps> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

/**\
 * Text 컴포넌트
 * @param {React.ReactNode} children - 텍스트
 * @param {React.CSSProperties} style - 스타일
 * @param {number} size - 폰트 사이즈
 * @param {number} weight - 폰트 굵기
 */
export const Text: React.FC<TextProps> = ({ children, size, weight = 500, style, color }) => {
  return (
    <S.TextElement size={size} weight={weight} style={style} color={color}>
      {children}
    </S.TextElement>
  );
};
