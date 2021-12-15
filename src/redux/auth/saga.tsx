import { put, takeLatest } from 'redux-saga/effects';
import { saveDataUser, resetDataSignup } from './action';
import {
  GlobalService,
  setToken,
  removeToken,
  signUpEmailApi,
  signUpGoogleApi,
  loginApi,
} from '@services';
import { showMessage } from 'react-native-flash-message';
import { NavigationUtils } from '@navigation';
import { SIGNUP_EMAIL, SIGNUP_GOOGLE, LOGIN } from './type';
import { VERIFICATION, WELCOME } from '@routeName';

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
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signUpEmailSaga(action: any) {
  try {
    GlobalService.showLoading();
    console.log('payload', action?.payload);
    const result: ResponseGenerator = yield signUpEmailApi(action?.payload);
    console.log({ result });
    if (result) {
      console.log('33');
      // NavigationUtils.navigate(VERIFICATION, { params: 'SignUp' });
    }
  } catch (error) {
  } finally {
    GlobalService.hideLoading();
  }
}

export function* signUpGoogleSaga(action: any) {

  try {
    GlobalService.showLoading();
    console.log('payload2', action?.payload);
    const result: ResponseGenerator = yield signUpGoogleApi(action?.payload);
    console.log({ result });
    if (result) {
      console.log('5');
      // NavigationUtils.navigate(VERIFICATION);
    }
  } catch (error) {
  } finally {
    GlobalService.hideLoading();
  }
}



export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP_EMAIL, signUpEmailSaga);
  yield takeLatest(SIGNUP_GOOGLE, signUpGoogleSaga);


}
