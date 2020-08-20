import {
  SetLoginStateAction,
  SetAutheAction,
  SET_LOGIN_STATE,
  SET_AUTH,
  IsLogin,
  Auth,
} from './types';

export const setLoginState = (isLogin: IsLogin): SetLoginStateAction => ({
  type: SET_LOGIN_STATE,
  isLogin,
});

export const setAuth = (auth: Auth): SetAutheAction => ({
  type: SET_AUTH,
  auth,
});
