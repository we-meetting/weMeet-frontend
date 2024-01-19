import React from 'react';

import { RecommendForm } from 'src/components';

export const RecommendPage: React.FC = () => {
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
      <div>여기에 지도가 들어갈 예정입니다.</div>
    </RecommendForm>
  );
};
