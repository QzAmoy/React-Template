import { LangState, Langs, CHANGE_LANG, ChangeLangAction } from './types';

const initialState: LangState = {
  lang: Langs.ZH,
};
const lang = (state = initialState, action: ChangeLangAction): LangState => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
};
export default lang;
