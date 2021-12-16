

import api from '../api';
import {
  SIGNUP_EMAIL,
  SIGNUP_GOOGLE,
  SIGNIN_FACEBOOK,
  LOGIN,
  UPDATE_USER_INFO,
  LOGIN_WITH_UID,
  FORGOT_PASSWORD,
  CHANGE_NOTIFICATION,
  CHANGE_PASSWORD,
  CHANGE_PROFILE_USER,
  GET_PROFILE_USER

} from './types';

export const loginApi: any = async (data: any) => {
  const response = await api.post(LOGIN, data);
  return response;
};

export const signUpEmailApi: any = async (data: any) => {
  const response = await api.post(SIGNUP_EMAIL, data);
  return response;
};

export const signInGoogleApi: any = async (data: any) => {
  const response = await api.post(SIGNUP_GOOGLE, { token: data });
  return response;
};

export const signInFacebookApi: any = async (data: any) => {
  const response = await api.post(SIGNIN_FACEBOOK, { token: data });
  return response;
};

export const updateSignUpdApi: any = async (data: any, id: string) => {
  const avatar = {
    fileName: data?.avatar?.path.replace(/^.*[\\\/]/, ''),
    name: data?.avatar?.path.replace(/^.*[\\\/]/, ''),
    width: data?.avatar?.width,
    uri: data?.avatar?.path,
    path: data?.avatar?.path,
    size: data?.avatar?.size,
    type: data?.avatar?.mime,
    height: data?.avatar?.height,
  }
  const bodyFormData = new FormData();
  bodyFormData.append('fname', data?.first_name);
  bodyFormData.append('lname', data?.last_name);
  bodyFormData.append('phone', data?.phone);
  bodyFormData.append('uname', data?.username);
  bodyFormData.append('desc', data?.description);
  bodyFormData.append('avatar', avatar);
  const response = await api.post(LOGIN_WITH_UID + id, bodyFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const forgotPasswordApi: any = async (data: any) => {
  const response = await api.post(FORGOT_PASSWORD, data);
  return response;
};

export const changeNotificationApi: any = async (data: any, id: string) => {
  const response = await api.post(CHANGE_NOTIFICATION + id + '/enable-notify', data);
  return response;
};

export const changePasswordApi: any = async (data: any) => {
  const response = await api.post(CHANGE_PASSWORD, data);
  return response;
};

export const getProfileUserApi: any = async () => {
  const response = await api.get(GET_PROFILE_USER);
  return response;
};

export const changeProfileUserApi: any = async (data: any, id: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append('fname', data?.first_name);
  bodyFormData.append('lname', data?.last_name);
  bodyFormData.append('phone', data?.phone);
  bodyFormData.append('uname', data?.username);
  bodyFormData.append('avatar', {
    fileName: data?.avatar?.path.replace(/^.*[\\\/]/, ''),
    name: data?.avatar?.path.replace(/^.*[\\\/]/, ''),
    width: data?.avatar?.width,
    uri: data?.avatar?.path,
    path: data?.avatar?.path,
    size: data?.avatar?.size,
    type: data?.avatar?.mime,
    height: data?.avatar?.height,
  });

  const response = await api.post(CHANGE_PROFILE_USER + id, bodyFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};







// export const updateUserInfoApi: any = async (data: any, id: string) => {
//   console.log('4', data?.avatar);
//   var bodyFormData = new FormData();
//   bodyFormData.append('fname', data?.first_name);
//   bodyFormData.append('lname', data?.last_name);
//   bodyFormData.append('phone', data?.phone);
//   bodyFormData.append('uname', data?.username);
//   bodyFormData.append('desc', data?.description);
//   bodyFormData.append('avatar', data?.avatar);

//   const response = await api.post(UPDATE_USER_INFO + id, bodyFormData);
//   return response;

// };


