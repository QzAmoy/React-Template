import produce from 'immer';
import { AuthState, SET_LOGIN_STATE, SET_AUTH, AuthActionTypes } from './types';

const initialState: AuthState = {
  isLogin: true,
  auth: ['userInfo', 'userInfo2'],
};
const auth = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return produce(state, (draft) => {
        draft.isLogin = action.isLogin;
      });
    case SET_AUTH:
      return produce(state, (draft) => {
        draft.auth = action.auth;
      });
    default:
      return state;
  }
};
export default auth;
