import {
  SysConfigState,
  Langs,
  SET_LANG,
  SET_LOGIN_STATE,
  SysConfigActionTypes,
} from './types';

const initialState = {
  lang: Langs.ZH,
  isLogin: false,
};
const lang = (
  state = initialState,
  action: SysConfigActionTypes
): SysConfigState => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.lang,
      };
    case SET_LOGIN_STATE:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
};
export default lang;
