// import {DataSignupProps, Token, UserInfo} from '@interfaces';
import moment from 'moment';

export type AuthState = {
  loading: boolean;
  user: any;
  token: any;
  role: any;
  showIntroScreen: boolean;
};


export const INITIAL_STATE_AUTH: AuthState = {
  loading: false,
  user: null,
  token: null,
  role: null,
  showIntroScreen: true,

};
