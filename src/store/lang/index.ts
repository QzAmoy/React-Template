import { langState, langs, CHANGE_LANG, ChangeLangAction } from './types';

const initialState: langState = {
  lang: langs.ZH,
};
const lang = (state = initialState, action: ChangeLangAction): langState => {
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
