import { AuthFormProps } from 'src/components';

import { onLogin, onRegister } from './auth';

export const useLogin = ({ email, password }: AuthFormProps) => {
  try {
    onLogin({ email, password });
    console.log(onLogin({ email, password }));
  } catch (err) {
    console.error(`It's Something Wrong with Login ${err}`);
  }
};

export const useRegister = ({ email, password, name }: AuthFormProps) => {
  try {
    onRegister({ email, password, name });
    console.log(onRegister({ email, password, name }));
  } catch (err) {
    console.error(`It's Something Wrong with Register ${err}`);
  }
};
