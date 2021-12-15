import { DataSignupProps } from '@interfaces';
import moment from 'moment';

export type AuthState = {
  loading: boolean;
  user: any;
  token: any;
  showIntroScreen: boolean;
  dataSignup: DataSignupProps | {};
};

export const INITIAL_STATE_DATA_SIGN_UP: DataSignupProps = {
  tokenSignUp: '',
  first_name: '',
  last_name: '',
  phone: '',
};

export const INITIAL_STATE_AUTH: AuthState = {
  loading: false,
  user: null,
  token: null,
  showIntroScreen: true,
  dataSignup: INITIAL_STATE_DATA_SIGN_UP,
};

