import { AuthState, SET_LOGIN_STATE, SET_AUTH, AuthActionTypes } from './types';

const initialState = {
  isLogin: true,
  auth: ['userInfo'],
};
const auth = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case SET_AUTH:
      return {
        ...state,
        auth: [...state.auth, ...action.auth],
      };
    default:
      return state;
  }
};
export default auth;
