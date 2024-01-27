import React from 'react';

import * as S from './styled';

export interface SpinnerProps {
  size?: number;
  border?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 1.6,
  border = 5,
  color = 'rgba(255,255,255,0.3)',
  style,
}) => {
  return (
    <S.Spinner size={size} border={border} color={color} style={style} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </S.Spinner>
  );
};
