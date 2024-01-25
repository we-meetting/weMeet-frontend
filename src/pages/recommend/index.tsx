import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Input, RecommendForm } from 'src/components';
import { RECOMMEND_CONTENTS_LIST } from 'src/constants';
import { useGetWindowSize } from 'src/hooks';

import * as S from './styled';

export interface RecommendForm {
  city: string;
  district: string;
  region: string;
}

export const RecommendPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecommendForm>();

  const { windowSize } = useGetWindowSize();

  const itemNum = windowSize > 768 ? 5 : 4;

  const splitRecommendContentsList = (list: string[]) => {
    const result = [];
    for (let i = 0; i < list.length; i += itemNum) {
      result.push(list.slice(i, i + itemNum));
    }
    return result;
  };

  const onSubmit = (data: RecommendForm) => {
    console.log(data, 'data');
  };

  return (
    // <RecommendForm
    //   title="어떤 취향이신가요?"
    //   subTitle="선택한 장소가 지도에 표시돼요!"
    //   button={{
    //     text: '다시 생성하기',
    //     onClick() {
    //       console.log('asdf');
    //     },
    //   }}
    // >
    //   <S.RecommendContainer>
    //     {splitRecommendContentsList(RECOMMEND_CONTENTS_LIST).map((list, index) => (
    //       <S.RecommendButtonContainer key={index}>
    //         {list.map((item, index) => (
    //           <S.RecommendButton key={index}>{item}</S.RecommendButton>
    //         ))}
    //       </S.RecommendButtonContainer>
    //     ))}
    //   </S.RecommendContainer>
    // </RecommendForm>
    <RecommendForm
      title="지역을 알려주세요!"
      button={{
        text: '생성하기',
        onClick: handleSubmit(onSubmit),
      }}
    >
      <S.RecommendContainer>
        <Input
          {...register('city', { required: '올바른 도시 이름을 입력해주세요' })}
          label="도시"
          message={errors.city?.message}
          error={Boolean(errors.city?.message)}
        />
        <Input
          {...register('district', { required: '올바른 구 이름을 입력해주세요' })}
          label="구 (예: 마포구/강서구)"
          message={errors.district?.message}
          error={Boolean(errors.district?.message)}
        />
        <Input
          {...register('region', { required: '올바른 동 이름을 입력해주세요' })}
          label="동 (예: 서교동/화곡동)"
          message={errors.region?.message}
          error={Boolean(errors.region?.message)}
        />
      </S.RecommendContainer>
    </RecommendForm>
  );
};
