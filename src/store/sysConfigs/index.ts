import {
  SysConfigState,
  Langs,
  SET_LANG,
  SET_LOGIN_STATE,
  SET_AUTH,
  SysConfigActionTypes,
} from './types';

const initialState = {
  lang: Langs.ZH,
  isLogin: true,
  auth: ['userInfo'],
};
const sysConfigs = (
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
    case SET_AUTH:
      return {
        ...state,
        auth: action.auth,
      };
    default:
      return state;
  }
};
export default sysConfigs;
