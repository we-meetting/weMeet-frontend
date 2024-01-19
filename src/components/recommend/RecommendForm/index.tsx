import React from 'react';

import { Text } from 'src/components/common';

import * as S from './styled';

export interface RecommendFormProps {
  title: string;
  subTitle?: string;
  button: {
    text: string;
    onClick: () => void;
  };
  children: React.ReactNode;
}

export const RecommendForm: React.FC<RecommendFormProps> = ({
  title,
  subTitle,
  button,
  children,
}) => {
  return (
    <S.RecommendFormContainer>
      <S.RecommendFormTitleContainer>
        <Text size={2.6} weight={800}>
          {title}
        </Text>
        {subTitle && (
          <Text size={1.1} weight={400}>
            {subTitle}
          </Text>
        )}
      </S.RecommendFormTitleContainer>
      {children}
      <S.RecommendFormButton onClick={button.onClick}>{button.text}</S.RecommendFormButton>
    </S.RecommendFormContainer>
  );
};
