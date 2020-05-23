import {
  SetLangAction,
  SetLoginStateAction,
  SetAutheAction,
  SET_LANG,
  SET_LOGIN_STATE,
  SET_AUTH,
  Lang,
  IsLogin,
  Auth,
} from './types';

export const setLang = (lang: Lang): SetLangAction => ({
  type: SET_LANG,
  lang,
});

export const setLoginState = (isLogin: IsLogin): SetLoginStateAction => ({
  type: SET_LOGIN_STATE,
  isLogin,
});

export const setAuth = (auth: Auth): SetAutheAction => ({
  type: SET_AUTH,
  auth,
});
