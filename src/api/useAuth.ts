import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AuthFormProps } from 'src/components';

import { onLogin, onRegister } from './auth';

// export const useLogin = ({ email, password, name }: AuthFormProps): UseMutationResult => {
//   const navigate = useNavigate();
//   return useMutation('useLogin', () => login({ email, password, name: '' }), {
//     onSuccess: (accessToken) => {
//       console.log(name, email, password);
//       localStorage.setItem('accessToken', accessToken);
//       navigate('/');
//     },
//     onError: (err) => {
//       console.log(err);
//     },
//     retry: 0,
//   });
// };

export const useLogin = ({ email, password }: AuthFormProps) => {
  try {
    onLogin({ email, password });
    console.log(onLogin({ email, password }));
  } catch (err) {
    console.error(`It's Something Wrong with Login ${err}`);
  }
};

// export const useRegister = ({ email, password, name }: AuthFormProps) => {
//   const navigate = useNavigate();
//   return useMutation('useRegister', () => register({ email, password, name }), {
//     onSuccess: () => {
//       console.error(name, email, password);
//       navigate('/');
//     },
//     onError: (err) => {
//       console.error(err);
//     },
//     retry: 0,
//   });
// };

export const useRegister = ({ email, password, name }: AuthFormProps) => {
  try {
    onRegister({ email, password, name });
    console.log(onRegister({ email, password, name }));
  } catch (err) {
    console.error(`It's Something Wrong with Register ${err}`);
  }
};
