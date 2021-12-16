import { put, takeLatest } from 'redux-saga/effects';
import { saveDataUser, resetDataSignup, setUserId, setProfileUser } from './action';
import {
  GlobalService,
  setToken,
  removeToken,
  signUpEmailApi,
  signInGoogleApi,
  loginApi,
  signInFacebookApi,
  updateSignUpdApi,
  forgotPasswordApi,
  changeNotificationApi,
  changePasswordApi,
  getProfileUserApi,
} from '@services';
import { showMessage } from 'react-native-flash-message';
import { NavigationUtils } from '@navigation';
import {
  SIGNUP_EMAIL,
  SIGNUP_GOOGLE,
  LOGIN,
  SIGNIN_FACEBOOK,
  SIGNIN_GOOGLE,
  UPDATE_USER_INFO,
  UPDATE_SIGNUP_INFO,
  SIGNUP_FACEBOOK,
  FORGOT_PASSWORD,
  CHANGE_NOTIFICATION,
  CHANGE_PASSWORD,
  GET_PROFILE_USER
} from './type';
import { SIGNUP_INFO, SUCCESS_SCREEN, VERIFICATION, WELCOME } from '@routeName';
import { Linking } from 'react-native';

export interface ResponseGenerator {
  result?: any;
  data?: any;
}

export function* loginSaga(action: any) {
  try {
    console.log('act', action?.payload);
    GlobalService.showLoading();
    const result: ResponseGenerator = yield loginApi(action.payload);
    console.log('resss', result);
    const token = result?.data?.data?.idToken;
    yield setToken(token);
    yield put(saveDataUser(result?.data?.data));
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signUpEmailSaga(action: any) {
  try {
    GlobalService.showLoading();
    console.log('payload', action?.payload);
    const result: ResponseGenerator = yield signUpEmailApi(action?.payload);
    console.log('ress', result);
    if (result) {
      yield put(setUserId(result?.data?.data?.uid));
      console.log('33');
      NavigationUtils.navigate(VERIFICATION, { params: 'SignUp' });
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signInGoogleSaga(action: any) {
  try {
    GlobalService.showLoading();
    console.log('payload2', action?.payload);
    const result: ResponseGenerator = yield signInGoogleApi(action?.payload);
    console.log({ result });
    if (result) {
      const token = result?.data?.data?.idToken;
      yield setToken(token);
      yield put(saveDataUser(result?.data?.data));
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signUpGoogleSaga(action: any) {
  try {
    GlobalService.showLoading();
    console.log('payload2', action?.payload);
    const result: ResponseGenerator = yield signInGoogleApi(action?.payload);
    console.log({ result });
    if (result) {
      const id = result?.data?.data?.localId;
      yield put(setUserId(id));
      console.log('7');
      NavigationUtils.navigate(SIGNUP_INFO);
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signInFaceBookSaga(action: any) {
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield signInFacebookApi(action?.payload);
    console.log({ result });
    if (result) {
      const token = result?.data?.data?.idToken;
      yield setToken(token);
      yield put(saveDataUser(result?.data?.data));
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signUpFaceBookSaga(action: any) {
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield signInFacebookApi(action?.payload);
    if (result) {
      const id = result?.data?.data?.localId;
      yield put(setUserId(id));
      console.log('7');
      NavigationUtils.navigate(SIGNUP_INFO);
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* upDateSignUpInfoSaga(action: any) {
  console.log('acc', action.payload.id);
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield updateSignUpdApi(action.payload, action.payload.id);
    if (result) {
      const token = result?.data?.data?.idToken;
      console.log('too', token);
      yield setToken(token);
      yield put(saveDataUser(result?.data?.data));
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* forgotPasswordSaga(action: any) {
  console.log('acc', action.payload);
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield forgotPasswordApi(action.payload);
    console.log({ result });
    if (result) {
      const url = result?.data?.data
      Linking.openURL(url);
      NavigationUtils.navigate(LOGIN);
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* changeNotificationSaga(action: any) {
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield changeNotificationApi(action.payload, action.id);
    if (result) {
      showMessage({
        type: 'success',
        message: 'Success!',
      });
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* changePasswordSaga(action: any) {
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield changePasswordApi(action.payload);
    console.log({ result });
    if (result) {
      GlobalService.hideLoading();
      NavigationUtils.navigate(SUCCESS_SCREEN);
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* getProfileUserSaga() {
  try {
    GlobalService.showLoading();
    const result: ResponseGenerator = yield getProfileUserApi();
    console.log({ result });
    if (result) {
      yield put(setProfileUser(result?.data))
    }
  } catch (error) {
    GlobalService.hideLoading();
  } finally {
    GlobalService.hideLoading();
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP_EMAIL, signUpEmailSaga);
  yield takeLatest(SIGNIN_GOOGLE, signInGoogleSaga);
  yield takeLatest(SIGNUP_GOOGLE, signUpGoogleSaga);
  yield takeLatest(SIGNIN_FACEBOOK, signInFaceBookSaga);
  yield takeLatest(SIGNUP_FACEBOOK, signUpFaceBookSaga);
  yield takeLatest(UPDATE_SIGNUP_INFO, upDateSignUpInfoSaga);
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(CHANGE_NOTIFICATION, changeNotificationSaga);
  yield takeLatest(CHANGE_PASSWORD, changePasswordSaga);
  yield takeLatest(GET_PROFILE_USER, getProfileUserSaga);




}
