import { SysConfigState, Langs, SET_LANG, SysConfigActionTypes } from './types';

const initialState = {
  lang: Langs.ZH,
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
    default:
      return state;
  }
};
export default sysConfigs;
