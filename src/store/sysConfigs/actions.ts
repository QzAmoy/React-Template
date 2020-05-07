import {
  SetLangAction,
  SetLoginStateAction,
  SET_LANG,
  SET_LOGIN_STATE,
  Lang,
  IsLogin,
} from './types';

export const setLang = (lang: Lang): SetLangAction => ({
  type: SET_LANG,
  lang,
});

export const setLoginState = (isLogin: IsLogin): SetLoginStateAction => ({
  type: SET_LOGIN_STATE,
  isLogin,
});
