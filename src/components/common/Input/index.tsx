import React from 'react';

import { useTheme } from '@emotion/react';

import { Text } from '../Text';

import * as S from './styled';

export interface InputCustomProps {
  label: string;
  message?: string;
  error?: boolean;
}

export type InputProps = InputCustomProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, message, error = false, ...props }, ref) => {
    const theme = useTheme();

    return (
      <S.InputContainer error={error}>
        <S.InputElement placeholder={label} ref={ref} {...props} />
        <S.InputLabel>{label}</S.InputLabel>
        {message && (
          <Text color={theme.danger} size={0.8}>
            {message}
          </Text>
        )}
      </S.InputContainer>
    );
  },
);
