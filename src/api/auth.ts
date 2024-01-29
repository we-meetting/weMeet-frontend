import { AuthFormProps } from 'src/components';

import { API_SUFFIX, instance } from './api';

interface AuthResponseProps {
  [key: string]: string;
}

export const onLogin = async ({ email, password }: AuthFormProps) => {
  try {
    const response = await instance.post<AuthResponseProps>(API_SUFFIX.AUTH.LOGIN, {
      email: email,
      password: password,
    });
    // const accessToken = response.data.result.accessToken;
    return response;
  } catch (err) {
    console.error(`It's Something Wrong with Login ${err}`);
  }
};

export const onRegister = async ({ email, password, name }: AuthFormProps) => {
  try {
    const response = await instance.post<AuthResponseProps>(API_SUFFIX.AUTH.REGISTER, {
      email: email,
      password: password,
      name: name,
    });
    // const accessToken = response.data.result.accessToken;
    // return accessToken;
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(`It's Something Wrong with Register ${err}`);
  }
};
