import {
  SAVE_DATA_USER,
  LOGIN,
  SIGNUP_EMAIL,
  LOGOUT,
  REMOVE_TOKEN,
  SET_DATA_SIGNUP,
  RESET_DATA_SIGNUP,
  FORGOT_PASSWORD,
  RESET_NEW_PASSWORD,
  UPDATE_USER_INFO,
  SIGNUP_GOOGLE,
  SET_USER_ID,
  SIGNIN_FACEBOOK,
  SIGNUP_FACEBOOK,
  SIGNIN_GOOGLE,
  UPDATE_SIGNUP_INFO,
  SAVE_TOKEN_REDUX,

  // Profile
  CHANGE_NOTIFICATION,
  CHANGE_PROFILE_USER,
  SET_PROFILE_USER,
  CHANGE_PASSWORD,
  GET_PROFILE_USER,
  GET_DREAM_HOMEPAGE,
  SET_LIST_DREAM,
  FIND_USER,
  SIGNIN_APPLE,
  SIGNUP_APPLE,
} from '@redux';

export const setUserId = (payload: string) => ({
  type: SET_USER_ID,
  payload,
});

export const loginApp = (payload: any) => ({
  type: LOGIN,
  payload,
});

export const logoutApp = () => ({
  type: LOGOUT,
});

export const signUpEmail = (payload: any) => ({
  type: SIGNUP_EMAIL,
  payload,
});

export const signInGoogle = (payload: any) => ({
  type: SIGNIN_GOOGLE,
  payload,
});

export const signInFacebook = (payload: any) => ({
  type: SIGNIN_FACEBOOK,
  payload,
});

export const signUpFacebook = (payload: any) => ({
  type: SIGNUP_FACEBOOK,
  payload,
});

export const signUpGoogle = (payload: any) => ({
  type: SIGNUP_GOOGLE,
  payload,
});

export const signInApple = (payload: any) => ({
  type: SIGNIN_APPLE,
  payload,
});

export const signUpApple = (payload: any) => ({
  type: SIGNUP_APPLE,
  payload,
});

export const resetDataSignup = () => ({
  type: RESET_DATA_SIGNUP,
});

export const forgotPassword = (payload: any) => ({
  type: FORGOT_PASSWORD,
  payload,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const setDataSignup = (payload: any) => ({
  type: SET_DATA_SIGNUP,
  payload,
});

export const updateUserInfo = (payload: any) => ({
  type: UPDATE_USER_INFO,
  payload,
});

export const updateSignUpInfo = (payload: any) => ({
  type: UPDATE_SIGNUP_INFO,
  payload,
});

export const changePassword = (payload: any) => ({
  type: CHANGE_PASSWORD,
  payload,
});

export const getProfileUser = () => ({
  type: GET_PROFILE_USER,
});

export const setProfileUser = (payload: any) => ({
  type: SET_PROFILE_USER,
  payload,
});

export const changeProfileUser = (payload: any, id: string) => ({
  type: CHANGE_PROFILE_USER,
  payload,
  id,
});

export const saveDataUser = (payload: any) => ({
  type: SAVE_DATA_USER,
  payload,
});

export const saveTokenRedux = (payload: any) => ({
  type: SAVE_TOKEN_REDUX,
  payload,
});

export const changeNotification = (payload: any, id: string) => ({
  type: CHANGE_NOTIFICATION,
  payload,
  id,
});

export const getDreamHomePage = () => ({
  type: GET_DREAM_HOMEPAGE,
});

export const setListDream = (payload: any) => ({
  type: SET_LIST_DREAM,
  payload,
});

export const findUser = (payload: any) => ({
  type: FIND_USER,
  payload,
});
