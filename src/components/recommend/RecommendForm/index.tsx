import React from 'react';

import { motion } from 'framer-motion';

import { Text } from 'src/components/common';
import { useFadeInScroll } from 'src/hooks';

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
  const { fadeInScroll } = useFadeInScroll();
  return (
    <S.RecommendFormContainer>
      <S.RecommendFormTitleContainer {...fadeInScroll({ delay: 0 })}>
        <Text size={2.6} weight={700}>
          {title}
        </Text>
        {subTitle && (
          <Text size={1.1} weight={400}>
            {subTitle}
          </Text>
        )}
      </S.RecommendFormTitleContainer>
      <motion.div {...fadeInScroll({ delay: 0.4 })}>{children}</motion.div>
      <S.RecommendFormButton onClick={button.onClick} {...fadeInScroll({ delay: 0.6 })}>
        {button.text}
      </S.RecommendFormButton>
    </S.RecommendFormContainer>
  );
};
