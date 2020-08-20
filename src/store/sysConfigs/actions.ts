import { SetLangAction, SET_LANG, Lang } from './types';

const setLang = (lang: Lang): SetLangAction => ({
  type: SET_LANG,
  lang,
});

export default setLang;
