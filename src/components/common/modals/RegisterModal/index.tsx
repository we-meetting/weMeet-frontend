import { useForm } from 'react-hook-form';

import { useTheme } from '@emotion/react';

import {
  AuthFormLayout,
  AuthFormProps,
  AuthInnerForm,
  AuthUnderContent,
} from 'src/components/common/AuthForm';
import { Text } from 'src/components/common/Text';
import { useModal } from 'src/providers';

import { LoginModal } from '../LoginModal';

export const RegisterModal: React.FC = () => {
  const theme = useTheme();

  const { open, close } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<AuthFormProps>();

  const onSubmit = async (data: AuthFormProps) => {
    await console.log(data.email, data.name, data.password);
  };
  const onLoginModalOpen = () => {
    close();
    open({ children: <LoginModal /> });
  };
  return (
    <>
      <AuthFormLayout>
        <Text size={3} weight={600}>
          처음이신가요?
        </Text>
        <AuthInnerForm onSubmit={handleSubmit(onSubmit)}>
          <AuthInnerForm.AuthInputContainer>
            <AuthInnerForm.AuthInput
              placeholder="이메일"
              {...register('email', {
                required: '* 필수 항목입니다.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: '* 이메일 형식이 아닙니다.',
                },
              })}
            />
            <Text
              size={0.8}
              weight={300}
              style={
                !Boolean(errors.password) ? { color: theme.black } : { color: theme.warningRed }
              }
            >
              {!Boolean(errors.email) ? '필수 항목입니다.' : errors.email?.message}
            </Text>
          </AuthInnerForm.AuthInputContainer>

          <AuthInnerForm.AuthInputContainer>
            <AuthInnerForm.AuthInput
              placeholder="이름"
              {...register('name', {
                required: '* 필수 항목입니다.',
              })}
            />
            <Text
              size={0.8}
              weight={300}
              style={!Boolean(errors.name) ? { color: theme.black } : { color: theme.warningRed }}
            >
              {!Boolean(errors.name) ? '필수 항목입니다.' : errors.password?.message}
            </Text>
          </AuthInnerForm.AuthInputContainer>

          <AuthInnerForm.AuthInputContainer>
            <AuthInnerForm.AuthInput
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: '* 필수 항목입니다.',
                minLength: { value: 8, message: '* 비밀번호는 8자 이상이어야 합니다.' },
                maxLength: { value: 20, message: '* 비밀번호는 20자 이하여야 합니다.' },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$&*]).+$/,
                  message: '* 비밀번호는 영문 대문자와 특수문자가 포함되어야 합니다.',
                },
              })}
            />
            <Text
              size={0.8}
              weight={300}
              style={
                !Boolean(errors.password) ? { color: theme.black } : { color: theme.warningRed }
              }
            >
              {!Boolean(errors.password) ? '필수 항목입니다.' : errors.password?.message}
            </Text>
          </AuthInnerForm.AuthInputContainer>
        </AuthInnerForm>

        <AuthUnderContent>
          <AuthUnderContent.SubmitButton onClick={handleSubmit(onSubmit)}>
            <Text size={1.2} weight={800} style={{ color: theme.white }}>
              회원가입
            </Text>
          </AuthUnderContent.SubmitButton>
          <AuthUnderContent.LinkMessage onClick={onLoginModalOpen}>
            <Text size={1} weight={300} style={{ color: theme.black }}>
              이미 계정이 있으신가요?
            </Text>
          </AuthUnderContent.LinkMessage>
        </AuthUnderContent>
      </AuthFormLayout>
    </>
  );
};
