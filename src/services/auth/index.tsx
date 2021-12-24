import api from '../api';
import * as qs from 'qs';
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
  GET_PROFILE_USER,
  GET_MY_LIST_DREAM,
  GET_LIST_USER,
  GET_DREAM_HOMEPAGE,
  SIGNIN_APPLE,
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
  const response = await api.post(SIGNUP_GOOGLE, {token: data});
  return response;
};

export const signInFacebookApi: any = async (data: any) => {
  const response = await api.post(SIGNIN_FACEBOOK, {token: data});
  return response;
};

export const signInAppleApi: any = async (data: any) => {
  const response = await api.post(SIGNIN_APPLE, {token: data});
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
  };
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
  const response = await api.post(
    CHANGE_NOTIFICATION + id + '/enable-notify',
    data,
  );
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
  bodyFormData.append('fname', data?.fname);
  bodyFormData.append('lname', data?.lname);
  bodyFormData.append('phone', data?.phone);
  bodyFormData.append('uname', data?.uname);
  bodyFormData.append('desc', data?.desc);
  if (data?.avatar) {
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
  }
  const response = await api.post(CHANGE_PROFILE_USER + id, bodyFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const getMyListDreamApi: any = async (id: string) => {
  const response = await api.get(GET_MY_LIST_DREAM + 'dream?page=1&type=1');
  return response;
};

export const getFollowDreamApi: any = async (id: string) => {
  const response = await api.get(GET_MY_LIST_DREAM + 'dream?page=1&type=2');
  return response;
};

export const getListUserApi: any = async () => {
  const response = await api.get(GET_LIST_USER);
  return response;
};

export const getListSearchUserApi: any = async (data: string) => {
  const response = await api.get(GET_LIST_USER, {params: {search: data}});
  return response;
};

export const getDreamHomePageApi: any = async () => {
  const response = await api.get(GET_DREAM_HOMEPAGE);
  return response;
};

export const findUserApi: any = async (data: any) => {
  console.log('data', data);
  let array = data.map((e: string) => 'users/' + e);
  console.log('param2', array);

  const response = await api.get(GET_DREAM_HOMEPAGE, {
    params: {arr: array},
    paramsSerializer: params => {
      return qs.stringify(params);
    },
  });
  return response;
};
