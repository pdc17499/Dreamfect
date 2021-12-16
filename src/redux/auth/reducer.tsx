import {
  SAVE_DATA_USER,
  SET_DATA_SIGNUP,
  LOGOUT,
  RESET_DATA_SIGNUP,
  SET_USER_ID,
  SET_PROFILE_USER
} from './type';
import { INITIAL_STATE_AUTH } from './state';
import _ from 'lodash';



export default function dataSave(state = INITIAL_STATE_AUTH, action: any) {
  switch (action.type) {
    case SAVE_DATA_USER:
      return {
        ...state,
        user: action?.payload || state?.user,
        token: action?.payload?.idToken || state?.token,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        role: null,
        dataSignup: {}
      };
    case SET_DATA_SIGNUP:
      return {
        ...state,
        dataSignup: action?.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        userID: action?.payload
      };
    case RESET_DATA_SIGNUP:
      const nState = { ...state };
      nState.dataSignup = {};
      return nState;

    case SET_PROFILE_USER:
      return {
        ...state,
        profileUser: action?.payload
      };
    default:
      return state;
  }
}
