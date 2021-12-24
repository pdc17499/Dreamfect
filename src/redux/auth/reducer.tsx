import {
  SAVE_DATA_USER,
  SET_DATA_SIGNUP,
  LOGOUT,
  RESET_DATA_SIGNUP,
  SET_USER_ID,
  SET_PROFILE_USER,
  SET_LIST_DREAM
} from './type';
import { INITIAL_STATE_AUTH } from './state';
import _ from 'lodash';
import { SAVE_TOKEN_REDUX } from '.';

export default function dataSave(state = INITIAL_STATE_AUTH, action: any) {
  switch (action.type) {
    case SAVE_DATA_USER:
      return {
        ...state,
        user: action?.payload || state?.user,
      };
    case SAVE_TOKEN_REDUX:
      return {
        ...state,
        token: action?.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        role: null,
        dataSignup: {},
        listDream: []
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
    case SET_LIST_DREAM:
      return {
        ...state,
        listDream: action?.payload
      };
    default:
      return state;
  }
}
