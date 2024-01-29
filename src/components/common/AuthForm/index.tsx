import * as S from './styled';

export interface AuthLayoutProps {
  children: React.ReactNode;
}
export interface AuthFormProps {
  email: string;
  name?: string | null;
  password: string;
}

export const AuthFormLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <S.AuthContainer>{children}</S.AuthContainer>;
};

export const AuthInnerForm = Object.assign(S.AuthInputForm, {
  AuthInputContainer: S.AuthInputContainer,
  AuthInput: S.AuthInput,
});

export const AuthUnderContent = Object.assign(S.AuthUnderContentContainer, {
  SubmitButton: S.AuthSubmitButton,
  LinkMessage: S.LinkAuthWrapper,
});
