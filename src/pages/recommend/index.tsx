import React from 'react';

import { RecommendForm } from 'src/components';
import { RECOMMEND_CONTENTS_LIST } from 'src/constants';

import * as S from './styled';

export const RecommendPage: React.FC = () => {
  console.log(RECOMMEND_CONTENTS_LIST.length);

  const splitRecommendContentsList = (list: string[]) => {
    const result = [];
    for (let i = 0; i < list.length; i += 5) {
      result.push(list.slice(i, i + 5));
    }
    return result;
  };

  return (
    <RecommendForm
      title="어떤 취향이신가요?"
      subTitle="선택한 장소가 지도에 표시돼요!"
      button={{
        text: '다시 생성하기',
        onClick() {
          console.log('asdf');
        },
      }}
    >
      <S.RecommendContainer>
        {splitRecommendContentsList(RECOMMEND_CONTENTS_LIST).map((list, index) => (
          <S.RecommendButtonContainer key={index}>
            {list.map((item, index) => (
              <S.RecommendButton key={index}>{item}</S.RecommendButton>
            ))}
          </S.RecommendButtonContainer>
        ))}
      </S.RecommendContainer>
    </RecommendForm>
  );
};
