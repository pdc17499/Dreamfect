import api from '../api';
import {
  SIGNUP_EMAIL,

} from './types';


export const signUpEmailApi: any = async (data: any) => {
  const response = await api.post(SIGNUP_EMAIL, data);
  return response;
};

// export const loginApi: any = async (data: any) => {
//   const response = await api.post(LOGIN, data);
//   return response;
// };
