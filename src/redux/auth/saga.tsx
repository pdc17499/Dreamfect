import { put, takeLatest } from 'redux-saga/effects';
import { saveDataUser, resetDataSignup, verifyPhonenumber } from './action';
import {
  GlobalService,

  setToken,
  removeToken,
  signUpEmailApi,

} from '@services';
// import {VERTIFIEMAIL, VERIFYCODE} from '@routeName';
import { showMessage } from 'react-native-flash-message';

import { NavigationUtils } from '@navigation';

import { select } from 'redux-saga/effects';
import { SIGNUP_EMAIL } from './type';


export interface ResponseGenerator {
  result?: any;
  data?: any;
}


export function* signUpEmailSaga(action: any) {
  console.log('22');

  try {
    GlobalService.showLoading();
    console.log('payy', action?.payload);

    const { body } = action?.payload;
    const result: ResponseGenerator = yield signUpEmailApi(body);

    console.log({ result });
    if (result) {
      console.log('33');

      // NavigationUtils.reset(VERIFY_ACCOUNT);
      // const token = result?.data?.tokens?.access?.token;
      // yield setToken(token);
      // yield put(saveDataUser(result?.data));
    }
  } catch (error) {
  } finally {
    GlobalService.hideLoading();
  }
}


export function* authSaga() {

  yield takeLatest(SIGNUP_EMAIL, signUpEmailSaga);

}
