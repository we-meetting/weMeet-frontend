import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AnimatePresence } from 'framer-motion';

import { Input, RecommendForm, Text } from 'src/components';
import { useGetWindowSize, useRecommendMutation } from 'src/hooks';
import { RecommendResponse } from 'src/api';
import { useFadeInScroll } from 'src/hooks';
import { useRecommendDataStore } from 'src/stores';

import * as S from './styled';

export interface RecommendForm {
  city: string;
  district: string;
  region: string;
}

export const RecommendPage: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();

  const { mutate, isLoading } = useRecommendMutation();

  const { recommendData, setRecommendData } = useRecommendDataStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecommendForm>();

  const [isTodo, setIsTodo] = useState<boolean>(false);

  const { windowSize } = useGetWindowSize();

  const itemNum = windowSize > 768 ? 5 : 4;

  const splitRecommendContentsList = (list: RecommendResponse[]) => {
    const result = [];
    for (let i = 0; i < list.length; i += itemNum) {
      result.push(list.slice(i, i + itemNum));
    }
    return result;
  };

  const onHandleTodo = () => {
    setIsTodo((prev) => !prev);
  };

  const onSubmit = ({ city, district, region }: RecommendForm) => {
    mutate({
      city,
      district,
      region,
      isTodo,
    });
  };

  console.log(recommendData);

  return (
    <>
      {!isLoading && recommendData.length > 0 ? (
        <RecommendForm
          title="어떤 취향이신가요?"
          subTitle="선택한 장소가 지도에 표시돼요!"
          button={{
            text: '다시 생성하기',
            onClick: () => {
              setRecommendData([]);
            },
          }}
        >
          <S.RecommendResultContainer {...fadeInScroll({ delay: 0.2 })}>
            {splitRecommendContentsList(
              typeof recommendData === 'string' ? JSON.parse(recommendData) : recommendData,
            ).map((list, index) => (
              <S.RecommendResultCardContainer key={index}>
                {list.map(({ location, name }, index) => (
                  <S.RecommendResultCard key={index}>
                    <S.RecommendResultCardLink to={`/map/?location=${location}&placeName=${name}`}>
                      {name}
                    </S.RecommendResultCardLink>
                  </S.RecommendResultCard>
                ))}
              </S.RecommendResultCardContainer>
            ))}
          </S.RecommendResultContainer>
        </RecommendForm>
      ) : (
        <RecommendForm
          title="지역을 알려주세요!"
          button={{
            text: '생성하기',
            onClick: handleSubmit(onSubmit),
          }}
          isLoading={isLoading}
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
              {...register('region', { required: '올바른 장소 이름을 입력해주세요' })}
              label="장소 (예: 홍대/신촌)"
              message={errors.region?.message}
              error={Boolean(errors.region?.message)}
            />
            <S.RecommendTypeContainer>
              <Text size={1} weight={500} mobileBigText>
                할 일
              </Text>
              <AnimatePresence>
                <S.RecommendIconWrapper onClick={onHandleTodo} whileTap={{ scale: 0.8 }}>
                  {isTodo ? <S.RecommendCheckFillIcon /> : <S.RecommendCheckOutlineIcon />}
                </S.RecommendIconWrapper>
              </AnimatePresence>
            </S.RecommendTypeContainer>
          </S.RecommendContainer>
        </RecommendForm>
      )}
    </>
  );
};
