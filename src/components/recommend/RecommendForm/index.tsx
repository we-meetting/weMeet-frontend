import React from 'react';

import { useTheme } from '@emotion/react';

import { Text, Spinner } from 'src/components';

import * as S from './styled';

export type RecommendFormProps = Pick<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  title: string;
  subTitle?: string;
  button: {
    text: string;
    onClick: () => void;
  };
  children: React.ReactNode;
  isLoading?: boolean;
};

export const RecommendForm: React.FC<RecommendFormProps> = ({
  title,
  subTitle,
  button,
  children,
  isLoading = false,
}) => {
  const theme = useTheme();

  return (
    <S.RecommendFormContainer>
      <S.RecommendFormTitleContainer>
        <Text size={2.6} weight={700}>
          {title}
        </Text>
        {subTitle && (
          <Text size={1.1} weight={400} mobileBigText>
            {subTitle}
          </Text>
        )}
      </S.RecommendFormTitleContainer>
      <S.RecommendFormContentWrapper>{children}</S.RecommendFormContentWrapper>
      <S.RecommendFormButton {...(!isLoading && { onClick: button.onClick })} isLoading={isLoading}>
        {isLoading ? <Spinner color={theme.white} size={1.46} /> : button.text}
      </S.RecommendFormButton>
    </S.RecommendFormContainer>
  );
};
