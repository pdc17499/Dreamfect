
import api from '../api';
import {
  SIGNUP_EMAIL,
  SIGNUP_GOOGLE,
  LOGIN

} from './types';

export const loginApi: any = async (data: any) => {
  const response = await api.post(LOGIN, data);
  return response;
};

export const signUpEmailApi: any = async (data: any) => {
  console.log('data', data);
  const response = await api.post(SIGNUP_EMAIL, data);
  return response;
};

export const signUpGoogleApi: any = async (data: any) => {
  console.log('data', data);
  const response = await api.post(SIGNUP_GOOGLE, { token: data });
  return response;
};

